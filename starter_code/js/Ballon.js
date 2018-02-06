class Ballon {
  constructor(){
    this.width = width
		this.height = height
		this.x = x
    this.y = y
    this.img = new Image();
    this.img.src = ballon
//no funciona
  }

}

update(board){
  board.ctx.fillStyle = this.color
  board.ctx.fillRect(this.x, this.y, this.width, this.height)
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