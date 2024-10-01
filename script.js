let nameInput = prompt("Wat is je naam?");
let nameElement = document.getElementById("name");
nameElement.innerHTML = nameInput;
let button = document.createElement("button");
button.innerText = "woiow";
button.addEventListener("click", function() {
    alert("English or Spanish?");
});

