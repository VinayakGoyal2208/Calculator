let string = "";
let memory = 0;
let display = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

// Button click handling
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        handleInput(e.target.innerHTML);
    });
});

// Keyboard input handling
document.addEventListener('keydown', (e) => {
    const key = e.key;
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        handleInput(key);
    } else if (key === "Enter") {
        handleInput("=");
    } else if (key === "Backspace") {
        handleInput("⌫");
    } else if (key === "Escape") {
        handleInput("AC");
    } else if (key === "%") {
        handleInput("%");
    }
});

function handleInput(value) {
    if (value === '=') {
        calculateResult();
    }
    else if (value === 'AC') {
        string = "";
        display.value = "";
    }
    else if (value === '⌫') {
        string = string.slice(0, -1);
        display.value = string;
    }
    // Memory Functions
    else if (value === 'M+') {
        let val = safeEvaluate(string);
        if (val !== null) {
            memory += val;
            display.value = val;
            string = "";
        }
    }
    else if (value === 'M-') {
        let val = safeEvaluate(string);
        if (val !== null) {
            memory -= val;
            display.value = val;
            string = "";
        }
    }
    else if (value === 'MR') {
        if (string === "") {
            string = memory.toString();
        } else {
            string += memory.toString();
        }
        display.value = string;
    }
    else if (value === 'MC') {
        memory = 0;
    }
    else {
        string += value;
        display.value = string;
    }
}

function calculateResult() {
    try {
        let result = eval(string);
        if (result === Infinity || isNaN(result)) throw Error;
        string = result.toString();
        display.value = string;
    } catch {
        display.value = "Error";
        string = "";
    }
}

function safeEvaluate(expr) {
    try {
        if (!expr) return null;
        let result = eval(expr);
        if (result === Infinity || isNaN(result)) return null;
        return result;
    } catch {
        return null;
    }
}