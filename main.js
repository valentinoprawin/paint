var mouseEvent="empty";
var lastX,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
widthofline=1;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)
{
    mouseEvent = "mouseup";
}
canvas.addEvenetListensr("mousemove" , my_mousemove);
function my_mousemove(e)
{
    currenX=e.clientX - canvas.offsetLeft;
    curreny=e.clientY - canvas.offsetTop;

    if ()
}