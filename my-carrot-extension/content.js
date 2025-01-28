// const images = {
//     "gitlab": "assets/carrot_green.svg",
//     "jira": "assets/carrot_red.svg",
//     "confluence": "assets/carrot_blue.svg",
//     "efrei": "assets/carrot_green.svg"
// };
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
        alert("gitlab be careful carrot !");
        imageSrc = images.gitlab;
        setTimeout(() => {
            image=document.querySelector("#be-navigation-mobile > div.be-nav-tablet > a > svg");
            const svgElement = document.querySelector("#be-navigation-mobile > div.be-nav-tablet > a > svg");
            // image = imageSrc;
            if (svgElement) {
                const imgElement = document.createElement("img");
                imgElement.src = imageSrc;
                svgElement.parentNode.replaceChild(imgElement, svgElement);
            }
        }, 10000);
  

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
