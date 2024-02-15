function reset() {
    let inputCelcius = document.querySelector(".input-field1");
    let inputFahrenheit = document.querySelector(".input-field2");
    inputCelcius.value = "";
    inputFahrenheit.value = "";
}

function validateInteger(value) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(value);
}

function reverse() {
    let celciusBox = document.querySelector(".input-celcius");
    let fahrenheitBox = document.querySelector(".input-fahrenheit");

    celciusBox.classList.add("active");
    fahrenheitBox.classList.add("active");

    let tempClone = celciusBox.cloneNode(true);
    celciusBox.parentNode.replaceChild(fahrenheitBox.cloneNode(true), celciusBox);
    fahrenheitBox.parentNode.replaceChild(tempClone, fahrenheitBox);

    reset();
    setTimeout(() => {
        celciusBox.classList.remove("active");
        fahrenheitBox.classList.remove("active");
        reset();
    }, 500);
}

function konversiSuhu() {
    const inputCelcius = document.querySelector(".input-celcius .input-field1");
    const inputFahrenheit = document.querySelector(".input-fahrenheit .input-field2");

    let celciusInput = parseFloat(inputCelcius.value);
    let fahrenheitInput = parseFloat(inputFahrenheit.value);

    if (validateInteger(celciusInput)) {
        // Menggunakan rumus Celcius to Fahrenheit
        let outputFahrenheit = (celciusInput * 9) / 5 + 32;
        inputFahrenheit.value = outputFahrenheit.toFixed(2);
    } else if (validateInteger(fahrenheitInput)) {
        // Menggunakan rumus Fahrenheit to Celcius
        let outputCelcius = ((fahrenheitInput - 32) * 5) / 9;
        inputCelcius.value = outputCelcius.toFixed(2);
    } else {
        alert("Please enter a valid number for Celcius or Fahrenheit");
        inputCelcius.value = "";
        inputFahrenheit.value = "";
    }
}

const rumusLink = document.querySelector("#rumusLink");
const contactLink = document.querySelector("#contactLink");

rumusLink.addEventListener("click", function () {
    alert("Rumus Fahrenheit to Celcius: (°F - 32) * 5/9\nRumus Celcius to Fahrenheit: (°C * 9/5) + 32");
});

contactLink.addEventListener("click", function () {
    alert("Nama : Reza Rizki Arifianda \nWhatsapp: 089623651626");
});
