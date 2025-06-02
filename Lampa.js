export default class Lampa {
    constructor(felkapcs, index, szuloElem) {
        this.felkapcs = felkapcs;
        this.index = index;
        this.divElem = document.createElement("div");
        this.divElem.classList.add("lampaElem");

        if (this.felkapcs === "+") {
            this.divElem.classList.add("lighton");
        } else {
            this.divElem.classList.add("lightoff");
        }
        szuloElem.appendChild(this.divElem);
        this.divElem.addEventListener("click", () => {
            const esemeny = new CustomEvent("kivalaszt", { detail: this.index });
            window.dispatchEvent(esemeny);
        });
    }
}
