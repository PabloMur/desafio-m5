import { state } from "../../state";

export function initPageChoose(params) {
  const div = document.createElement("div");

  div.innerHTML = `
              <h1 class="contador">Contador</h1>
              <div class="containerManos">
                <game-item variant="tijera" id="tijera"></game-item>
                <game-item variant="piedra" id="piedra"></game-item>
                <game-item variant="papel" id="papel"></game-item>
            </div>
            `;

  const contador = div.querySelector(".contador");
  contador.textContent = "papa";

  contador.addEventListener("click", () => {
    params.goTo("/result");
  });

  const tijera = div.querySelector("#tijera");
  tijera.addEventListener("click", () => {
    console.log("TIJERA");
  });
  const piedra = div.querySelector("#piedra");
  piedra.addEventListener("click", () => {
    console.log("PIEDRA");
  });
  const papel = div.querySelector("#papel");
  papel.addEventListener("click", () => {
    console.log("PAPEL");
  });

  return div;
}
