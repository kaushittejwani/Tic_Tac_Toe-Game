let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -7, 15, 90],
        [1, 4, 7, 3, 15, 90],
        [2, 5, 8, 13, 15, 90],
        [0, 4, 8, 3, 16, 45],
        [2, 4, 6, 3, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "150px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;

      //responsive design

     
      document.getElementsByClassName("box").style = `background-color=blue`;

      document.querySelector(".line").style.width = "26vw";
     
    
      /* if(boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
          boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
          boxtext[e[0]].innerText !== ""
        ) {
          setTimeout(() => {
              
            window.location.reload();

          }, 2000);
      }*/
          
                          
         
          }
          console.log(count);
         
            
            
         
           
            
           
            
          
        
    
  });
};



// Game Logic
// music.play()
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");

  console.log(isgameover);
  element.addEventListener("click", () => {
    if (!isgameover) {
      if (boxtext.innerText === "") {
        boxtext.innerText = turn;
        
        turn = changeTurn();

        audioTurn.play();
        count++;

        checkWin();
        if (!isgameover) {
          document.getElementsByClassName("info")[0].innerText =
            "Turn for " + turn;
            console.log('turn called');
        }
          

        if(count==9 && 
          isgameover!=true){
            document.getElementsByClassName('info')[0].innerText="its a draw";

          document.getElementsByClassName('info')[0].style.color="black";
          }
        
    
      
       
        

        if (turn == "X") {
      boxtext.style.color = "red";
      Ele_Player.style.color = "red";
    }
    
    else {
      boxtext.style.color = "purple";
      Ele_Player.style.color = "blue";

    }
        
      }
    }
      
        
    
   
  });
});
    


// Add onclick listener to reset button

play_again.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  turn = "X";
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});
