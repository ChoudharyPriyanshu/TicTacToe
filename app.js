//  accessing elements by DOM Manipulation
let boxes = document.querySelectorAll(".box");
let resetbtn= document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

//Player1
let turn= true;
let count =0;

// Array of Winning Patterns
const winPatterns =[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

//Function to Reset or New Game
const resetGame =()=>{
    turn= true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count =0;
}

//Loop for Clicking All Boxes And Playing
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       count++;
        if(turn){
            box.innerText="O";
            turn=false;
        }
        else{
            box.innerText="X";
            turn=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

// Function For Disabling The Boxes After Winning
const disableBoxes =()=>{
     for(let box of boxes){
        box.disabled =true;
     }
}

// Function For Enabling The Boxes After new or reset game
const enableBoxes =()=>{
    for(let box of boxes){
       box.disabled =false;
       box.innerText="";
    }
}

//Function for draw 
const draw = ()=>{
    msg.innerText =`Congatulation, The Match Was Draw`;
        msgContainer.classList.remove("hide");
        disableBoxes();
}
// Function for showing the winner 
const showWinner = (winner)=>{
        msg.innerText =`Congatulation, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
        count =0;
}

// Function for checking the winner 
let checkWinner =()=>{
    for(patterns of winPatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != 0 ){
            if(pos1val === pos2val && pos2val === pos3val){
               showWinner(pos1val);
            }  
        }
        if(count===9){
             draw();
        }
        
    }
}

// Functioning of Reset and New game Button by using eventListener
newGamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);