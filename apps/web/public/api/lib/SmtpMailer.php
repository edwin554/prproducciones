<?php
/**
 * Cliente SMTP mínimo con autenticación (AUTH LOGIN) sobre SSL (puerto 465)
 * o STARTTLS (puerto 587). Suficiente para enviar avisos de texto plano
 * desde el buzón del dominio sin depender de mail().
 */
final class SmtpMailer
{
    private $socket;
    private string $lastError = '';

    public function __construct(
        private string $host,
        private int $port,
        private string $user,
        private string $pass,
        private int $timeout = 15
    ) {
    }

    public function getLastError(): string
    {
        return $this->lastError;
    }

    /**
     * @param string[] $to
     */
    public function send(string $fromEmail, string $fromName, array $to, string $replyTo, string $subject, string $body): bool
    {
        try {
            $this->connect();
            $this->command('EHLO ' . $this->ehloName(), 250);

            if ($this->port !== 465) {
                $this->command('STARTTLS', 220);
                if (!stream_socket_enable_crypto($this->socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
                    throw new RuntimeException('No se pudo iniciar TLS.');
                }
                $this->command('EHLO ' . $this->ehloName(), 250);
            }

            $this->command('AUTH LOGIN', 334);
            $this->command(base64_encode($this->user), 334);
            $this->command(base64_encode($this->pass), 235);

            $this->command('MAIL FROM:<' . $fromEmail . '>', 250);
            foreach ($to as $recipient) {
                $this->command('RCPT TO:<' . $recipient . '>', [250, 251]);
            }
            $this->command('DATA', 354);

            $headers = [
                'Date: ' . date(DATE_RFC2822),
                'From: ' . $this->encodeHeader($fromName) . ' <' . $fromEmail . '>',
                'To: ' . implode(', ', $to),
                'Reply-To: ' . $replyTo,
                'Subject: ' . $this->encodeHeader($subject),
                'Message-ID: <' . bin2hex(random_bytes(12)) . '@' . substr(strrchr($fromEmail, '@'), 1) . '>',
                'MIME-Version: 1.0',
                'Content-Type: text/plain; charset=UTF-8',
                'Content-Transfer-Encoding: base64',
            ];
            $message = implode("\r\n", $headers) . "\r\n\r\n"
                . rtrim(chunk_split(base64_encode($body), 76, "\r\n")) . "\r\n.";
            $this->command($message, 250);
            $this->write('QUIT');

            return true;
        } catch (Throwable $e) {
            $this->lastError = $e->getMessage();
            return false;
        } finally {
            if (is_resource($this->socket)) {
                fclose($this->socket);
            }
        }
    }

    private function connect(): void
    {
        $scheme = $this->port === 465 ? 'ssl' : 'tcp';
        $this->socket = @stream_socket_client(
            "{$scheme}://{$this->host}:{$this->port}",
            $errno,
            $errstr,
            $this->timeout
        );
        if (!$this->socket) {
            throw new RuntimeException("Conexión SMTP fallida: {$errstr} ({$errno})");
        }
        stream_set_timeout($this->socket, $this->timeout);
        $this->expect(220);
    }

    private function ehloName(): string
    {
        return preg_replace('/[^a-z0-9.-]/i', '', $_SERVER['SERVER_NAME'] ?? 'localhost') ?: 'localhost';
    }

    private function encodeHeader(string $value): string
    {
        return '=?UTF-8?B?' . base64_encode($value) . '?=';
    }

    /**
     * @param int|int[] $expected
     */
    private function command(string $line, $expected): string
    {
        $this->write($line);
        return $this->expect($expected);
    }

    private function write(string $line): void
    {
        fwrite($this->socket, $line . "\r\n");
    }

    /**
     * @param int|int[] $expected
     */
    private function expect($expected): string
    {
        $response = '';
        while (($line = fgets($this->socket, 515)) !== false) {
            $response .= $line;
            // Las respuestas multilínea usan "250-..." y la última "250 ...".
            if (strlen($line) < 4 || $line[3] === ' ') {
                break;
            }
        }
        $code = (int) substr($response, 0, 3);
        if (!in_array($code, (array) $expected, true)) {
            throw new RuntimeException('SMTP respondió: ' . trim($response));
        }
        return $response;
    }
}
