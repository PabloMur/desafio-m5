export function initPageWelcome(params) {
  const div = document.createElement("div");
  div.innerHTML = `
            <custom-text variant="title">
            Piedra
            Papel
            Tijera
            </custom-text> 
            <custom-button class="start-button">¡Empezar!</custom-button>
          `;
  const button = div.querySelector(".start-button");
  button.addEventListener("click", function () {
    params.goTo("/instructions");
  });
  return div;
}
