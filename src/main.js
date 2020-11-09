/*
<div id="main">
    <div class="section-content">
        <h2>Welcome to Mamak Resto</h2>
        <h4>mamak means "mother" in Melayu and we want to bring you that "motherly" good cooking. Each passing of our shared plates and serving opens up a new way of tasting good food. Or perhaps... A new way of life?</h4>
    </div>
</div>
*/

const main = () => {

    let main = document.createElement('div');
    main.setAttribute("id", "main");

        let sectionContent = document.createElement('div');
        sectionContent.className = "section-content";
            let h2 = document.createElement('h2');
            h2.textContent = "Welcome to Mamak Resto";
            let h4 = document.createElement('h4');
            h4.textContent = "mamak means \"mother\" in Melayu and we want to bring you that \"motherly\" good cooking. Each passing of our shared plates and serving opens up a new way of tasting good food. Or perhaps... A new way of life?";
        sectionContent.append(h2, h4);

    main.appendChild(sectionContent);
    return main;
}

export default main;