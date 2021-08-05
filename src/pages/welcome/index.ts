export function initPageWelcome(params) {
  const div = document.createElement("div");
  div.className = "welcome";
  div.innerHTML = `
            <custom-text variant="title" class="titulo">
              Piedra <br/>Papel<br/> Tijera
            </custom-text> 
            <custom-button class="start-button">¡Empezar!</custom-button>
            <div class="containerManos">
              <game-item variant="tijera"></game-item>
              <game-item variant="piedra"></game-item>
              <game-item variant="papel"></game-item>
            </div>
          `;

  const button = div.querySelector(".start-button");
  button.addEventListener("click", function () {
    params.goTo("/instructions");
  });

  return div;
}
