const button = document.getElementById("btn");

const colors = ["#FF5733",
 "#F9FF33",
  "#3371FF",
   "red",
   "green",
   "black",
   "Purple",
   "Orange",
   "blue",
   "Brown",
    "rgb(85,255,51)",
];



button.addEventListener("click",() => {
document.body.style.background = colors[getRandomNumber()];


});


function getRandomNumber() {
 return Math.floor(Math.random ()  * colors.length);
}

getRandomNumber();