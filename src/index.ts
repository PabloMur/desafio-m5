import { initRouter } from "./router";
import { initCustomButton } from "./components/button";
import { initCustomText } from "./components/custom-text";
import { initGameItem } from "./components/game-option";
import { initScoreComp } from "./components/score";
import { initCounter } from "./components/counter";
import { state } from "./state";

(function main() {
  initCustomButton();
  initCustomText();
  initGameItem();
  initScoreComp();
  initCounter();

  state.setState({ nombre: "poli", puntajeMaquina: 0, puntajeTu: 0 });
  console.log(state);

  const container = document.querySelector("#root");
  initRouter(container);
})();
