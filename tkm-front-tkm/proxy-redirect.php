<?php
// proxy-redirect.php - Interceptador de requisições de tracking

$checkout_url = 'https://pay.speedsellx.com/6876DDD959482';

// Verificar se a requisição vem de tracking
$is_tracking_request = false;

// Verificar por parâmetros de tracking
if (isset($_GET['utm_source']) || 
    isset($_GET['sub20']) || 
    strpos($_SERVER['REQUEST_URI'], 'trk.ozemgummy.com') !== false ||
    strpos($_SERVER['HTTP_REFERER'], 'ozemgummy') !== false) {
    $is_tracking_request = true;
}

// Verificar User-Agent do SmartPlayer (se necessário)
$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? '';
if (strpos($user_agent, 'smartplayer') !== false) {
    $is_tracking_request = true;
}

if ($is_tracking_request) {
    // Log para debug
    error_log("Interceptando requisição de tracking:");
    error_log("URL: " . $_SERVER['REQUEST_URI']);
    error_log("Referer: " . ($_SERVER['HTTP_REFERER'] ?? 'N/A'));
    error_log("Parâmetros: " . print_r($_GET, true));
    
    // Redirecionar para checkout
    header('Location: ' . $checkout_url, true, 301);
    exit();
}

// Se não for tracking, continuar normalmente
echo "Página normal";
?>