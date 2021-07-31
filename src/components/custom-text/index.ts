export function initCustomText() {
  class CustomText extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const variant = this.getAttribute("variant") || "body";

      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      style.innerHTML = `
        .title{
            font-size:52px;
            font-weight: bold;
        }
        .body{
            font-size: 18px;
        }
      
      `;

      div.className = variant;
      div.textContent = this.textContent;
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("custom-text", CustomText);
}
