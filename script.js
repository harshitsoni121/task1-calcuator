let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    document.getElementById('displayScreen').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('displayScreen').value = displayValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('displayScreen').value = displayValue;
    } catch (error) {
        document.getElementById('displayScreen').value = 'Error';
    }
}
