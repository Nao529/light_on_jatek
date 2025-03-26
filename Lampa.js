export default class Lampa {
    #felkapcs
    #index
    constructor(felkapcs, index, szuloElem){
        this.#felkapcs=felkapcs;
        this.#index=index;
        this.szuloElem=szuloElem;
        console.log(szuloElem)
        this.megjelenit();
        this.esemenyKezelo();
    }
    megjelenit(){
        let html = `<div class="lampaElem">
                        <div>${this.#felkapcs}</div>
                    </div>`;
        this.szuloElem.insertAdjacentHTML("beforeend",html);
    }
    esemenyKezelo(){
        this.lampaElem=document.querySelector(".lampaElem:last-child")
        this.lampaElem.addEventListener("click",(event)=>{
            console.log(this.#index)
            const e = new CustomEvent("kivalaszt",{detail:this.#index})
            window.dispatchEvent(e);
        })
    }
    
}