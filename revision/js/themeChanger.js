autoApplytheme();
function autoApplytheme () {
    let bgColor = localStorage.getItem("bgColor");

    if (bgColor) {
        document.body.style.backgroundColor = bgColor
    } else {
        console.log("BG Color not found")
    }
}

function changeBG() {
    let selectedColor = document.getElementById('selectedColor').value;

    console.log(selectedColor)

    document.body.style.backgroundColor = selectedColor

    localStorage.setItem("bgColor", selectedColor)
}