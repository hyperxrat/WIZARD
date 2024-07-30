const requestbtn = document.querySelector("#requestbtn");
const addbtn = document.querySelectorAll(".addbtn");
const message = document.querySelector(".navmessage")
const barbtn = document.querySelector(".barbtn");
const closebtnhidebox = document.querySelector(".closebtnhiddenbox")
const hiddenbox = document.querySelector(".hiddenbarbox")
const request = document.querySelector('.requestcont');

message.addEventListener("click",function(){
    location.href = "message.html";
})
barbtn.addEventListener("click",function(){
    hiddenbox.style.display="block";
})
document.querySelector('#friendbtn').addEventListener('click',function(){
    document.querySelector('.hiddenfriendmaincont').style.display="block";
})
document.querySelector('#hidimg').addEventListener('click',function(){
    document.querySelector('.hiddenfriendmaincont').style.display="none";
})
document.querySelector('#requestbtn').addEventListener("click",function(){
    request.style.display="block";
})
document.querySelector('.closelistnavimg').addEventListener('click',function(){
    document.querySelector('.requestcont').style.display="none"
})
closebtnhidebox.addEventListener("click",function(){
    hiddenbox.style.display="none";
})


const buttons = document.querySelectorAll('.addbtn');
const requestcont = document.querySelector(".listcontianer")
const requestlistbox = document.querySelector(".dostbox")

buttons.forEach(button => {
  button.addEventListener('click', function(){
    button.style.backgroundColor= "#1eb453"
    button.style.borderColor = "#1eb453"
    requestbtn.style.backgroundColor = "#1eb453"
    requestbtn.style.borderColor = "#1eb453"
    requestbtn.style.color= "#fff"
    requestbtn.style.boxShadow = "0px 1px 15px #1eb453";
    
    const dostbox = document.createElement('div');
    dostbox.setAttribute("class","dostbox")
    requestcont.append(dostbox)

    const userimg = document.createElement('img')
    userimg.setAttribute("class","userimg")
    dostbox.append(userimg)

    const requestul = document.createElement("ul")
    dostbox.appendChild(requestul)
    
    const insideul = document.createElement('p')
    insideul.setAttribute("class","requestmsg")
    insideul.innerText = `  You have requested to suer to Follow`
    requestul.append(insideul)

    const whathappen = document.createElement("img")
    whathappen.setAttribute("class","happen")
    dostbox.append(whathappen)
  });
});

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
