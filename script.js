const container = document.querySelector("#container");

function color() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
let n = 16;
function grid(n) {
    container.innerHTML = '';
    for (let i = 0; i < n * n; i++) {
        const element = document.createElement("div");
        element.classList.add('box');
        element.style.width = 480 / n + "px";
        element.style.height = 480 / n + "px";
        element.addEventListener("mouseover", color);
        container.append(element);
    }
}
grid(n);
function changeSize() {
    let isValid = false;
    while (!isValid) {
        let newSize = prompt("Enter new grid size (between 2 - 100)");
        if (newSize >= 2 && newSize <= 100) {
            isValid = true;
            n = newSize;
            grid(n);
        } else {
            alert('Invalid input! Number should be between 2 and 100:');
        }
    }
}
const button = document.querySelector(".btn-grid")
button.addEventListener("click", changeSize)
const reset = document.querySelector(".btn-reset");
reset.addEventListener('click', function () {
  grid(16);
});