import { state } from "../../state";

export function initScoreComp() {
  customElements.define(
    "score-component",

    class extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      puntajeMaquina: number;
      puntajeTu: number;
      resultadoPartida: string;

      constructor() {
        super();
        state.subscribe(() => {
          this.syncWithState();
        });
        this.syncWithState();
      }
      syncWithState = () => {
        const lastState = state.getState();
        this.puntajeMaquina = lastState.score.maquina;
        this.puntajeTu = lastState.score.tu;
        this.resultadoPartida = lastState.result;
        this.render();
      };
      render = () => {
        this.shadow.innerHTML = `
          <div class="scoreCont">
            <custom-text>${this.resultadoPartida}</custom-text>
            <custom-text>Tú: ${this.puntajeTu}</custom-text>
            <custom-text>Máquina: ${this.puntajeMaquina}</custom-text>
          </div>
        `;

        const style = document.createElement("style");
        style.innerHTML = `
            .scoreCont{
              height: 50vh;
              width: 100%;
              display:flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              border-radius: 5px;
              background-color: white;
              border: 3px solid black;
            }
        `;

        this.shadow.appendChild(style);
      };
    }
  );
}
