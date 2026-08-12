var text = document.getElementById("count");
console.log(typeof text.innerText);

var number = Number(text.innerText);
console.log(typeof number);

checkStyle();

function handleDecrease() {
    if (number > 0) {
        number--;
        text.innerText = number;
    }
    checkStyle();
}

function handleIncrease() {
    if (number < 5) {
        number++;
        text.innerText = number;
    }
    checkStyle();
}

function checkStyle() {
    var incBtn = document.getElementById("inc");
    var decBtn = document.getElementById("dec");

    if (number >= 5) {
        incBtn.classList.add("disable");
        // incBtn.setAttribute("disabled", true);
    } else {
        incBtn.classList.remove("disable");
        // incBtn.removeAttribute("disabled");
    }

    if (number <= 0) {
        decBtn.classList.add("disable");
        // decBtn.setAttribute("disabled", true);
    } else {
        decBtn.classList.remove("disable");
        // decBtn.removeAttribute("disabled");
    }
}
