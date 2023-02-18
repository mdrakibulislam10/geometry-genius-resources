// serial num
let serial = 0;

// triangle handler
document.getElementById("triangle-calc-btn").addEventListener("click", function () {
    const base = getInputValue("triangle-first-input");
    const height = getInputValue("triangle-second-input");
    const area = calcArea(0.5, base, height);
    const name = getElementValue("triangle-name");

    setResult(serial += 1, name, area);
});




// rhombus handler
document.getElementById("rhombus-calc-btn").addEventListener("click", function () {
    const diagonals1 = getInputValue("rhombus-first-input");
    const diagonals2 = getInputValue("rhombus-second-input");
    const area = calcArea(0.5, diagonals1, diagonals2);
    const name = getElementValue("rhombus-name");

    setResult(serial += 1, name, area);
});

// pentagon handler
document.getElementById("pentagon-calc-btn").addEventListener("click", function () {
    const perimeter = getInputValue("pentagon-first-input");
    const base = getInputValue("pentagon-second-input");
    const area = calcArea(0.5, perimeter, base);
    const name = getElementValue("pentagon-name");

    setResult(serial += 1, name, area);
});

//