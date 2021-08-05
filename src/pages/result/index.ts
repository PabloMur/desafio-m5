export function initPageResult(params) {
  const div = document.createElement("div");
  div.innerHTML = `
                <h1>Result</h1>
                <custom-button>¡Volver a Jugar!</custom-button>
              `;

  div.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}
