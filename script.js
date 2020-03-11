let doors = document.getElementById('doors').children
let doorsArray = Array.from(doors)
var doorsArrayImgs = ['./img/beach.svg', './img/robot.svg', './img/space.svg']
var tempImgs = doorsArrayImgs.slice()
let chosenImage
let firstDoor = document.getElementById('firstDoor')
let playButton = document.getElementById('play')
let currentStreak = document.getElementById('currentStreak')
let currentStreakValue = 0
let bestStreak = document.getElementById('bestStreak')
let flags = [0,0,0]

playButton.onclick = () => {
    doorsArray.map(door => { door.src = './img/closed_door.svg' })
    playButton.innerHTML = 'Good luck!'
    tempImgs = doorsArrayImgs.slice()
    flags = [0,0,0]
}

function getRandomNum(length) {
    let randomNum = Math.floor(Math.random() * length)
    return randomNum
}

function choosePicture(num) {
    return tempImgs.splice(num, 1)[0]
}

doorsArray.map( (door,index) => {
    door.onclick = () => {
        if (flags[index] === 0){
            
            if (tempImgs.length && playButton.innerHTML === "Good luck!") {
                chosenImage = choosePicture(getRandomNum(tempImgs.length))
                console.log(chosenImage)
                door.src = chosenImage
                
                if (chosenImage === './img/robot.svg' && tempImgs.length) {
                    playButton.innerHTML = "Game over <br> play again?"
                    currentStreakValue = 0
                    currentStreak.innerHTML = currentStreakValue

                }
                else if (tempImgs.length === 0) {
                    playButton.innerHTML = "You win! Play again?"
                    currentStreakValue+=1
                    currentStreak.innerHTML = currentStreakValue
                    if (currentStreakValue > parseInt(bestStreak.innerText) ) {bestStreak.innerHTML = currentStreakValue }
                    
                }
                flags[index] = 1
            }
            
        }
        
    }
})