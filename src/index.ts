import { initRouter } from "./router";
import { initCustomButton } from "./components/button";
import { initCustomText } from "./components/custom-text";

(function main() {
  initCustomButton();
  initCustomText();

  const container = document.querySelector("#root");
  initRouter(container);
})();
