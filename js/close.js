// remove item(X) handler
document.getElementById("calculation-results").addEventListener("click", function (event) {
    if (event.target.innerText === "x") {
        removeItem(event.target);
    };
});