document.getElementsByTagName("li");  //array
document.getElementsByTagName("li").length;
document.getElementsByTagName("li")[0].style.color="red";



document.getElementById("btn");  / /  get single item coz id
document.getElementById("btn").innerHTML="deep";


//now hre we can select element or class or id

document.querySelector("h1");

document.querySelector("li a");  // anchor tag inside a li tag


document.querySelector("li.class_name");  



document.querySelector("#id_name a");  // herarchical 


document.querySelector("#id_name .class");  // herarchical   



document.querySelectorAll("#id_name .class");  // for all item 

document.querySelectorAll("h1").style.visibility="hidden";  // to hide using js

 document.querySelector("h1").classList;
 document.querySelector("h1").classList.add("invisible");  // now goto css and make a class  invisible 
 document.querySelector("h1").classList.remove("invisible");  // now goto css and make a class  invisible 
 document.querySelector("h1").classList.toggle("invisible");  // now goto css and make a class  invisible 
 
 
 document.querySelector("h1").innerHTML;  // this always gonna give whats insde the the h1 tag 
 // but this not
 document.querySelector("h1").textContent;
 
 
 // oro u can assign text with tag using inner html
 
 document.querySelector("h1").getAttribute(id);
 document.querySelector("h1").setAttribute(id, "sdfsfs");



 callbacks????

 

// anonmyous function

document.querySelector("buttton").addEventListener("click",function (){
    alert("i got clicked");
})



console-->

debugger;then write ur code to check its working





jquery .on method 
\

befor ()
aftere 
append 

prepend



.hide()

.remove()


fadeout()
fadein()
fadetoggle()
slideup()
slidein()
slidetoggle()
.animate(  )   //custom js



$("h1").slideup().slidedown().animate(); // muliple props





