 let boxes=document.querySelectorAll(".box")
let resetBtn=document.querySelector(".reset-btn")
let msg=document.querySelector(".msg")
winnerMsg=document.querySelector(".msg h2")
let turnO=true;
const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach(box => {
    box.addEventListener("click",()=>{
       if(turnO==true){
        box.innerText="o"
        turnO=false;
       }
       else{
        box.innerText="x"
        turnO=true;
       }
       box.disabled=true;
       checkWinner();
    })
});
const checkWinner=()=>{
    for(let pattern of winPatterns)
    {
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;
      if(pos1Val !="",pos2Val !="",pos3Val !="")
      {
        if(pos1Val==pos2Val && pos2Val==pos3Val)
        {
          
            winnerMsg.innerText= "Player "+pos1Val+" is Winner"
           let icon= document.createElement("i")
           msg.appendChild(icon)
          icon.classList.add("fa-solid", "fa-trophy")
        }
      }

    }
}