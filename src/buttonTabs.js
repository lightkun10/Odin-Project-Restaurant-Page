import { tab1 } from './tab1';

const buttonTabs = () => {

    let tabSection = document.createElement('div');
    // tabSection.setAttribute("id", "tab-section");
    tabSection.className = "tab-section";

    for (let i = 0; i < 3; i++) {
        let button = document.createElement('button');
        button.dataset.tab = `tab-${i+1}`;
        button.className = `tab-${i+1}`;
        tabSection.append(button);
    }
    tabSection.querySelector('.tab-1').textContent = "Sekapur Sirih";
    tabSection.querySelector('.tab-2').textContent = "Menu";
    tabSection.querySelector('.tab-3').textContent = "Contact";

    for (let i = 0; i < 3; i++) {
        let tab = document.createElement('div');
        tab.setAttribute("id", `tab-${i+1}`);
        tabSection.append(tab);
    }

    return tabSection;
}

export default buttonTabs;