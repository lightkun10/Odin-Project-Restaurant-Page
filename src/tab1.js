/**
 * Tab 1: About (Sekapur Sirih)
 */

const tab1 = () => {

    let content = document.createElement('div');
    content.className = "content";

        let h3 = document.createElement('h3');
        h3.textContent = "Welcome to Mamak Resto";

        let p1 = document.createElement('p');
        p1.textContent = "mamak means \"mother\" in Melayu and we want to bring you that \"motherly\" good cooking. Each passing of our shared plates and serving opens up a new way of tasting good food. Or perhaps... A new way of life?";

    content.append(h3, p1);
    return content;
}

export default tab1;