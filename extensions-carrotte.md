# Introduction

C'est l'occasion de la carotte day : Le jour de la carotte pour carotte les gens, une extension à 2 carottes pour les collègues, amis et la carotte mood.

# Objectifs
1. Je veux créer une extension pour Chrome -> qui remplace l'image de Gitlab par une carotte 
    1. Je veux que les checkmark dans les pipelines soient remplacés par des carottes **vertes** 
    1. Je veux que le logo de Gitlab soit remplacé par une carotte

Également pour Jira
1. Je veux que le logo de Jira soit également une carotte ex: demo https://www.atlassian.com/fr/software/jira 
1. Je veux que le logo de Confluence soit également une carotte

Je veux qu'à part dans les pipelines les carottes soient de différentes couleurs à chaque actualisation de la page


Je veux également le mettre sur Efrei ex: https://www.efrei.fr/

# explications prompt
je veux que tu me génères le pseudocode et les étapes 
que tu m'expliques comment on stocke les images ex: svg, stockage assets, je veux que tu m'expliques  comment agir sur les pages Gitlab, Jira Confluence, Efrei ex: match url, domain, remplacer limage et ajout de filtres de couleurs sur la carotte
# Algorithme en pseudo-code
## Pseudocode

1. **Initialize Extension**
    - Create a manifest file for the Chrome extension.
    - Define permissions for accessing specific URLs (Gitlab, Jira, Confluence, Efrei).

2. **Store Images**
    - Store SVG images in an `assets` folder within the extension directory.
    - Example structure:
        ```
        /assets
            /carrot_green.svg
            /carrot_red.svg
            /carrot_blue.svg
        ```

3. **Content Script**
    - Write a content script to inject into the specified pages.
    - Match URLs for Gitlab, Jira, Confluence, and Efrei.
    - Replace images and apply color filters.

4. **Replace Images**
    - Identify the elements to replace (e.g., logos, checkmarks).
    - Use JavaScript to replace the `src` attribute of image elements with the path to the carrot images.
    - Apply random color filters to the carrot images on page refresh.

5. **Event Listeners**
    - Add event listeners to handle page updates and ensure images are replaced dynamically.

## Steps

1. **Create Manifest File**
    - Define the extension name, version, and permissions.
    - Example:
        ```json
        {
            "manifest_version": 3,
            "name": "Carrot Extension",
            "version": "1.0",
            "permissions": [
                "activeTab",
                "https://gitlab.com/*",
                "https://*.atlassian.net/*",
                "https://www.efrei.fr/*"
            ],
            "content_scripts": [
                {
                    "matches": [
                        "https://gitlab.com/*",
                        "https://*.atlassian.net/*",
                        "https://www.efrei.fr/*"
                    ],
                    "js": ["content.js"]
                }
            ]
        }
        ```

2. **Store Images**
    - Save SVG images in the `assets` folder.

3. **Write Content Script (content.js)**
    - Match URLs and replace images:
        ```javascript
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


        }

        replaceImages();
        ```
```
            else if (url.includes("atlassian.net")) {
                            if (url.includes("jira")) {
                                imageSrc = images.jira;
                            } else if (url.includes("confluence")) {
                                imageSrc = images.confluence;
                            }
            if (imageSrc) {
                document.querySelectorAll("img").forEach(img => {
                    img.src = chrome.runtime.getURL(imageSrc);
                });
            }
```
4. **Apply Color Filters**
    - Add a function to apply random color filters to the carrot images:
        ```javascript
        function applyRandomColorFilter() {
            const colors = ["green", "red", "blue"];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.querySelectorAll("img").forEach(img => {
                img.style.filter = `hue-rotate(${randomColor})`;
            });
        }

        applyRandomColorFilter();
        ```

5. **Event Listeners**
    - Ensure images are replaced on page updates:
        ```javascript
        document.addEventListener("DOMContentLoaded", replaceImages);
        document.addEventListener("DOMContentLoaded", applyRandomColorFilter);
        ```
        ## Compiling and Loading the Extension in Dev Mode

        1. **Prepare the Extension Directory**
            - Ensure your extension directory contains the following files and folders:
                ```
                /my-carrot-extension
                    /assets
                        carrot_green.svg
                        carrot_red.svg
                        carrot_blue.svg
                    content.js
                    manifest.json
                ```

        2. **Load the Extension in Chrome**
            - Open Chrome and navigate to `chrome://extensions/`.
            - Enable "Developer mode" by toggling the switch in the top right corner.
            - Click on the "Load unpacked" button.
            - Select the directory containing your extension (`/my-carrot-extension`).

        3. **Test the Extension**
            - Navigate to the specified URLs (Gitlab, Jira, Confluence, Efrei) to verify that the images are replaced with carrots and color filters are applied.

        4. **Debugging**
            - Use the Chrome Developer Tools (F12) to inspect elements and debug any issues with the content script.

        By following these steps, you can compile and load your Chrome extension in developer mode for testing and further development.

