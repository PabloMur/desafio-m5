import { state } from "../../state";

export function initScoreComp() {
  customElements.define(
    "score-component",

    class extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      nombre: string = "hola";
      puntajeMaquina: number;
      puntajeTu: number;

      constructor() {
        super();
        state.subscribe(() => {
          this.syncWithState();
        });
        this.syncWithState();
      }
      syncWithState = () => {
        const lastState = state.getState();
        this.nombre = lastState.nombre;
        this.puntajeMaquina = lastState.puntajeMaquina;
        this.puntajeTu = lastState.puntajeTu;
        this.render();
      };
      render = () => {
        this.shadow.innerHTML = `
          <div class="scoreCont">
            <p>${this.nombre}</p>
            <p>tu: ${this.puntajeMaquina}</p>
            <p>maquina: ${this.puntajeTu}</p>
          </div>
        `;

        const style = document.createElement("style");
        style.innerHTML = `
            .scoreCont{
              height: 150px;
              width: 100%;
              background: purple;
              color: white;
              display:flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
        `;

        this.shadow.appendChild(style);
      };
    }
  );
}
