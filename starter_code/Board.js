class Board {
    constructor(doc){
        this.doc = doc
        this.canvas = this.doc.createElement('canvas')
        this.frames = 0
        this.points = 0
        this.interval = null
    }
    drawTrack(){
        this.ctx.fillStyle='#367E1A'
        this.ctx.fillRect(0,0,30,600)

        this.ctx.fillStyle='#367E1A'
        this.ctx.fillRect(270,0,30,600)

        this.ctx.fillStyle='#808080'
        this.ctx.fillRect(30,0,5,600)

        this.ctx.fillStyle='#808080'
        this.ctx.fillRect(265,0,5,600)

        this.ctx.fillStyle='#808080'
        this.ctx.fillRect(42,0,216,600)

        this.ctx.strokeStyle='#FFF'
        this.ctx.lineWidth=5
        this.ctx.setLineDash([15, 15])
        this.ctx.beginPath()
        this.ctx.moveTo(150,5)
        this.ctx.lineTo(150,600)
        this.ctx.stroke()
    }
    start() {
        this.frames = 0
        clearInterval(this.interval)
        this.canvas.width = 300
        this.canvas.height = 600
        this.ctx = this.canvas.getContext('2d')
        this.doc.body.insertBefore(this.canvas, this.doc.body.childNodes[0])
    }
    clear() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
    } 
    stop() {
        clearInterval(this.interval)
        this.clear()
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0,0,300,600)
        this.ctx.font = '30px serif'
        this.ctx.fillStyle = 'red'
        this.ctx.fillText('Game Over!', 75, 250)
        this.ctx.fillStyle = 'white'
        this.ctx.fillText('Your final score', 60, 290)
        this.ctx.fillText(this.points, 130, 330)
    }
    score() {
        this.points = (Math.floor(this.frames/5))
        this.ctx.font = '18px serif'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText('Score: '+this.points, 60, 30)
    }   
    drawPlayer(player) {
        this.ctx.drawImage(player.img, player.x, player.y, 30,60)
    }      
      
}
