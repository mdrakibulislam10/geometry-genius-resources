// serial num
let serial = 0;

// triangle handler
document.getElementById("triangle-calc-btn").addEventListener("click", function () {
    const base = getInputValue("triangle-first-input");
    const height = getInputValue("triangle-second-input");
    if (base < 0 || height < 0) {
        alert("please input number above '0'!");
        return;
    };
    const area = calcArea(0.5, base, height);
    if (isNaN(area)) {
        alert("please input number!");
        return;
    };
    const name = getElementValue("triangle-name");

    setResult(serial += 1, name, area);
});

// rhombus handler
document.getElementById("rhombus-calc-btn").addEventListener("click", function () {
    const diagonals1 = getInputValue("rhombus-first-input");
    const diagonals2 = getInputValue("rhombus-second-input");
    if (diagonals1 < 0 || diagonals2 < 0) {
        alert("please input number above '0'!");
        return;
    };
    const area = calcArea(0.5, diagonals1, diagonals2);
    if (isNaN(area)) {
        alert("please input number!");
        return;
    };
    const name = getElementValue("rhombus-name");

    setResult(serial += 1, name, area);
});

// pentagon handler
document.getElementById("pentagon-calc-btn").addEventListener("click", function () {
    const perimeter = getInputValue("pentagon-first-input");
    const base = getInputValue("pentagon-second-input");
    if (perimeter < 0 || base < 0) {
        alert("please input number above '0'!");
        return;
    };
    const area = calcArea(0.5, perimeter, base);
    if (isNaN(area)) {
        alert("please input number!");
        return;
    };
    const name = getElementValue("pentagon-name");

    setResult(serial += 1, name, area);
});

// ellipse handler
document.getElementById("ellipse-calc-btn").addEventListener("click", function () {
    const axisA = getInputValue("ellipse-first-input");
    const axisB = getInputValue("ellipse-second-input");
    if (axisA < 0 || axisB < 0) {
        alert("please input number above '0'!");
        return;
    };
    const area = calcArea(parseFloat((Math.PI).toFixed(4)), axisA, axisB);
    if (isNaN(area)) {
        alert("please input number!");
        return;
    };
    const name = getElementValue("ellipse-name");

    setResult(serial += 1, name, area);
});

// rectangle handler
document.getElementById("rectangle-calc-btn").addEventListener("click", function () {
    const width = getInputValue("rectangle-first-input");
    const length = getInputValue("rectangle-second-input");
    if (width < 0 || length < 0) {
        alert("please input number above '0'!");
        return;
    };
    const area = calcArea2(width, length);
    if (isNaN(area)) {
        alert("please input number!");
        return;
    };
    const name = getElementValue("rectangle-name");

    setResult(serial += 1, name, area);
});

// parallelogram handler
document.getElementById("parallelogram-calc-btn").addEventListener("click", function () {
    const base = getInputValue("parallelogram-first-input");
    const height = getInputValue("parallelogram-second-input");
    if (base < 0 || height < 0) {
        alert("please input number above '0'!");
        return;
    };
    const area = calcArea2(base, height);
    if (isNaN(area)) {
        alert("please input number!");
        return;
    };
    const name = getElementValue("parallelogram-name");

    setResult(serial += 1, name, area);
});