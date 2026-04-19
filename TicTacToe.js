let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#msg");
let count = 0;
let turnO = true;

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [6,7,8],
    [2,4,6],
    [1,4,7],
    [3,4,5]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
// console.log("box was clicked!");
if(turnO){
    box.innerText = "O";
    turnO = false;
}
else{
    box.innerText="X"
    turnO = true;
}
box.disabled = true;
count++;
checkWinner();
    });
});
const checkWinner = () => {
    for (let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText; 
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!= "" && pos2!="" && pos3!= ""){
            if(pos1===pos2 && pos2===pos3){
                // console.log("Winner", pos1);
                showWinner(pos1);
                return;
            }
        }
        if(count==9){
            showDraw();
        }
    }
}

const resetGame = () => {
turnO = true;
count=0;
enableBoxes();
msgContainer.classList.add("hide");
}
const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText= `Congratulations!, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const showDraw = () => {
    msg.innerText = "It's a Draw!";
    msgContainer.classList.remove("hide");
    disableBoxes();
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
