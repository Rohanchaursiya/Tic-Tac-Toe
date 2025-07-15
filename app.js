let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#resetButton");
let newGameButton=document.querySelector("#newGameButton");
let message=document.querySelector("#message");
let messageContainer=document.querySelector(".messageContainer");

let turn0=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const resetGame=()=>{
    turn0=true;
    enableBoxes();
    messageContainer.classList.add("hide");
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{
    message.innerText=`Congratulations, ${winner} is the winner!`;
    messageContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!="" || pos2Val!="" || pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                //alert("Winner is "+posVal1);
                // boxes[pattern[0]].style.backgroundColor="green";
                // boxes[pattern[1]].style.backgroundColor="green";
                // boxes[pattern[2]].style.backgroundColor="green";
                console.log("Winner is "+pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);