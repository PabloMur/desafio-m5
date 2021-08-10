import { state } from "../../state";

export function initPageChoose(params) {
  const div = document.createElement("div");

  div.innerHTML = `
              <h1 class="contador"></h1>
              <choose-counter variant="choose"></choose-counter>
              <div class="containerManos">
                <game-item variant="tijera" id="tijera"></game-item>
                <game-item variant="piedra" id="piedra"></game-item>
                <game-item variant="papel" id="papel"></game-item>
              </div>
            `;

  const contador = div.querySelector(".contador");
  contador.textContent = state.getState().nombre;

  const tijera = div.querySelector("#tijera");
  tijera.addEventListener("click", () => {
    console.log("hola");
  });

  contador.addEventListener("click", () => {
    params.goTo("/result");
  });

  return div;
}
