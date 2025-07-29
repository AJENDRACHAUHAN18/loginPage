var login_link=document.getElementById("login_link");
var sign_link=document.getElementById("sign_link");
var login=document.getElementById("login");
var signup=document.getElementById("signup");
login_link.onclick=function(){
    login.style.display="none"; 
   signup.style.display="block";
}

sign_link.onclick=function(){
   login.style.display="block"; 
   signup.style.display="none";
}


