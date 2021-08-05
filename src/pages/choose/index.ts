export function initPageChoose(params) {
  const div = document.createElement("div");
  div.innerHTML = `
              <h1>Contador</h1>
              <div class="containerManos">
                <game-item variant="tijera"></game-item>
                <game-item variant="piedra"></game-item>
                <game-item variant="papel"></game-item>
            </div>
            `;

  div.addEventListener("click", () => {
    params.goTo("/result");
  });
  return div;
}
