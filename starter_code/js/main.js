
const backgroundAudio = new Audio('./audio/it-main-cut.mp3')
backgroundAudio.volume = 0.3
backgroundAudio.play()
window.onload = function() {
	document.getElementById('start-button').onclick = (e) => {
		let a = document.getElementById('start-button').parentElement.parentElement
		let x = document.getElementsByTagName("BODY")[0];
		console.log(a)
		x.removeChild(a)
		startGame()
	}
}