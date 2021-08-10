// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1VVWy":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d8056cbe3be13bb3608c49fca2d33e8d"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2slnh":[function(require,module,exports) {
var _router = require("./router");
var _button = require("./components/button");
var _customText = require("./components/custom-text");
var _gameOption = require("./components/game-option");
var _score = require("./components/score");
var _counter = require("./components/counter");
var _state = require("./state");
(function main() {
    _button.initCustomButton();
    _customText.initCustomText();
    _gameOption.initGameItem();
    _score.initScoreComp();
    _counter.initCounter();
    _state.state.setState({
        nombre: "poli",
        puntajeMaquina: 0,
        puntajeTu: 0
    });
    console.log(_state.state);
    const container = document.querySelector("#root");
    _router.initRouter(container);
})();

},{"./router":"57npn","./components/button":"62CCj","./components/custom-text":"5UP4W","./components/game-option":"53Yk1","./components/score":"4BaNJ","./components/counter":"4uxHe","./state":"50U9u"}],"57npn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter
);
var _welcome = require("./pages/welcome");
var _instructions = require("./pages/instructions");
var _choose = require("./pages/choose");
var _result = require("./pages/result");
const routes = [
    {
        path: /\/welcome/,
        handler: _welcome.initPageWelcome
    },
    {
        path: /\/instructions/,
        handler: _instructions.initPageInstructions
    },
    {
        path: /\/choose/,
        handler: _choose.initPageChoose
    },
    {
        path: /\/result/,
        handler: _result.initPageResult
    }, 
];
function initRouter(container) {
    function goTo(path) {
        history.pushState({
        }, "", path);
        handleRoute(path);
    }
    function handleRoute(route) {
        for (const r of routes)if (r.path.test(route)) {
            const el = r.handler({
                goTo: goTo
            });
            if (container.firstChild) container.firstChild.remove();
            container.appendChild(el);
        }
    }
    if (location.pathname == "/" || location.pathname == "/desafio-m5") goTo("/welcome");
    else handleRoute(location.pathname);
    window.addEventListener("popstate", ()=>{
        handleRoute(location.pathname);
    });
}

},{"./pages/welcome":"1yAyO","./pages/instructions":"7Li4L","./pages/choose":"2j31B","./pages/result":"2WB0S","@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"1yAyO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageWelcome", ()=>initPageWelcome
);
function initPageWelcome(params) {
    const div = document.createElement("div");
    div.className = "welcome";
    div.innerHTML = `\n            \n            <div class="containerManos">\n              <custom-text variant="title" class="titulo">\n                Piedra Papel ó Tijera\n              </custom-text>\n            </div> \n            <div class="containerManos">\n              <custom-button class="start-button">¡Empezar!</custom-button>\n            </div>\n            <div class="containerManos">\n              <game-item variant="tijera"></game-item>\n              <game-item variant="piedra"></game-item>\n              <game-item variant="papel"></game-item>\n            </div>\n          `;
    const button = div.querySelector(".start-button");
    button.addEventListener("click", function() {
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"367CR":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7Li4L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageInstructions", ()=>initPageInstructions
);
function initPageInstructions(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n              <custom-text type="body">\n              Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.\n              </custom-text>\n              <custom-button class="play-button">¡Jugar!</custom-button>\n          `;
    const playButton = div.querySelector(".play-button");
    playButton.addEventListener("click", ()=>{
        params.goTo("/choose");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"2j31B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageChoose", ()=>initPageChoose
);
var _state = require("../../state");
function initPageChoose(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n              <h1 class="contador"></h1>\n              <choose-counter variant="choose"></choose-counter>\n              <div class="containerManos">\n                <game-item variant="tijera" id="tijera"></game-item>\n                <game-item variant="piedra" id="piedra"></game-item>\n                <game-item variant="papel" id="papel"></game-item>\n              </div>\n            `;
    const contador = div.querySelector(".contador");
    contador.textContent = _state.state.getState().nombre;
    const tijera = div.querySelector("#tijera");
    tijera.addEventListener("click", ()=>{
        console.log("hola");
    });
    contador.addEventListener("click", ()=>{
        params.goTo("/result");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR","../../state":"50U9u"}],"50U9u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
const state = {
    data: {
        currentGame: {
            miJugada: "",
            PCjuagada: ""
        },
        history: []
    },
    listeners: [],
    getState () {
        return this.data;
    },
    setState (newState) {
        this.data = newState;
        for (const cb of this.listeners)cb();
    },
    subscribe (callback) {
        this.listeners.push(callback);
    },
    setMove (move) {
        const currentState = this.getState();
        currentState.currentGame.miJugada;
    },
    whoWins (miJugada, PCjuagada) {
        const ganeConTijeras = miJugada == "tijera" && PCjuagada == "papel";
        const ganeConPiedra = miJugada == "piedra" && PCjuagada == "tijera";
        const ganeConPapel = miJugada == "papel" && PCjuagada == "piedra";
        const perdiConTijeras = miJugada == "tijera" && PCjuagada == "piedra";
        const perdiConPapel = miJugada == "papel" && PCjuagada == "tijera";
        const perdiConPiedra = miJugada == "piedra" && PCjuagada == "papel";
        const gane = [
            ganeConPapel,
            ganeConPiedra,
            ganeConTijeras
        ].includes(true);
        const perdi = [
            perdiConPapel,
            perdiConPiedra,
            perdiConTijeras
        ].includes(true);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"2WB0S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPageResult", ()=>initPageResult
);
function initPageResult(params) {
    const div = document.createElement("div");
    div.innerHTML = `\n                <h1>Result</h1>\n                <score-component></score-component>\n                <custom-button class="return">¡Volver a Jugar!</custom-button>\n              `;
    const retunrButton = div.querySelector(".return");
    retunrButton.addEventListener("click", ()=>{
        params.goTo("/instructions");
    });
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"62CCj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCustomButton", ()=>initCustomButton
);
function initCustomButton() {
    customElements.define("custom-button", class extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.render();
        }
        render() {
            const button = document.createElement("button");
            const style = document.createElement("style");
            button.className = "root";
            style.innerHTML = `\n              .root{\n                  font-size: 18px;\n                  border-radius: 4px;\n                  padding: 17px 13px;\n                  background-color:#006CFC;\n                  color:#D8FCFC;\n                  width: 100%;\n                  border: 10px solid #001997;\n              }\n              @media screen and (min-width: 500px){\n                .root{\n                  min-width: 600px;\n                  max-width: 600px;\n                  margin: 0 auto;\n                }\n              }\n            `;
            button.textContent = this.textContent || "ups!";
            this.shadow.appendChild(button);
            this.shadow.appendChild(style);
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"5UP4W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCustomText", ()=>initCustomText
);
function initCustomText() {
    class CustomText extends HTMLElement {
        constructor(){
            super();
            this.render();
            this.attachShadow({
                mode: "open"
            });
        }
        render() {
            const variant = this.getAttribute("variant") || "body";
            const div = document.createElement("div");
            const style = document.createElement("style");
            style.innerHTML = `\n        .title{\n            font-size:80px;\n            font-weight: bold;\n            color: #009048;\n        }\n        .body{\n            font-size: 50px;\n        }\n      `;
            div.className = variant;
            div.textContent = this.textContent;
            this.shadow.appendChild(div);
            this.shadow.appendChild(style);
        }
    }
    customElements.define("custom-text", CustomText);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR"}],"53Yk1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initGameItem", ()=>initGameItem
);
function initGameItem() {
    customElements.define("game-item", class extends HTMLElement {
        constructor(){
            super();
            this.render = ()=>{
                const imageTijera = require("url:./img/tijera.svg");
                const imagePiedra = require("url:./img/piedra.svg");
                const imagePapel = require("url:./img/papel.svg");
                let imageURL;
                const variant = this.getAttribute("variant");
                const shadow = this.attachShadow({
                    mode: "open"
                });
                const div = document.createElement("div");
                const style = document.createElement("style");
                if (variant == "tijera") imageURL = imageTijera;
                if (variant == "piedra") imageURL = imagePiedra;
                if (variant == "papel") imageURL = imagePapel;
                div.className = "gameObject";
                div.innerHTML = `\n        <img src="${imageURL}">\n        `;
                style.innerHTML = `\n        .gameObject {\n          width: auto;\n          height: 100%;\n        }        \n        `;
                shadow.appendChild(div);
                shadow.appendChild(style);
            };
            this.render();
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR","url:./img/tijera.svg":"3j4qi","url:./img/piedra.svg":"eSFOi","url:./img/papel.svg":"1LQHj"}],"3j4qi":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "tijera.7da0cc86.svg";

},{"./bundle-url":"3seVR"}],"3seVR":[function(require,module,exports) {
"use strict";
/* globals document:readonly */ var bundleURL = null;
function getBundleURLCached() {
    if (!bundleURL) bundleURL = getBundleURL();
    return bundleURL;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) return getBaseURL(matches[0]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"eSFOi":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "piedra.9375442b.svg";

},{"./bundle-url":"3seVR"}],"1LQHj":[function(require,module,exports) {
module.exports = require('./bundle-url').getBundleURL() + "papel.cc3eb3fd.svg";

},{"./bundle-url":"3seVR"}],"4BaNJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initScoreComp", ()=>initScoreComp
);
var _state = require("../../state");
function initScoreComp() {
    customElements.define("score-component", class extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: "open"
            });
            this.nombre = "hola";
            this.syncWithState = ()=>{
                const lastState = _state.state.getState();
                this.nombre = lastState.nombre;
                this.puntajeMaquina = lastState.puntajeMaquina;
                this.puntajeTu = lastState.puntajeTu;
                this.render();
            };
            this.render = ()=>{
                this.shadow.innerHTML = `\n          <div class="scoreCont">\n            <p>${this.nombre}</p>\n            <p>tu: ${this.puntajeMaquina}</p>\n            <p>maquina: ${this.puntajeTu}</p>\n          </div>\n        `;
                const style = document.createElement("style");
                style.innerHTML = `\n            .scoreCont{\n              height: 150px;\n              width: 100%;\n              background: purple;\n              color: white;\n              display:flex;\n              flex-direction: column;\n              justify-content: center;\n              align-items: center;\n            }\n        `;
                this.shadow.appendChild(style);
            };
            _state.state.subscribe(()=>{
                this.syncWithState();
            });
            this.syncWithState();
        }
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR","../../state":"50U9u"}],"4uxHe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initCounter", ()=>initCounter
);
var _state = require("../../state");
function initCounter() {
    class Counter extends HTMLElement {
        constructor(){
            super();
            this.counter = 0;
            this.render();
        }
        render() {
            const variant = this.getAttribute("variant");
            const shadow = this.attachShadow({
                mode: "open"
            });
            const div = document.createElement("div");
            const style = document.createElement("style");
            const lastState = _state.state.getState();
            style.innerHTML = `\n      .choose{\n              height:300px;\n              width: 100%;\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              font-size: 30px;\n            }\n            `;
            div.textContent = `${lastState.nombre}`;
            div.className = variant;
            shadow.appendChild(div);
            shadow.appendChild(style);
        //Counter();
        }
    }
    customElements.define("choose-counter", Counter);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"367CR","../../state":"50U9u"}]},["1VVWy","2slnh"], "2slnh", "parcelRequirea5a0")

//# sourceMappingURL=index.a2d33e8d.js.map
