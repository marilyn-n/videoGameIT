window.onload = function() {
    const backgroundAudio = new Audio('./audio/it-main-cut.mp3')
    backgroundAudio.volume = 0.2
    backgroundAudio.play()
    document.getElementById('start-button').onclick = () => {
        startGame()
    }
}


