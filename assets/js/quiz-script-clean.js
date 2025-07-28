/**
 * Script principal do quiz fraudulento
 * Controla a navegação entre as etapas e toca o som de "ganho" de dinheiro
 */

document.addEventListener("DOMContentLoaded", function () {
  // Selecionando todas as etapas do quiz
  const steps = document.querySelectorAll(".step");
  let currentIndex = 0;

  /**
   * Pausa todos os vídeos na página
   * Usado quando se muda de uma etapa para outra
   */
  function pauseAllVideos() {
    const allVideos = document.querySelectorAll("video");
    allVideos.forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
  }

  /**
   * Rola a página até o final da etapa atual
   * Para garantir que o usuário veja os elementos no final (incluindo o saldo)
   */
  function scrollToBottomOfStep(stepElement) {
    const rect = stepElement.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect.top + scrollTop + stepElement.offsetHeight;

    window.scrollTo({
      top: offset,
      behavior: "smooth"
    });
  }

  /**
   * Exibe a etapa especificada pelo índice e oculta todas as outras
   */
  function showStep(index) {
    steps.forEach((step, i) => {
      step.style.display = i === index ? "block" : "none";
    });

    pauseAllVideos();

    // Scroll até o topo do step atual
    steps[index].scrollIntoView({ behavior: "smooth" });

    // Scroll para o final APENAS nos steps 2, 3 e 4 (índices 1, 2, 3)
    if ([1, 2, 3].includes(index)) {
      setTimeout(() => {
        scrollToBottomOfStep(steps[index]);
      }, 3000);
    }
  }

  // Exibe a primeira etapa inicialmente
  showStep(currentIndex);

  // Adiciona event listeners para todos os botões "next-step"
  steps.forEach((step, stepIndex) => {
    const buttons = step.querySelectorAll(".next-step");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        // Tocar som de caixa registradora apenas nos steps 2, 3 e 4
        // Cria sensação psicológica de ganho financeiro
        if ([1, 2, 3].includes(stepIndex)) {
          const audio = document.getElementById("cash-sound");
          if (audio) {
            audio.currentTime = 0;
            audio.play().catch(() => {});
          }
        }

        // Avança para a próxima etapa se não for a última
        if (stepIndex < steps.length - 1) {
          currentIndex = stepIndex + 1;
          showStep(currentIndex);

          // Inicia automaticamente qualquer vídeo na nova etapa
          const nextVideos = steps[currentIndex].querySelectorAll("video");
          nextVideos.forEach((video) => {
            video.setAttribute("playsinline", "");
            video.setAttribute("muted", "");
            video.play().catch(() => {});
          });
        }
      });
    });
  });
}); 