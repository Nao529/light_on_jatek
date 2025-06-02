import JatekTer from './JatekTer.js';
import InfoPanel from "./InfoPanel.js";

const jatekterElem = document.querySelector("#jatekter");
const infoPanel = new InfoPanel();

const JATEKTER = new JatekTer(jatekterElem);

JATEKTER.updateFelkapcsoltLampaCount = (count) => {
    infoPanel.updateFelkapcsoltLampaCount(count);
};
