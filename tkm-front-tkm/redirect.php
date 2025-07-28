<?php
// redirect.php - Coloque este arquivo no seu servidor

// URL de destino final
$checkout_url = 'https://pay.speedsellx.com/6876DDD959482';

// Log da requisição (opcional - para debug)
error_log("Redirecionamento solicitado de: " . $_SERVER['HTTP_REFERER']);
error_log("Parâmetros recebidos: " . print_r($_GET, true));

// Redirecionar imediatamente
header('Location: ' . $checkout_url, true, 301);
exit();
?>