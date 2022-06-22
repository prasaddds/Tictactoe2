// console.log("working");

let player = "X";
let gameOver = false;

const changePlayer = () => {
    return player === "X" ? "0" : "X";
};

const wonOrNot = () => {
    let boxTexts = document.querySelectorAll(".boxText");
    let winPos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    //   console.log(boxTexts);
    var draww = false;
    winPos.forEach((pos) => {
        if (
            boxTexts[pos[0]].innerText === boxTexts[pos[1]].innerText &&
            boxTexts[pos[1]].innerText === boxTexts[pos[2]].innerText &&
            boxTexts[pos[0]].innerText !== "") {
            //   console.log(boxTexts[pos[0]].innerText);

            document.getElementById("result").innerText = `${boxTexts[pos[0]].innerText
                } won`;
            gameOver = true;
        }
    });
};

let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((box) => {
    let boxText = box.querySelector(".boxText");
    box.addEventListener("click", () => {
        let chance = document.getElementById("chance");

        if (boxText.innerText === "" && !gameOver) {
            boxText.innerText = player;
            player = changePlayer();
            chance.innerText = player;
            wonOrNot();
        }
    });
});

// reset button ()
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    let boxTexts = document.getElementsByClassName("boxText");
    Array.from(boxTexts).forEach((boxText) => (boxText.innerText = ""));
    gameOver = false;
    document.getElementById("result").innerText = "running";
    player = "X";
    document.getElementById("chance").innerText = player;
});

// document.getElementsByClassName('box')[0].innerText!=""
// hw: implement draw
