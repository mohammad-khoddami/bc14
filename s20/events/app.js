// function handleKeyDown(e) {
//     console.log("key down", e);
// }

// function handleKeyUp(e) {
//     console.log(e.target.value);
// }

// var inputDiv = document.getElementById("input-div");
// var pTag = document.createElement("p");
// inputDiv.appendChild(pTag);
// function print(e) {
//     pTag.innerText = e.target.value;
// }

var content = document.getElementById("content");
function handleToggle(e) {
    if (content.classList.contains("hidden")) {
        e.target.innerText = "hide";
        content.classList.remove("hidden");
        content.classList.add("show");
    } else {
        e.target.innerText = "show";
        content.classList.add("hidden");
        content.classList.remove("show");
    }
}

var btn = document.getElementById("btn");
btn.onclick = handleClick;
// btn.onclick = handleClick2;
btn.addEventListener("click", handleClick);
btn.addEventListener("click", handleClick2);

function handleClick() {
    console.log("click");
}

function handleClick2() {
    console.log("click 2");
}

function handleEnter(e) {
    console.log("enter", e);
}

function handleLeave(e) {
    console.log("exit", e);
}

function handleMove(e) {
    console.log("move", e);
}

var menu = `<div class="menu">
    <ul>
        <li>موبایل</li>
        <li>لپ تاپ</li>
        <li>موس</li>
    </ul>
</div>`;

var menuDiv = document.getElementById("menu");
function handleOpen() {
    menuDiv.innerHTML = menu;
}
function handleClose() {
    menuDiv.innerHTML = "";
}
