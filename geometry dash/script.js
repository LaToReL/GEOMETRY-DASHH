let gd = new Image()
let gdgdgd = new Image()

gd.src = "./images/gd.png"
gdgdgd.src = "./images/gdgdgd.jpg"

let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

let gdX = canvas.width / 6
let gdY = canvas.height / 1.2
let gdW = 50
let gdH = 50
let gravity = 9.8

let bgSpeed = 5
let bgX = 0
let jumpState = false

setInterval(() => {
    ctx.drawImage(gdgdgd, bgX, 0, canvas.width, canvas.height)
    ctx.drawImage(gdgdgd, bgX + canvas.width, 0, canvas.width, canvas.height)
    ctx.drawImage(gd, gdX, gdY, gdW, gdH)

    if(bgX <= canvas.width * -1){
        bgX = 0
    } else{
        bgX -= bgSpeed
    }
    if(jumpState){
        gdY
    }
    
}, 30)

canvas.addEventListener('click', () => {
    if (gdY >= canvas.height - gdH){
        jumpState = true
    }
})
