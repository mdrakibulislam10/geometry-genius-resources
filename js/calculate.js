// serial num
let serial = 0;

// triangle handler
document.getElementById("triangle-calc-btn").addEventListener("click", function () {
    const base = getInputValue("triangle-first-input");
    const height = getInputValue("triangle-second-input");

    const name = getElementValue("triangle-name");
    const area = calcArea(0.5, base, height);

    setResult(serial += 1, name, area);
});