## edge soucis permission
## Resolving Unknown Permissions

If you encounter unknown permissions errors for `gitlab.com`, `https://*.atlassian.net/*`, and `https://www.efrei.fr/*`, follow these steps to resolve the issue:

1. **Update Permissions in Manifest File**
    - Ensure that the permissions are correctly specified in the `manifest.json` file.
    - Use the correct format for URL patterns:
        ```json
        {
            "permissions": [
                "activeTab",
                "https://gitlab.com/*",
                "https://*.atlassian.net/*",
                "https://www.efrei.fr/*"
            ]
        }
        ```

2. **Check Manifest Version**
    - Verify that you are using `manifest_version: 3` in your `manifest.json` file:
        ```json
        {
            "manifest_version": 3,
            "name": "Carrot Extension",
            "version": "1.0",
            "permissions": [
                "activeTab",
                "https://gitlab.com/*",
                "https://*.atlassian.net/*",
                "https://www.efrei.fr/*"
            ],
            "content_scripts": [
                {
                    "matches": [
                        "https://gitlab.com/*",
                        "https://*.atlassian.net/*",
                        "https://www.efrei.fr/*"
                    ],
                    "js": ["content.js"]
                }
            ]
        }
        ```

3. **Test Permissions**
    - Ensure that the specified URLs are correct and accessible.
    - Test the extension on the specified URLs to verify that the permissions are working as expected.

By following these steps, you should be able to resolve the unknown permissions errors and ensure that your extension has the necessary access to the specified URLs.
## Troubleshooting Edge Extension Loading Issue

If you encounter the `GET chrome-extension://invalid/ net::ERR_FAILED` error while loading your extension in Microsoft Edge, follow these steps to troubleshoot and resolve the issue:

1. **Check Manifest File**
    - Ensure your `manifest.json` file is correctly formatted and includes all necessary fields.
    - Verify that the `permissions` and `content_scripts` sections are correctly defined.

2. **Verify File Paths**
    - Ensure that all file paths in your `manifest.json` and `content.js` are correct.
    - Double-check the paths to your SVG images in the `assets` folder.

3. **Enable Developer Mode**
    - Open Edge and navigate to `edge://extensions/`.
    - Enable "Developer mode" by toggling the switch in the bottom left corner.
    - Click on the "Load unpacked" button and select your extension directory.

4. **Check Console for Errors**
    - Open the Developer Tools (F12) in Edge.
    - Navigate to the "Console" tab and check for any error messages related to your extension.
    - Address any errors or warnings that appear.

5. **Test on Different Pages**
    - Ensure that your extension is being tested on the correct URLs specified in the `manifest.json`.
    - Verify that the content script is running on the intended pages.

6. **Update Edge**
    - Ensure that you are using the latest version of Microsoft Edge.
    - Update Edge if necessary to ensure compatibility with your extension.

By following these steps, you should be able to identify and resolve the issue preventing your extension from loading correctly in Microsoft Edge.
## Explanation

### Storing Images
- Store SVG images in an `assets` folder within the extension directory. This allows easy access and organization of image files.

### Acting on Pages
- Use content scripts to match URLs and inject JavaScript into the specified pages.
- Replace images by selecting elements and changing their `src` attribute.
- Apply color filters using CSS properties.

### Matching URLs
- Use URL patterns in the manifest file to specify which pages the content script should run on.
- In the content script, use `window.location.href` to determine the current page and apply the appropriate changes.

### Replacing Images and Adding Color Filters
- Use JavaScript to select image elements and replace their `src` attribute with the path to the carrot images.
- Apply random color filters to the images to change their appearance on each page refresh.
- Use event listeners to ensure changes are applied dynamically as the page updates.
# Code

# Ressources

- [ ] [https://developer.chrome.com/docs/extensions/mv3/getstarted/](https://developer.chrome.com/docs/extensions/mv3/getstarted/)