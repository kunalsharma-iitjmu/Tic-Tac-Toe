//varible define
let box = document.querySelectorAll(".boxes");
let cont = document.querySelector(".container");
let msgContainer = document.querySelector(".winner");
let msg = document.querySelector("#msg");
let congo = document.querySelector("#congo");

let turn0 = true;   //To Identify player O or player X
let winner = false;
let count = 0;
let audio = new Audio('audio.mp3');
let celeb = new Audio('celeb.mp3');

const wincases = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

box.forEach((bx) => {
    bx.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            //Player O
            bx.innerText = "O";
            turn0 = false;
        }
        else {
            //Player X
            bx.innerText = "X";
            turn0 = true;
        }
        bx.disabled = true;
        count++;
        checkWinner();

        if(count === 9 && winner === false){
            gameDraw();
        }
    });
});

box.forEach((bx) => {
    bx.addEventListener("click" , () => {
        audio.play();
    });
})

const gameDraw = () => {
    msg.innerText = `It's a Draw.`;
    msgContainer.classList.remove("hide");
    cont.classList.add("hide");
    congo.classList.add("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let b of box) {
        b.disabled = true;
    }
}

const showWinner = (win) => {
    msg.innerText = `Winner is ${win}`;
    msgContainer.classList.remove("hide");
    cont.classList.add("hide");
    celeb.play();
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of wincases) {
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                winner = true;
                showWinner(pos1val);
            };
        }
    };
};