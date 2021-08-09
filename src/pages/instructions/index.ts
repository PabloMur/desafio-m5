export function initPageInstructions(params) {
  const div = document.createElement("div");
  div.innerHTML = `
              <custom-text type="body">
              Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.
              </custom-text>
              <custom-button class="play-button">¡Jugar!</custom-button>
          `;
  const playButton = div.querySelector(".play-button");
  playButton.addEventListener("click", () => {
    params.goTo("/choose");
  });
  return div;
}
