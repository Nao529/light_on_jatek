import Lampa from "./Lampa.js";

export default class JatekTer {
    #lampaLista = [];
    constructor(szuloElem) {
        this.szuloElem = szuloElem;
        this.gomb = document.getElementById("reset-gomb");
        this.felkapcsElem = document.getElementById("felkapcsolt-lampak");
        this.uzenetElem = document.getElementById("gyozelem-uzenet");

        this.initLampak();
        this.megjelenit();
        this.#esemenyKezelo();
        this.#resetEsemenyKezelo();
    }
    initLampak() {
        this.#lampaLista = [];
        for (let i = 0; i < 9; i++) {
            const allapot = Math.random() < 0.2 ? "+" : "-";
            this.#lampaLista.push({ felkapcs: allapot });
        }
    }
    #resetEsemenyKezelo() {
        this.gomb.addEventListener("click", () => {
            this.initLampak();
            this.uzenetElem.innerText = "";
            this.megjelenit();
        });
    }
    #esemenyKezelo() {
        window.addEventListener("kivalaszt", (event) => {
            const index = event.detail;
            this.#kapcsol(index);
            this.megjelenit();
        });
    }
    #kapcsol(index) {
        const toggle = (i) => {
            if (i >= 0 && i < this.#lampaLista.length) {
                const lampa = this.#lampaLista[i];
                lampa.felkapcs = lampa.felkapcs === "+" ? "-" : "+";
            }
        };
        toggle(index);
        const sor = Math.floor(index / 3);
        const oszlop = index % 3;

        if (oszlop > 0) toggle(index - 1);
        if (oszlop < 2) toggle(index + 1);
        if (sor > 0) toggle(index - 3);
        if (sor < 2) toggle(index + 3);

        if (this.#lampaLista.every(l => l.felkapcs === "-")) {
            this.uzenetElem.innerText = "Gratulálok, nyertél!";
        } else {
            this.uzenetElem.innerText = "";
        }
    }
    megjelenit() {
        this.szuloElem.innerHTML = "";
        let felkapcsolt = 0;
        this.#lampaLista.forEach((lampa, index) => {
            new Lampa(lampa.felkapcs, index, this.szuloElem);
            if (lampa.felkapcs === "+") {
                felkapcsolt++;
            }
        });
        this.felkapcsElem.innerText = `Felkapcsolt lámpák: ${felkapcsolt}`;
    }
    // teszthez beállítja fix állapotokra a lámpákat
    setAllapot(lista) {
        this.#lampaLista = lista.map(e => ({
            felkapcs: e ? "+" : "-"
        }));
        this.megjelenit();
    }
    // getter a jelenlegi állapot lekérdezéséhez (true = felkapcsolt)
    getAllapot() {
        return this.#lampaLista.map(l => l.felkapcs === "+");
    }
    kattintasTeszthez(index) {
        this.#kapcsol(index);
    }
}
