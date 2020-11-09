import banner from './banner';
import main from './main';
// import aboutTab from './aboutTab';
import buttonTabs from './buttonTabs';
import tab1 from './tab1';
import tab2 from './tab2';

console.log("Hello to the console!");

function content() {
    let contentSection = document.querySelector('#content');
    contentSection.append(banner());
}


document.body.append(content());