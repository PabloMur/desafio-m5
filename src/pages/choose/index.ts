export function initPageChoose(params) {
  const div = document.createElement("div");
  div.innerHTML = `
              <h1>Choose</h1>
            `;

  div.addEventListener("click", () => {
    params.goTo("/result");
  });
  return div;
}
