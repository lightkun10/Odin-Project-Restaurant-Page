const banner = () => {
    
    let banner = document.createElement('div');
    banner.setAttribute("id", "banner");
    // banner.style = "padding-top: 30px;";

        let sectionBannerHeader = document.createElement('div');
        sectionBannerHeader.className = 'section-banner-header';
        sectionBannerHeader.style = "height: 200px;background-image: url(https://cdn.asiatatler.com/asiatatler/i/my/2019/12/09165418-dc-restaurant_article_1920x1200.jpg) ;background-repeat: no-repeat ;background-position: 9.84% 20.00% ;background-size: 100% ;background-color: transparent ;background-size: cover;";
            let bannerContentText = document.createElement('div');
            bannerContentText.className = "banner-content-text";
            //     let headlineTitle = document.createElement('h2');
            //     headlineTitle.className = "headline-title";
            //     headlineTitle.style = "color: #FFFFFF; margin: 0.2em; font-size: 4em; ";
            //     headlineTitle.textContent = "Traditional Cuisine Serves Right";
            // bannerContentText.appendChild(headlineTitle);

        sectionBannerHeader.appendChild(bannerContentText);
    
    banner.appendChild(sectionBannerHeader);
    return banner;
}

export default banner;