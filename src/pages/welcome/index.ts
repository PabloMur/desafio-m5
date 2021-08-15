export function initPageWelcome(params) {
  const div = document.createElement("div");
  div.className = "welcome";
  div.innerHTML = `
            <custom-text variant="title">
                Piedra <br/>Papel ó<br/> Tijera
            </custom-text>
            <div class="containerManos">
              <custom-button class="start-button">¡Empezar!</custom-button>
            </div>
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
