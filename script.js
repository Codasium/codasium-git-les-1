let nameInput = prompt("yusu of niet jala?");
let nameElement = document.getElementById("name");
nameElement.innerHTML = nameInput;
let button = document.createElement("button");
button.innerText = "woiow";
button.addEventListener("click", function() {
    alert("English or Spanish?");
});

