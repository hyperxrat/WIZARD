const message = document.querySelector(".navmessage")
const barbtn = document.querySelector(".barbtn");
const closebtnhidebox = document.querySelector(".closebtnhiddenbox")
const hiddenbox = document.querySelector(".hiddenbarbox")

message.addEventListener("click",function(){
    location.href = "message.html";
})
barbtn.addEventListener("click",function(){
    hiddenbox.style.display="block";
    // hiddenbox.style.width="350px"
})
closebtnhidebox.addEventListener("click",function(){
    hiddenbox.style.display="none";
    // hiddenbox.style.width="0px"
})

/*
function errorscreen(){
    if(screen.width>=1360){
        console.log("Screen With Good")
    }
    else{
        const errorhead = document.createElement('h1')
        document.body.style.display="none"
        alert("Hi User, Your screen width is less than 1360px increase screen width it to visit! This website is not Reponsive")
    }
}
errorscreen();
*/