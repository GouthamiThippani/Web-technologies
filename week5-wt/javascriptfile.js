
function showAlert() {
    alert("Button Clicked!");
}

function changeText(element) {
    element.textContent = "Hovered!";
}


function focusMessage() {
    document.getElementById("message").textContent = "Input field focused!";
}


function keyPressed(event) {
    document.getElementById("message").textContent = "Key Pressed: " + event.key;
}
