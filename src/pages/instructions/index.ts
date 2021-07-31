export function initPageInstructions(params) {
  const div = document.createElement("div");
  div.innerHTML = `
            <h1>Page A</h1>
          `;

  div.addEventListener("click", () => {
    params.goTo("/choose");
  });
  return div;
}
