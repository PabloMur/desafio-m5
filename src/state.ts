type play = "piedra" | "papel" | "tijera";

const state = {
  data: {
    currentGame: { miJugada: "", PCjuagada: "" },
    history: [],
  },
  listeners: [],

  getState() {
    return this.data;
  },
  setState(newState) {
    this.data = newState;
    for (const cb of this.listeners) {
      cb();
    }
  },
  subscribe(callback: (any) => any) {
    this.listeners.push(callback);
  },

  setMove(move: play) {
    const currentState = this.getState();
    currentState.currentGame.miJugada;
  },

  whoWins(miJugada: play, PCjuagada: play) {
    const ganeConTijeras = miJugada == "tijera" && PCjuagada == "papel";
    const ganeConPiedra = miJugada == "piedra" && PCjuagada == "tijera";
    const ganeConPapel = miJugada == "papel" && PCjuagada == "piedra";

    const perdiConTijeras = miJugada == "tijera" && PCjuagada == "piedra";
    const perdiConPapel = miJugada == "papel" && PCjuagada == "tijera";
    const perdiConPiedra = miJugada == "piedra" && PCjuagada == "papel";

    const gane = [ganeConPapel, ganeConPiedra, ganeConTijeras].includes(true);
    const perdi = [perdiConPapel, perdiConPiedra, perdiConTijeras].includes(
      true
    );
  },
};

export { state };
