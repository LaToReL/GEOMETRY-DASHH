let colorPicker = document.getElementById("color");
let rangePicker = document.getElementById("range");
let rangePicker = document.getElementById("alfa");
let canvas = document.getElementById("canvas");
let clearBtn = document.getElementById ("clearBtn")
let fillBtn = document.getElementById("fillBtn")

let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let color = "black"; // <----------------
let mouseDown = false;
let radius = 10;

canvas.addEventListener("mousemove", function (event) {
  if (mouseDown) {
    ctx.strokeStyle = color
    ctx.fillStyle = color; // <--------------------
    ctx.lineWidth = radius

    ctx.lineTo(event.offsetX, event.offsetY, radius / 2, 0, 2 * Math.PI)
    ctx.stroke()

    ctx.beginPath();
    ctx.arc(event.offsetX, event.offsetY, radius / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY)
  }
});
canvas.addEventListener("mouseup", function (event) {   
  mouseDown = false;
});
canvas.addEventListener("mousedown", function (event) {
  mouseDown = true;
});
colorPicker.addEventListener("change", function (event) {
  color = colorPicker.value;
});
rangePicker.addEventListener("change", function (event) {
  radius = rangePicker.value;
  document.getElementById('rangeText').innerHTML = radius
});

alfaPicker.addEventListener("mousemove" , function (event){
    let alfa = alfaPicker.value
    document.getElementById("alfaText")
})