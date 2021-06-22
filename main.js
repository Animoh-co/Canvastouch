var mouseeve= "empty";
var color= "black";
var width=  3;
var last_position_of_x, last_position_of_y;

canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var width=screen.width;
var new_width= screen.width-70;
var new_height= screen.height-300;

if(width < 992){
    document.getElementById("myCanvas").width= new_width;
    document.getElementById("myCanvas").height= new_height;
document.body.style.overflow= "hidden"; //So that it won't let you scroll down the page

}

canvas.addEventListener("mousedown", my_md);
function my_md(e){
    color= document.getElementById("linecolor").value;
    width= document.getElementById("linewidth").value;

    mouseeve = "mouseDown";
}


canvas.addEventListener("mouseup" , my_mu);
function my_mu(e){
    mouseeve= "MouseUp";
}



canvas.addEventListener("mouseleave", my_ml);
function my_ml(e){
    mouseeve="MouseLeave";
}



canvas.addEventListener("mousemove", my_mm);
function my_mm(e){
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouseeve=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();
    
}


    last_position_of_x= current_position_of_x;
    last_position_of_y= current_position_of_y;
}


canvas.addEventListener("touchstart", my_touchst);
function my_touchst(e){
    console.log("lastposition"+e);

    color=document.getElementById("linecolor").value;
    linewidth=document.getElementById("linewidth").value;

last_position_of_x= e.touches[0].clientX- canvas.offsetLeft;
last_position_of_y= e.touches[0].clientY - canvas.offsetTop;

console.log("Last position of x"+last_position_of_x);
console.log("Last position of y"+last_position_of_y);



}


canvas.addEventListener("touchmove", my_touchmo);
function my_touchmo(e){
    console.log("Currentposition"+e);
    current_position_of_x = e.touches[0].clientX-canvas.offsetLeft;
    current_position_of_y= e.touches[0].clientY-canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle= color;
    ctx.lineWidth= linewidth;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();

    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}




function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}



