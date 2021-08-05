export function initGameItem() {
  customElements.define(
    "game-item",
    class extends HTMLElement {
      constructor() {
        super();
        this.render();
      }
      render() {
        const imageTijera = require("url:./img/tijera.svg");
        const imagePiedra = require("url:./img/piedra.svg");
        const imagePapel = require("url:./img/papel.svg");

        let imageURL = "hola";
        const variant = this.getAttribute("variant");
        const shadow = this.attachShadow({ mode: "open" });
        const div = document.createElement("div");
        const style = document.createElement("style");

        if (variant == "tijera") {
          imageURL = imageTijera;
        }

        if (variant == "piedra") {
          imageURL = imagePiedra;
        }

        if (variant == "papel") {
          imageURL = imagePapel;
        }

        div.className = "gameObject";
        div.innerHTML = `
        <img src="${imageURL}">
        `;

        style.innerHTML = `
        .gameObject {
          width: auto;
          height: 100%;
        }        
        `;

        shadow.appendChild(div);
        shadow.appendChild(style);
      }
    }
  );
}
