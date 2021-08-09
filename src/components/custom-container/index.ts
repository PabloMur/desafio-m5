export function initCustomContainer() {
  class CustomContainer extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "body";

      const shadow = this.attachShadow({ mode: "open" });
      const container = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `
          .comun{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            width: 100%;
            background: green;
          }
        `;

      container.className = variant;

      shadow.appendChild(container);
      shadow.appendChild(style);
    }
  }
  customElements.define("custom-container", CustomContainer);
}
