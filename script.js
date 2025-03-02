
function Game(){
  // Generate two random numbers in the range of 1 - 3
  let random1 = Math.floor(Math.random() * 3) + 1; // 1-3
  let random2 = Math.floor(Math.random() * 3) + 1; // 1-3

  // Assign the appropriate image
  const choices =[ "rock.png" ,"Scissors.png","hand.png"]// Update this randomly
  let ImageSource1 = "img/" + choices[random1-1]; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  let ImageSource2 = "img/" + choices[random2-1]; // imgs/rock.png or  imgs/scissors.png or  imgs/paper.png
  // Update images
  //document.querySelectorAll("img")[0].setAttribute("src", "img/hand.png");
  document.querySelector(".img1").setAttribute("src", ImageSource1);
  document.querySelector(".img2").setAttribute("src", ImageSource2);

  // winner
  
if (random1 === random2) {
  winner = "It's a tie!";
} else if (
  (random1 === 2 && random2 === 3) || // Rock beats Scissors
  (random1 === 1 && random2 === 2) || // Paper beats Rock
  (random1 === 3 && random2 === 1)    // Scissors beats Paper
) {
  winner = "Player 1 wins!";
} else {
  winner = "Player 2 wins!";
}
  
  // Print the winner. Use if statement or other appropriate logic.
  document.querySelector("h1").innerHTML = `${winner}`;
}
