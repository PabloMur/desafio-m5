import { initPageWelcome } from "./pages/welcome";
import { initPageInstructions } from "./pages/instructions";
import { initPageChoose } from "./pages/choose";
import { initPageResult } from "./pages/result";
import { initPageComparition } from "./pages/comparition";

const routes = [
  {
    path: /\/desafio-m5\/welcome/,
    handler: initPageWelcome,
  },
  {
    path: /\/desafio-m5\/instructions/,
    handler: initPageInstructions,
  },
  {
    path: /\/desafio-m5\/choose/,
    handler: initPageChoose,
  },
  {
    path: /\/desafio-m5\/comparition/,
    handler: initPageComparition,
  },
  {
    path: /\/desafio-m5\/result/,
    handler: initPageResult,
  },
];

export function initRouter(container: Element) {
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  }

  function handleRoute(route) {
    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.handler({ goTo: goTo });

        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
    }
  }

  if (location.pathname == "/") {
    goTo("/desafio-m5/welcome");
  } else {
    handleRoute(location.pathname);
  }

  window.addEventListener("popstate", () => {
    handleRoute(location.pathname);
  });
}
