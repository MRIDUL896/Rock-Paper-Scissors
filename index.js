let num1=Math.floor(Math.random()*3)+1;
let img1_add="Assets/img_" + num1 + ".png";
let img1=document.getElementById("left_hand");
img1.setAttribute("src",img1_add)


let num2=Math.floor(Math.random()*3)+1;
let img2_add="Assets/img_" + num2 + ".png";
let img2=document.getElementById("right_hand");
img2.setAttribute("src",img2_add);

let output=document.getElementById("ending");
if(num1==num2) output.textContent="Tied";
else if(num1==1){
    if(num2==2) output.textContent="Right Won";
    else output.textContent="Left Won";
}
else if(num1==2){
    if(num2==1) output.textContent="Left Won";
    else output.textContent="Right Won";
}
else{
    if(num2==1) output.textContent="Right Won";
    else output.textContent="Left Won";
}