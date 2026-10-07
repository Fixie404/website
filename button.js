const button = document.getElementById("button");

button.addEventListener("click", () => {button.style.backgroundColor = "grey"; button.textContent = "pressed"; setTimeout(() => {button.style.backgroundColor = "aqua"; button.textContent = "press";}, 280);});
