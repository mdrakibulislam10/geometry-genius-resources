// change card bg color
const cards = document.getElementsByClassName("card");
for (const card of cards) {
    card.addEventListener("mouseenter", function () {
        const randomBg = randomColor();
        card.style.backgroundColor = `rgb(${randomBg})`;
    });
};