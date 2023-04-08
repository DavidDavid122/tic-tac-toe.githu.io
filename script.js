let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");

let winningPattern = [ 
    [0, 1, 2], 
    [0, 3, 6], 
    [2, 5, 8], 
    [6, 7, 8], 
    [3, 4, 5], 
    [1, 4, 7], 
    [0, 4, 8], 
    [2, 4, 6],
];

let xTurn = true;
let count = 0;
const disableButtons = () => {
    btnRef.forEach((e) => (e.disabled = true));
    popupRef.classList.remove("hide");
};

const winFunction = (letter) => {
    disableButtons();
    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else {
        msgRef.innerHTML = "&#x1F389; <br> '0' Wins";
    }
};

const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F60E; <br> It's a Draw";
}

const enableButtons = () => {
    btnRef.forEach(e  => {
        e.innerText = "";
        e.disabled = false;
    });
    popupRef.classList.add("hide");
};



newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

restartBtn.addEventListener("click" , () => {
    count = 0;
    enableButtons();
})

const winChecker = () => {
    for (let i of winningPattern) {
        let[element1, element2, element3] = [
            btnRef[i[0]].innerText, 
            btnRef[i[1]].innerText, 
            btnRef[i[2]].innerText,
        ];
        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if(element1 == element2 && element2 == element3) {
                winFunction(element1);
            }
        }
    }
}

btnRef.forEach((e) => {
    e.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            e.innerText = "X";
            e.disabled = true;
        }
        else {
            xTurn = true;
            e.innerText = "0";
            e.disabled = true;
        }
        count += 1;
        if (count === 9) {
            drawFunction();
        }
        winChecker();
    });
});
window.onload = enableButtons;