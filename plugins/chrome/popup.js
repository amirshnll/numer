// Number conversion functions
function persian_digit(e) {
    return new_val = ("" + e)
        .replace(/0/g, "۰")
        .replace(/1/g, "۱")
        .replace(/2/g, "۲")
        .replace(/3/g, "۳")
        .replace(/4/g, "۴")
        .replace(/5/g, "۵")
        .replace(/6/g, "۶")
        .replace(/7/g, "۷")
        .replace(/8/g, "۸")
        .replace(/9/g, "۹")
        .replace(/٤/g, "۴")
        .replace(/٥/g, "۵")
        .replace(/٦/g, "۶"),
        new_val;
}

// Set current year in footer
document.addEventListener('DOMContentLoaded', function () {
    // Update the current year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Add select functionality to the readonly textarea
    document.getElementById('fatextarea').addEventListener('focus', function () {
        this.select();
    });
});

function arabic_digit(e) {
    return new_val = ("" + e)
        .replace(/0/g, "۰")
        .replace(/1/g, "۱")
        .replace(/2/g, "۲")
        .replace(/3/g, "۳")
        .replace(/4/g, "٤")
        .replace(/5/g, "٥")
        .replace(/6/g, "٦")
        .replace(/7/g, "۷")
        .replace(/8/g, "۸")
        .replace(/9/g, "۹")
        .replace(/۴/g, "٤")
        .replace(/۵/g, "٥")
        .replace(/۶/g, "٦"),
        new_val;
}

function english_digit(e) {
    return new_val = ("" + e)
        .replace(/۰/g, "0")
        .replace(/۱/g, "1")
        .replace(/۲/g, "2")
        .replace(/۳/g, "3")
        .replace(/۴/g, "4")
        .replace(/۵/g, "5")
        .replace(/۶/g, "6")
        .replace(/۷/g, "7")
        .replace(/۸/g, "8")
        .replace(/۹/g, "9")
        .replace(/٠/g, "0")
        .replace(/١/g, "1")
        .replace(/٢/g, "2")
        .replace(/٣/g, "3")
        .replace(/٤/g, "4")
        .replace(/٥/g, "5")
        .replace(/٦/g, "6")
        .replace(/٧/g, "7")
        .replace(/٨/g, "8")
        .replace(/٩/g, "9"),
        new_val;
}

function convert() {
    var selectedLang = document.querySelector(".language").id;
    var inputText = document.getElementById("entextarea").value;
    var outputField = document.getElementById("fatextarea");

    if (selectedLang == "fa") {
        outputField.value = persian_digit(inputText);
    } else if (selectedLang == "ar") {
        outputField.value = arabic_digit(inputText);
    } else if (selectedLang == "en") {
        outputField.value = english_digit(inputText);
    }
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Set up radio button event listeners
    var radioButtons = document.querySelectorAll(".radio");
    radioButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            radioButtons.forEach(function (btn) {
                btn.classList.remove("language");
            });
            button.classList.add("language");
            convert();
        });
    });

    // Set up input field event listener
    document.getElementById("entextarea").addEventListener("input", convert);

    // Initial conversion
    convert();
});