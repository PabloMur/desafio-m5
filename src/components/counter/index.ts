import { state } from "../../state";

export function initCounter() {
  class Counter extends HTMLElement {
    counter: number = 0;
    constructor() {
      super();
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant");
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");
      const lastState = state.getState();

      style.innerHTML = `
      .choose{
              height:300px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 30px;
            }
            `;

      div.textContent = `${lastState.nombre}`;
      div.className = variant;
      shadow.appendChild(div);
      shadow.appendChild(style);
      //Counter();
    }
  }
  customElements.define("choose-counter", Counter);
}
