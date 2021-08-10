export function initPageResult(params) {
  const div = document.createElement("div");
  div.innerHTML = `
                <h1>Result</h1>
                <score-component></score-component>
                <custom-button class="return">¡Volver a Jugar!</custom-button>
              `;

  const retunrButton = div.querySelector(".return");
  retunrButton.addEventListener("click", () => {
    params.goTo("/instructions");
  });
  return div;
}
