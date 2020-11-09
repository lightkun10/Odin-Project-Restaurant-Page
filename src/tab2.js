/**
 * Tab 2: Menu
 */

const tab2 = () => {

    let content = document.createElement('div');
    content.className = "content";

        let h3 = document.createElement('h3');
        h3.textContent = "Our motherly menus";

        let p1 = document.createElement('p');
        p1.textContent = "Under construction";

    content.append(h3, p1);
    return content;
}

export default tab2;