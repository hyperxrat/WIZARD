const barbtn = document.querySelector(".barbtn");
const closebtnhidebox = document.querySelector(".closebtnhiddenbox")
const hiddenbox = document.querySelector(".hiddenbarbox")
const message = document.querySelector(".navmessage")

message.addEventListener("click",function(){
    location.href = "message.html";
})
barbtn.addEventListener("click",function(){
    hiddenbox.style.display="block";
})
closebtnhidebox.addEventListener("click",function(){
    hiddenbox.style.display="none";
})