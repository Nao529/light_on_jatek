import Lampa from "./Lampa.js";

export default class JatekTer {
    #lampaLista = ["-","-","-","-","-","-","-","-","-"]
    constructor(szuloElem){
        this.szuloElem=szuloElem;
        this.gomb = document.getElementById("#reset-gomb");
        this.megjelenit();
        this.esemenyKezelo();
        this.gombEsemenyKezelo();
    }
    gombEsemenyKezelo(){
        this.gomb.addEventListener("click",()=>{
            console.log("teszt");
        })
    }
    esemenyKezelo(){
        window.addEventListener("kivalaszt",(event)=>{
            let index=event.detail;
            if(this.#lampaLista[index]!="+"){
                this.#lampaLista[index]="+";
            }else{
                this.#lampaLista[index]="-";
            }
            this.szuloElem.innerHTML="";
            this.megjelenit();
        })
    }
    megjelenit(){
        for (let index = 0; index < this.#lampaLista.length; index++) {
            const LAMPA = new Lampa(this.#lampaLista[index],index,this.szuloElem)
        }
    }
}