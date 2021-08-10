export function initCustomButton() {
  customElements.define(
    "custom-button",
    class extends HTMLElement {
      shadow = this.attachShadow({ mode: "open" });
      constructor() {
        super();
        this.render();
      }
      render() {
        const button = document.createElement("button");
        const style = document.createElement("style");

        button.className = "root";

        style.innerHTML = `
              .root{
                  font-size: 18px;
                  border-radius: 4px;
                  padding: 17px 13px;
                  background-color:#006CFC;
                  color:#D8FCFC;
                  width: 100%;
                  border: 10px solid #001997;
              }
              @media screen and (min-width: 500px){
                .root{
                  min-width: 600px;
                  max-width: 600px;
                  margin: 0 auto;
                }
              }
            `;

        button.textContent = this.textContent || "ups!";

        this.shadow.appendChild(button);
        this.shadow.appendChild(style);
      }
    }
  );
}
