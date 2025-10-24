  let userScore=0;
  let compScore=0;

  const main=document.querySelectorAll(".shape");
  const msg=document.querySelector("#msg");
  const userScorePara=document.querySelector("#user-score");
  const compScorePara=document.querySelector("#comp-score"); 


  const genCompChoice=()=>{
    //should generate randomly out of three
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
  }

  const drawGame=()=>{
    msg.innerText="Game was draw, Play Again.";
    msg.style.backgroundColor=" rgb(52, 0, 92)";
  }

  const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
  }

  const playGame=(userChoice)=>{
    //console.log("userChoice=",userChoice);
    //generate comp choice
    const compChoice=genCompChoice();
    //console.log("comp choice=",compChoice);

    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock" ){
            userWin=compChoice==="paper"? false: true;
        }else if(userChoice==="paper"){
            compChoice==="scissors"? false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }

  }

  main.forEach((shape) => {
    console.log(main);
    shape.addEventListener("click",()=>{
        const userChoice=shape.getAttribute("id");
        console.log("shape was clicked",userChoice);
        playGame(userChoice);
    })   
  });
