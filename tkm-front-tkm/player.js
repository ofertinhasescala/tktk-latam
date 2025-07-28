// SCRIPT DA VTURB - PLAYER LIMPO COM REDIRECIONAMENTO DIRETO
console.log('🚀 Carregando script da vTurb...');

// Script da vTurb será carregado dinamicamente
var s = document.createElement("script");
s.src = "https://scripts.converteai.net/a06e954c-39b7-4cc9-bf09-438d92a15bbe/players/68871d9de61b007614b5ca1a/v4/player.js";
s.async = true;
s.onload = function() {
    console.log('✅ Script da vTurb carregado com sucesso!');
    if (window.updateStatus) {
        window.updateStatus('✅ Player vTurb carregado!', 'ready');
    }
};
s.onerror = function() {
    console.error('❌ Erro ao carregar script da vTurb');
    if (window.updateStatus) {
        window.updateStatus('❌ Erro ao carregar script da vTurb', 'waiting');
    }
};
document.head.appendChild(s);

console.log('🔄 Script da vTurb adicionado ao DOM...');