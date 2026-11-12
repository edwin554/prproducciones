<?php
/**
 * Endpoint del formulario de contacto.
 * Recibe JSON { nombre, email, telefono, tipoEvento, ciudad, fecha, asistentes, mensaje,
 * empresa_web }, guarda el mensaje
 * en data/mensajes.log.php y envía un aviso por correo: por SMTP autenticado si
 * config.php trae credenciales, o con mail() del hosting como respaldo.
 * `empresa_web` es un campo trampa anti-spam.
 */

// Destinatarios del aviso: los mismos correos que se muestran en la página de contacto.
const CONTACT_TO = ['pabloemiliorozo85@gmail.com', 'mexpress185@gmail.com'];
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
$tipoEvento  = preg_replace('/\s+/', ' ', $clean($data['tipoEvento'] ?? '', 80));
$ciudad      = preg_replace('/\s+/', ' ', $clean($data['ciudad'] ?? '', 80));
$asistentes  = preg_replace('/\s+/', ' ', $clean($data['asistentes'] ?? '', 40));
$fechaEvento = $clean($data['fecha'] ?? '', 10);
if ($fechaEvento !== '' && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $fechaEvento)) {
    $fechaEvento = '';
}

$digits = preg_replace('/\D/', '', $telefono);
// Formulario actual: tipo de evento + ciudad. (Compatibilidad: versión anterior con solo mensaje.)
$detalleOk = ($tipoEvento !== '' && mb_strlen($ciudad) >= 2) || mb_strlen($mensaje) >= 10;
if (
    mb_strlen($nombre) < 3 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($digits) < 7 || strlen($digits) > 15 ||
    !$detalleOk ||
    preg_match('/[\n]/', $nombre . $email . $telefono . $tipoEvento . $ciudad . $asistentes)
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

date_default_timezone_set('America/Bogota');
$fecha = date('Y-m-d H:i');

// 1) Guardar el mensaje en el servidor antes de enviarlo, para no perder
//    ningún contacto aunque el correo falle. La carpeta data/ está bloqueada
//    al navegador y el archivo empieza con exit para que no se pueda leer vía PHP.
$leadsFile = __DIR__ . '/data/mensajes.log.php';
if (!is_file($leadsFile)) {
    @file_put_contents($leadsFile, "<?php exit; ?>\n", LOCK_EX);
}
$lead = json_encode(
    [
        'fecha' => $fecha, 'nombre' => $nombre, 'email' => $email, 'telefono' => $telefono,
        'tipoEvento' => $tipoEvento, 'ciudad' => $ciudad, 'fechaEvento' => $fechaEvento,
        'asistentes' => $asistentes, 'mensaje' => $mensaje, 'ip' => $ip,
    ],
    JSON_UNESCAPED_UNICODE
);
$saved = @file_put_contents($leadsFile, $lead . "\n", FILE_APPEND | LOCK_EX) !== false;

// 2) Enviar el aviso por correo.
$subject = SUBJECT_PREFIX . ': ' . ($tipoEvento !== '' ? "{$tipoEvento} en {$ciudad} - " : '') . $nombre;
$body = "Nueva solicitud de cotización desde la web\n\n"
    . "Nombre:          {$nombre}\n"
    . "Correo:          {$email}\n"
    . "Teléfono:        {$telefono}\n\n"
    . "Tipo de evento:  " . ($tipoEvento ?: '-') . "\n"
    . "Ciudad:          " . ($ciudad ?: '-') . "\n"
    . "Fecha evento:    " . ($fechaEvento ?: 'Sin definir') . "\n"
    . "Asistentes:      " . ($asistentes ?: 'Sin definir') . "\n\n"
    . "Detalles:\n" . ($mensaje ?: '(sin detalles)') . "\n\n"
    . "Recibido: {$fecha}\n";

// config.php lo genera el despliegue a partir de los secretos SMTP_* de GitHub.
$config = is_file(__DIR__ . '/config.php') ? (require __DIR__ . '/config.php') : [];
$smtp = $config['smtp'] ?? [];

if (!empty($smtp['host']) && !empty($smtp['user']) && !empty($smtp['pass'])) {
    // Envío autenticado con el buzón del dominio (SPF/DKIM correctos → no cae en spam).
    require __DIR__ . '/lib/SmtpMailer.php';
    $mailer = new SmtpMailer($smtp['host'], (int) ($smtp['port'] ?? 465), $smtp['user'], $smtp['pass']);
    $sent = $mailer->send($smtp['user'], 'PR Producciones Web', CONTACT_TO, $email, $subject, $body);
    if (!$sent) {
        error_log('contact.php SMTP: ' . $mailer->getLastError());
    }
} else {
    // Respaldo mientras no haya SMTP configurado: mail() del hosting.
    $host = preg_replace('/^www\./', '', strtolower($_SERVER['HTTP_HOST'] ?? 'prproduccionesbtl.com'));
    $host = preg_replace('/[^a-z0-9.-]/', '', $host) ?: 'prproduccionesbtl.com';
    $from = 'no-reply@' . $host;
    $headers = implode("\r\n", [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        "From: PR Producciones Web <{$from}>",
        "Reply-To: {$email}",
    ]);
    $sent = @mail(implode(', ', CONTACT_TO), '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, $headers, '-f' . $from);
}

if (!$sent && !$saved) {
    respond(500, ['ok' => false, 'error' => 'No se pudo enviar el correo.']);
}

if (!$sent) {
    // El mensaje quedó guardado, pero avisamos al cliente para que también escriba por WhatsApp.
    respond(502, ['ok' => false, 'saved' => true, 'error' => 'No se pudo enviar el correo.']);
}

respond(200, ['ok' => true]);
