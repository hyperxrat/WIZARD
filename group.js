const createbtn = document.querySelector('#createbtn');
const createcontainer = document.querySelector('.createcontainer');
const container = document.querySelector('.container')
const hiddenimg = document.querySelector('.hiddenimg')
const barbtn = document.querySelector('.barbtn');
const closebtnhidebox = document.querySelector('.closebtnhiddenbox')
const hiddenbox = document.querySelector('.hiddenbarbox')
const message = document.querySelector('.navmessage')
const sigma = document.querySelector('#sigma')

sigma.addEventListener("click",function(){
  location.href = "sigma.html";
})
message.addEventListener("click",function(){
  location.href = "message.html";
})
barbtn.addEventListener("click",function(){
  hiddenbox.style.display="block";
})
closebtnhidebox.addEventListener("click",function(){
  hiddenbox.style.display="none";
})

createbtn.addEventListener("click",function(){
    createcontainer.style.display="block";
    container.style.filter="blur(5px)"
})
// ------------------------------------
const buttons = document.querySelectorAll('.addbtn');

buttons.forEach(button => {
  button.addEventListener('click', function(){
    button.style.boxShadow = "0px 1px 15px #1eb453"
    button.style.backgroundColor = "#1eb453"
    button.style.borderColor = "#1eb453"
  });
});

/*
function errorscreen(){
  if(screen.width>=1360){
      console.log("Screen With Good")
  }
  else{
      document.body.style.display="none"
      alert("Hi User, Your screen width is less than 1360px increase screen width it to visit! This website is not Reponsive")
  }
}
errorscreen();
*/

document.querySelector('.closelistnavimg').addEventListener('click',function(){
  document.querySelector('.createcontainer').style.display="none"
  container.style.filter="blur(0px)"
})

document.querySelector('#danger').addEventListener('click',function(){
  alert("THIS WILL NOT WORK BECAUSE WORK IS GOING ON")
})

// -------------------GRUOUP CREATION----------------------------------

const creategupbtn = document.querySelector('#creategupbtn');
const gupcont = document.querySelector('.groupcontainer')

const namainp = document.querySelector('.nama')
const abtgupp = document.querySelector('.abtgupinp')

// creategupbtn.addEventListener('click',function(){

creategupbtn.addEventListener("click",function(){
  creategroup()
  namainp.value= ""
  abtgupp.value= ""
})

function creategroup(){


  if(!namainp.value && !abtgupp.value){
    console.log("gama")
  }
  else{
    event.preventDefault();

    
  const groupbox = document.createElement("div")
  groupbox.setAttribute("class","groupbox")
  gupcont.append(groupbox);

  const imgbox = document.createElement("div");
  imgbox.setAttribute("class","imgbox");
  groupbox.append(imgbox)
  
  const userinfo = document.createElement("div");
  userinfo.setAttribute("class","userinfo");
  groupbox.append(userinfo)

  const groupjoin = document.createElement("div");
  groupjoin.setAttribute("class","groupjoin");
  groupjoin.setAttribute("id","gaam")
  groupbox.append(groupjoin);

  const groupname = document.createElement('p')
  groupname.innerText = namainp.value;
  groupname.setAttribute('class',"groupname");
  userinfo.append(groupname)

  const infoul = document.createElement('ul');
  userinfo.appendChild(infoul);

  const members = document.createElement('p')
  members.setAttribute("class","aboutfollow");
  members.innerText="Members"
  infoul.append(members)
  
  const spanmem = document.createElement('span');
  spanmem.innerText="40";
  members.prepend(spanmem)

  const grouptype = document.createElement('p')
  grouptype.setAttribute("class","grouptypetext");
  grouptype.setAttribute("id","publicgroup")
  grouptype.innerText="PUBLIC"
  infoul.append(grouptype)

  const abtgup = document.createElement('p')
  abtgup.innerText = abtgupp.value;
  abtgup.setAttribute("class","groupquote");
  userinfo.append(abtgup)
  }

  const requestbtn = document.createElement('button');
  requestbtn.innerText="Request";
  requestbtn.setAttribute("class","addbtn");
  document.querySelector("#gaam").appendChild(requestbtn)
  const reportbtn = document.createElement('button');
  reportbtn.innerText="Report"
  reportbtn.setAttribute("class","reportbtn");
  document.querySelector("#gaam").appendChild(reportbtn)

  const buttons = document.querySelectorAll('.addbtn');

buttons.forEach(button => {
  button.addEventListener('click', function(){
    button.style.boxShadow = "0px 1px 15px #1eb453"
    button.style.backgroundColor = "#1eb453"
    button.style.borderColor = "#1eb453"

  });
});
}



