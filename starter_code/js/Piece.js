class Piece {
	constructor(width, height, color, x, y, type){  
		this.width = width
		this.height = height
		this.color = color
		this.x = x
		this.y = y
		this.type = type
		this.img = new Image()
		this.img.src = this.type === 'balloon' ? IMAGES_PARAMS.BALLOON : IMAGES_PARAMS.PENNYWISE
    this.img.onload = () => {
			this.draw()
		}
	
	}
	update(board){
		board.ctx.fillStyle = this.color
		board.ctx.fillRect(this.x, this.y, this.width, this.height)
  }
	draw(board){
		board.ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
	}
	left() {
		return this.x
	}

	right() {
		return this.x + this.width
	}

	top() {
		return this.y           

	}

	bottom() {
		return this.y + this.height
	}
}


