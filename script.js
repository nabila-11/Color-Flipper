
const colors = ["Crimson", "#FF0000","rgb(255,20,147","Orange","Fuchsia","rgb(0,255,0)","#006400","Olive","DarkCyan","#B8860B","Black", "Red","Pink","rgb(169,169,169","Gainsboro"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    // Get random number between  0-3
   const randomNumber = getRandomNumber();
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}