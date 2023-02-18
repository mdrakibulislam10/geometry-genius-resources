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

// calculation area
function calcArea(formula1stValue, input1stValue, input2ndValue) {
    const area = formula1stValue * input1stValue * input2ndValue;

    return area;
};

// set calculation result
function setResult(serialNum, name, area) {
    const calculationResults = document.getElementById("calculation-results");
    const tBody = document.createElement("tbody");
    tBody.innerHTML = `
        <tr>
            <td>${serialNum}.</td>
            <td>${name}</td>
            <td>${area}cm<sup>2</sup></td>
            <td><button id="convert-btn" class="rounded p-2 text-white font-semibold bg-blue-600">Covert to m<sup>2</sup></button></td>
            <td><button id="close-btn" class="text-red-800 text-3xl cursor-pointer">&times;</button></td>
        </tr>
    `
    calculationResults.appendChild(tBody);
};