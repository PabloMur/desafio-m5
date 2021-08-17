export function initPageWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

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

  style.innerHTML = `
    .welcome{
      height: 100vh;
      width: 100%;
      display: flex; 
      flex-direction:column;
      align-items: center;
      justify-content: space-around;
    }
  `;

  div.appendChild(style);

  const button = div.querySelector(".start-button");
  button.addEventListener("click", function () {
    params.goTo("/instructions");
  });

  return div;
}
