export function initScoreComp() {
  customElements.define(
    "score-component",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        //const label = this.getAttribute("label");
        const shadow = this.attachShadow({ mode: "open" });
        const score = document.createElement("div");
        const style = document.createElement("style");

        score.className = "root";

        style.innerHTML = `
                .root{
                    height: 150px;
                    width: 300px;
                    background: red;
                }
                @media screen and (min-width: 500px){
                  .root{
                    max-width: 600px;
                  }
                }
              `;

        score.textContent = this.textContent || "ups!";

        shadow.appendChild(score);
        shadow.appendChild(style);
      }
    }
  );
}
