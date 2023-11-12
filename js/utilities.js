function getValueFromInput(inputField) {
    const inputValue = parseFloat(document.querySelector(inputField).value);
    document.querySelector(inputField).value = '';
    return inputValue;
}

function getValueFromTextElement(inputField) {
    return parseFloat(document.querySelector(inputField).innerText);
    
}

function setValue(element, values) {
    document.querySelector(element).innerText = values;
}