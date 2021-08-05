import { initRouter } from "./router";
import { initCustomButton } from "./components/button";
import { initCustomText } from "./components/custom-text";
import { initGameItem } from "./components/game-option";

(function main() {
  initCustomButton();
  initCustomText();
  initGameItem();

  const container = document.querySelector("#root");
  initRouter(container);
})();
