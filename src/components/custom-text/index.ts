export function initCustomText() {
  class CustomText extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.render();
      this.attachShadow({ mode: "open" });
    }
    render() {
      const variant = this.getAttribute("variant") || "body";
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
      div.className = variant;
      div.textContent = this.textContent;

      this.shadow.appendChild(div);
      this.shadow.appendChild(style);
    }
  }
  customElements.define("custom-text", CustomText);
}
