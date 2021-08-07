export function initCustomText() {
    class CustomContainer extends HTMLElement {
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
        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
    customElements.define("custom-container", CustomContainer);
  }
  