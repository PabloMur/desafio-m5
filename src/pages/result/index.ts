export function initPageResult(params) {
  const div = document.createElement("div");
  div.innerHTML = `
                <h1>Result</h1>
                <score-component></score-component>
                <custom-button>¡Volver a Jugar!</custom-button>
              `;

  div.addEventListener("click", () => {
    params.goTo("/instructions");
  });
  return div;
}
