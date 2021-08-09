import { initRouter } from "./router";
import { initCustomButton } from "./components/button";
import { initCustomText } from "./components/custom-text";
import { initGameItem } from "./components/game-option";
import { initScoreComp } from "./components/score";
import { initCustomContainer } from "./components/custom-container";
import { initCounter } from "./components/counter";

(function main() {
  initCustomButton();
  initCustomText();
  initGameItem();
  initScoreComp();
  initCustomContainer();
  initCounter();

  const container = document.querySelector("#root");
  initRouter(container);
})();
