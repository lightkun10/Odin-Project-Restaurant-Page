const header = () => {
    
    let header = document.createElement('header');
    header.setAttribute("id", "section-header");

    let container = document.createElement('div');
    container.className = 'container';
    header.appendChild(container);

    // For the name
    let headerName = document.createElement('div');
    headerName.className = 'header-name';
    headerName.textContent = "Mamak Resto";

    // For other such as burger item, logo, etc.
    // FIXME

    container.append(headerName);

    return header;
}

export default header;