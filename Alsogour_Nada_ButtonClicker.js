var btn = document.getElementById("btnOne");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn.addEventListener("click",changeLabel);
btn2.addEventListener("click",deletebtn);
btn3.addEventListener("click",popUpAlert);



function changeLabel(e){
    
    btn.innerHTML ="Logout";
}




function deletebtn(e){
    
    btn2.remove();
}


function popUpAlert() {
    
    alert("Ninja was liked");
}