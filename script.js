const container = document.querySelector("#container");

function color(element) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
let n = 16;
function grid(n) {
    container.innerHTML = '';
    for (let i = 0; i < n * n; i++) {
        const element = document.createElement("div");
        element.classList.add('box');
        let containerWidth = container.clientWidth;
        element.style.width = containerWidth / n + "px";
        element.style.height = containerWidth / n + "px";
        element.addEventListener("mouseover", function () {
            color(element);
        });
        element.addEventListener("touchstart", function () {
            color(element);
        });
        container.append(element);
    }
}
grid(n);
function changeSize() {
    let newSize = prompt("Enter new grid size (between 2 - 100)");
    if (newSize >= 2 && newSize <= 100) {
        n = newSize;
        grid(n);
    } else {
        alert('Invalid input! Number should be between 2 and 100:');
    }
}
const button = document.querySelector(".btn-grid")
button.addEventListener("click", changeSize)
const reset = document.querySelector(".btn-reset");
reset.addEventListener('click', function () {
    grid(16);
});