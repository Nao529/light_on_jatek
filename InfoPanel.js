export default class InfoPanel {
    #felkapcsoltLampaCount;
    #infopanelElem;
    #gombElem;
    constructor() {
        this.#felkapcsoltLampaCount = 0;
        this.#infopanelElem = document.getElementById("infopanel");
        this.#gombElem = document.getElementById("reset-gomb");

        this.frissit();
        this.#gombElem.addEventListener("click", () => {
            this.#felkapcsoltLampaCount = 0;
            this.frissit();
        });
    }
    frissit() {
        const felkapcsoltLampaSzam = document.getElementById("felkapcsolt-lampak");
        felkapcsoltLampaSzam.innerText = `Felkapcsolt lámpák: ${this.#felkapcsoltLampaCount}`;
    }
    updateFelkapcsoltLampaCount(count) {
        this.#felkapcsoltLampaCount = count;
        this.frissit();
    }
}