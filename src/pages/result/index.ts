export function initPageResult(params) {
  const div = document.createElement("div");
  div.innerHTML = `
                <h1>Result</h1>
              `;

  div.addEventListener("click", () => {
    params.goTo("/welcome");
  });
  return div;
}
