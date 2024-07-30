const barbtn = document.querySelector(".barbtn");
const closebtnhidebox = document.querySelector(".closebtnhiddenbox")
const hiddenbox = document.querySelector(".hiddenbarbox")
const featureimg = document.querySelector(".featureimg")
const avtarimg = document.querySelector(".avtarimg")
const avtarimg1 = document.querySelector(".avtarimg1")
const avtarimg2 = document.querySelector(".avtarimg2")
const avtarimg3 = document.querySelector(".avtarimg3")
const avtarimg4 = document.querySelector(".avtarimg4")
const avtarimg5 = document.querySelector(".avtarimg5")
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
avtarimg.addEventListener("click",function(){
    featureimg.src= "img.jpg"
})
avtarimg1.addEventListener("click",function(){
    featureimg.src= "img1.jpg"
})
avtarimg2.addEventListener("click",function(){
    featureimg.src= "img2.jpg"
})
avtarimg3.addEventListener("click",function(){
    featureimg.src= "img3.jpg"
})
avtarimg4.addEventListener("click",function(){
    featureimg.src= "img4.jpg"
})
avtarimg5.addEventListener("click",function(){
    featureimg.src= "img5.jpg"
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
