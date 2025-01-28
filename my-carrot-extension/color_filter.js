function applyRandomColorFilter() {
    const colors = ["green", "red", "blue"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelectorAll("img").forEach(img => {
        img.style.filter = `hue-rotate(${randomColor})`;
    });
}

// applyRandomColorFilter();