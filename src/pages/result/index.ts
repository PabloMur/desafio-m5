import { state } from "../../state";

export function initPageResult(params) {
  const div = document.createElement("div");
  div.innerHTML = `
                <h1>Result</h1>
                <p>${true}</p>
                <score-component></score-component>
                <custom-button class="return">¡Volver a Jugar!</custom-button>
              `;

  const style = document.createElement("style");

  style.innerHTML = `
    .container{
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `;
  div.className = "container";
  div.appendChild(style);

  const retunrButton = div.querySelector(".return");
  retunrButton.addEventListener("click", () => {
    state.pushToHistory(state.getState().currentGame);

    params.goTo("/instructions");
  });

  return div;
}
