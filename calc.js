function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function backspace() {
    let displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}

function calculate() {
    let displayValue = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(displayValue);
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
