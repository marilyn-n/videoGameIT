class Board {
	constructor(doc){
		this.doc = doc
		this.canvas = this.doc.createElement('canvas')
		this.frames = 0
		this.points = 0
		this.interval = null
	}
	drawTrack(){
		this.ctx.fillStyle='#8C5875'
		this.ctx.fillRect(42,0,800,600)

	}
	start() {
		this.frames = 0
		clearInterval(this.interval)
		this.canvas.width = 800
		this.canvas.height = 600
		this.ctx = this.canvas.getContext('2d')
		this.doc.body.insertBefore(this.canvas, this.doc.body.childNodes[0])
	}
	clear() {
		this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
	} 
	stop() {
		clearInterval(this.interval)
		this.ctx.fillStyle = '#870007'
		this.ctx.fillRect(0,0,800,600)
		this.ctx.font = '40px Rammetto One, cursive'
		this.ctx.fillStyle = 'white'
		this.ctx.fillText('Game Over!', 75, 250)
		this.ctx.fillStyle = 'white'
		this.ctx.fillText('Your final score', 60, 290)
		this.ctx.fillText(this.points, 130, 330)
	}
	score() {
		this.points = (Math.floor(this.frames/50))
		this.ctx.font = '18px serif'
		this.ctx.fillStyle = 'white'
		this.ctx.fillText('Score: '+this.points, 60, 30)
	}   
	drawPlayer(player) {
		this.ctx.drawImage(player.img, player.x, player.y, 30,60)
	}      
      
}
