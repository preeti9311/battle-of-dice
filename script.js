const n1 = Math.floor(Math.random() * 6) + 1;
const n2 = Math.floor(Math.random() * 6) + 1;

var heading = document.querySelector("h1");
var image1 = document.querySelector(".img1");
var image2 = document.querySelector(".img2");
const diceImages= [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

function show_result(n1, n2) {
  image1.setAttribute("src", diceImages[n1 - 1]);
  image2.setAttribute("src", diceImages[n2 - 1]);
  if (n1 > n2) {
    heading.innerText = "🚩Player1 wins!";
  } else if (n1 < n2) {
    heading.innerText = "🚩Player2 wins!";
  } else {
    heading.innerText = "It's a Draw";
  }
  [image1, image2].forEach(img => {
    img.classList.add("imag");
    img.style.visibility = "visible";
  });
}

show_result(n1,n2);
