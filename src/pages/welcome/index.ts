export function initPageWelcome(params) {
  const div = document.createElement("div");
  div.className = "welcome";
  div.innerHTML = `
            
            <div class="containerManos">
              <custom-text variant="title" class="titulo">
                Piedra Papel ó Tijera
              </custom-text>
            </div> 
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
