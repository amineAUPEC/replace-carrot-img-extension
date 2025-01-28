const images = {
    "gitlab": "assets/carrot_green.svg",
    "jira": "assets/carrot_red.svg",
    "confluence": "assets/carrot_blue.svg",
    "efrei": "assets/carrot_green.svg"
};

function replaceImages() {
    const url = window.location.href;
    let imageSrc;

    if (url.includes("gitlab.com")) {
        imageSrc = images.gitlab;
        image=document.querySelector("#be-navigation-mobile > div.be-nav-tablet > a > svg");
        image.src = chrome.runtime.getURL(imageSrc);
    } else if (url.includes("efrei.fr")) {
        imageSrc = images.efrei;
        image=document.querySelectorAll(".logo");
        image.src = chrome.runtime.getURL(imageSrc);
    }
    
    if (imageSrc) {
        document.querySelectorAll("img").forEach(img => {
            img.src = chrome.runtime.getURL(imageSrc);
        });
    }

}

replaceImages();