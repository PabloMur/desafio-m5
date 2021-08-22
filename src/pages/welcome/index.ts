export function initPageWelcome(params) {
  const div = document.createElement("div");
  const style = document.createElement("style");

  div.className = "welcome";
  div.innerHTML = `
            <custom-text variant="title" class="title">
                Piedra <br/>Papel ó<br/> Tijera
            </custom-text>
            <div class="containerManos">
              <game-item variant="piedra"></game-item>
              <game-item variant="tijera"></game-item>
              <game-item variant="papel"></game-item>
            </div>
            <custom-button class="start-button">¡Empezar!</custom-button>
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
    
    .title{
      animation: fade .6s ease;
    }

    @keyframes fade{
      0%{
        transform: translateY(-100%);
      }
      75%{
        transform: translateY(10%);
      }
      100%{
        transform: translateY(0%);
      }
    }
  `;

  div.appendChild(style);

  const button = div.querySelector(".start-button");
  button.addEventListener("click", function () {
    params.goTo("/instructions");
  });

  return div;
}
