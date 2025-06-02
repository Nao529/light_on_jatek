import JatekTer from "../JatekTer.js";
import { TESTLISTA } from "./TesztLista.js";

// Segédfüggvény: '+' → true, '-' → false
function pluszMinuszToBool(lista) {
  return lista.map(e => e === "+" ? true : false);
}
// Segédfüggvény: true → '+', false → '-'
function boolToPluszMinusz(lista) {
  return lista.map(e => e ? "+" : "-");
}
function tesztesetek() {
  TESTLISTA.forEach(teszt => {
    const szuloElem = document.createElement("div");
    const JATEKTER = new JatekTer(szuloElem);

    const kezdoAllapot = Array(9).fill(false);
    JATEKTER.setAllapot(kezdoAllapot);

    window.dispatchEvent(new CustomEvent("kivalaszt", { detail: teszt.index }));

    const vart = pluszMinuszToBool(teszt.vart);
    const kapott = JATEKTER.getAllapot();

    const vartStr = boolToPluszMinusz(vart).join("");
    const kapottStr = boolToPluszMinusz(kapott).join("");

    console.assert(
      vartStr === kapottStr,
      `❌ HIBA: ${teszt.tesztnev}\nVárt:   ${vartStr}\nKapott: ${kapottStr}`
    );

    console.log(`✅ ${teszt.tesztnev} sikeres`);
  });
}

tesztesetek();
