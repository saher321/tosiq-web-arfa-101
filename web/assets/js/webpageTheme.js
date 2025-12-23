applyTheme();

// will runs on first input (background)
function showbgColor() {
    var bgColor = document.getElementById("bg-color").value
    document.body.style.backgroundColor = bgColor;
    localStorage.setItem("bg-color", bgColor)
}

function applyTheme() {
    var bgColor = localStorage.getItem("bg-color")
    var txtColor= localStorage.getItem("txt-color")

    // validation applied
    if (!bgColor || !txtColor) {
        alert("Colors not provided");
        return;
    }

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = txtColor;
}

function saveTheme() {
    // values initialized
    var bgColor = document.getElementById("bg-color").value
    var txtColor= document.getElementById("txt-color").value

    // validation applied
    if (!bgColor || !txtColor) {
        alert("Please select the colors");
        return;
    }

    // values are stored
    localStorage.setItem("bg-color", bgColor)
    localStorage.setItem("txt-color", txtColor)
}