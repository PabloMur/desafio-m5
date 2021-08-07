import { initRouter } from "./router";
import { initCustomButton } from "./components/button";
import { initCustomText } from "./components/custom-text";
import { initGameItem } from "./components/game-option";
import { initScoreComp } from "./components/score";

(function main() {
  initCustomButton();
  initCustomText();
  initGameItem();
  initScoreComp();

  const container = document.querySelector("#root");
  initRouter(container);
})();
