const images = {
    "gitlab": "https://raw.githubusercontent.com/amineAUPEC/replace-carrot-img-extension/refs/heads/main/my-carrot-extension/assets/carrot_green.svg",
    "jira": "https://raw.githubusercontent.com/amineAUPEC/replace-carrot-img-extension/refs/heads/main/my-carrot-extension/assets/carrot_red.svg",
    "confluence": "https://raw.githubusercontent.com/amineAUPEC/replace-carrot-img-extension/refs/heads/main/my-carrot-extension/assets/carrot_blue.svg",
    "efrei": "https://raw.githubusercontent.com/amineAUPEC/replace-carrot-img-extension/refs/heads/main/my-carrot-extension/assets/carrot_green.svg"
};


function replaceImages() {
    const url = window.location.href;
    let imageSrc;

    if (url.includes("gitlab.com")) {
        imageSrc = images.gitlab;
        image=document.querySelector("#be-navigation-mobile > div.be-nav-tablet > a > svg");
        image = imageSrc;

    } else if (url.includes("efrei.fr")) {
        imageSrc = images.efrei;
        image=document.querySelectorAll(".logo");
        image.src = imageSrc;
    }
    
    if (imageSrc) {
        document.querySelectorAll("img").forEach(img => {
            img.src = imageSrc;
        });
    }

}

replaceImages();
