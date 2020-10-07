const html = document.documentElement;
const canvas = document.getElementById("hero-lightpass");
const context = canvas.getContext("2d");

const frameCount = 148;
const currentFrame = index => (
    `./images/${index.toString()}.jpg`
)

const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
    }
};

function scrollHandler() {
    // how far the user has scrolled so far on the page 
    const scrolled = window.innerHeight + window.scrollY;
    // height of the document 
    const documentHeight = document.body.offsetHeight;
    // the amount of distance in pixels needed from the bottom of the page before the page scrolls to the top 
    const offset = 100;
    if (offset + scrolled >= documentHeight)

        window.scrollTo(0, 0);
}

window.addEventListener('scroll', scrollHandler);

const img = new Image()
img.src = currentFrame(1);
canvas.width = 694;
canvas.height = 694;
img.onload = function () {
    context.drawImage(img, 0, 0);
}

const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop;
    const maxScrollTop = html.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / maxScrollTop;
    const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
    );

    requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()