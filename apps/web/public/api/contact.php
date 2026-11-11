<?php
/**
 * Endpoint del formulario de contacto.
 * Recibe JSON { nombre, email, telefono, mensaje, empresa_web } y envía un correo
 * con mail() del hosting (Hostinger). `empresa_web` es un campo trampa anti-spam.
 */

const CONTACT_TO = 'pabloemiliorozo85@gmail.com';
const SUBJECT_PREFIX = 'Nuevo mensaje web - PR Producciones';

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Método no permitido.']);
}

$raw = file_get_contents('php://input', false, null, 0, 20000);
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    respond(400, ['ok' => false, 'error' => 'Solicitud inválida.']);
}

// Honeypot: los humanos no ven este campo. Si viene lleno, fingimos éxito.
if (!empty($data['empresa_web'])) {
    respond(200, ['ok' => true]);
}

$clean = static function ($value, int $max): string {
    $value = is_string($value) ? trim($value) : '';
    $value = str_replace(["\r", "\0"], '', $value);
    return mb_substr($value, 0, $max);
};

$nombre   = preg_replace('/\s+/', ' ', $clean($data['nombre'] ?? '', 120));
$email    = strtolower($clean($data['email'] ?? '', 254));
$telefono = preg_replace('/\s+/', ' ', $clean($data['telefono'] ?? '', 40));
$mensaje  = $clean($data['mensaje'] ?? '', 1000);

$digits = preg_replace('/\D/', '', $telefono);
if (
    mb_strlen($nombre) < 3 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($digits) < 7 || strlen($digits) > 15 ||
    mb_strlen($mensaje) < 10 ||
    preg_match('/[\n]/', $nombre . $email . $telefono)
) {
    respond(422, ['ok' => false, 'error' => 'Datos inválidos.']);
}

// Límite simple por IP: 1 envío cada 30 segundos.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$lockFile = sys_get_temp_dir() . '/prp_contact_' . md5($ip);
if (is_file($lockFile) && (time() - filemtime($lockFile)) < 30) {
    respond(429, ['ok' => false, 'error' => 'Espera unos segundos antes de enviar otro mensaje.']);
}
@touch($lockFile);

$host = preg_replace('/^www\./', '', strtolower($_SERVER['HTTP_HOST'] ?? 'prproducciones.com'));
$host = preg_replace('/[^a-z0-9.-]/', '', $host) ?: 'prproducciones.com';
$from = 'no-reply@' . $host;

$subject = '=?UTF-8?B?' . base64_encode(SUBJECT_PREFIX . ': ' . $nombre) . '?=';
$body = "Nuevo mensaje desde el formulario de contacto\n\n"
    . "Nombre:   {$nombre}\n"
    . "Correo:   {$email}\n"
    . "Teléfono: {$telefono}\n"
    . "Fecha:    " . date('Y-m-d H:i') . "\n\n"
    . "Mensaje:\n{$mensaje}\n";

$headers = implode("\r\n", [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    "From: PR Producciones Web <{$from}>",
    "Reply-To: {$email}",
]);

$sent = @mail(CONTACT_TO, $subject, $body, $headers, '-f' . $from);

if (!$sent) {
    respond(500, ['ok' => false, 'error' => 'No se pudo enviar el correo.']);
}

respond(200, ['ok' => true]);
