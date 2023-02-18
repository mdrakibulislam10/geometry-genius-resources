// get input value
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const value = parseFloat(inputField.value);
    inputField.value = "";

    return value;
};

// get element value
function getElementValue(elementId) {
    const elementField = document.getElementById(elementId);
    return elementField.innerText;
};

// calculation triangle, rhombus, pentagon, ellipse area
function calcArea(formula1stValue, input1stValue, input2ndValue) {
    const area = formula1stValue * input1stValue * input2ndValue;
    return parseFloat((area).toFixed(2));
};

// calculation rectangle and parallelogram area
function calcArea2(input1stValue, input2ndValue) {
    const area = input1stValue * input2ndValue;
    return parseFloat((area).toFixed(2));
};

// set calculation result
function setResult(serialNum, name, area) {
    const tBody = document.getElementById("calculation-results");
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${serialNum}. ${name}</td>
            <td>${area} cm<sup>2</sup></td>
            <td><button id="convert-btn" class="rounded p-2 text-white font-semibold bg-blue-600">Covert to m<sup>2</sup></button></td>
            <td><button class="text-red-800 text-3xl">x</button></td>
    `;

    tBody.appendChild(tr);
};

// ..............................
// cards random bg color
function randomColor() {
    const randomBgCode = [];
    for (let i = 0; i < 3; i++) {
        const generateRandomBg = Math.floor(Math.random() * 255);
        randomBgCode.push(generateRandomBg);
    };
    const randomBg = randomBgCode.join();

    return randomBg;
};

//......................................
// click X btn to delete item
function removeItem(item) {
    item.parentNode.parentNode.style.display = "none";
};