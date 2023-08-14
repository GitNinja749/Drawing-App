const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

      canvas.height = window.innerHeight - 120;
      canvas.width = window.innerWidth - 25;

  ctx.fillStyle = "white";
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle="black";

let brushColor = "black";
let brushSize = 3;
let brushType = "round";

document.getElementById("color").addEventListener("change",function(){
    brushColor = this.value;
    });
document.getElementById("thickness").addEventListener("change",function(){
    brushSize = this.value;
    });
document.getElementById("clearButton").addEventListener("click", function () {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = brushColor;
    });
document.getElementById("eraseButton").addEventListener("click", function () {
    brushColor = "white"; 
    });
document.getElementById("brushButton").addEventListener("click", function () {
    brushColor = document.getElementById("color").value; 
    });
document.getElementById("brushType").addEventListener("change", function () {
      brushType = this.value;
    });


let painting = false;

function paintingStart(e){
   painting = true;
   draw(e);
}
function paintingEnd(e){
    painting = false; 
    ctx.beginPath();
}
function draw(e){
    if(painting==false) return;
      let x = e.clientX - canvas.offsetLeft;
      let y = e.clientY - canvas.offsetTop;

      ctx.lineWidth = brushSize;
      ctx.lineCap = brushType;
      ctx.lineTo(x,y);
      ctx.strokeStyle = brushColor;
      ctx.stroke();
}


canvas.addEventListener("mousedown",paintingStart);
canvas.addEventListener("mouseup",paintingEnd);
canvas.addEventListener("mousemove",draw);

// This is for mobile
canvas.addEventListener("touchstart",paintingStart);
canvas.addEventListener("touchend", paintingEnd);
canvas.addEventListener("touchmove", draw);





