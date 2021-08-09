export function initCounter() {
  class Counter extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `
          .title{
              font-size:80px;
              font-weight: bold;
              color: #009048;
          }
          .body{
              font-size: 50px;
          }
        `;

      div.textContent = "hola";
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("counter", Counter);
}
