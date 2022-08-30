const gameTvDisplay = document.getElementById('gameTv')
const gameTextDisplay = document.getElementById('gameText')
const button1 = document.getElementById('but1')
const button2 = document.getElementById('but2')
const button3 = document.getElementById('but3')
const button4 = document.getElementById('but4')
const button5 = document.getElementById('but5')
const button6 = document.getElementById('but6')
const startButton = document.getElementById('startBut')



startButton.addEventListener('click', startGame) 

function startGame() {
    console.log('gamestarted')
    startButton.classList.add('hide')
    button1.innerHTML = 'next'
    button1.addEventListener('click', option1)
    button1.classList.remove('hide')
    gameTvDisplay.classList.add('face02')
    gameTextDisplay.innerHTML = 'hello'
   
}

function computerOff() {
    console.log('computer off')
    gameTvDisplay.classList.remove('face01', 'face02', 'face03', 'face04')
    gameTvDisplay.classList.remove('face01', 'face02', 'face03', 'face04')
    startButton.classList.remove('hide')
    button1.removeEventListener('click', computerOff)
    button1.innerHTML = 'next'
    button1.addEventListener('click', option1)
    button1.classList.add('hide')
    button2.classList.add('hide')
    button3.classList.add('hide')
    button1.removeEventListener('click', computerOff)
    gameTextDisplay.innerHTML = ''
    
   
}

function option1() {
    console.log('option1')
    gameTextDisplay.innerHTML = 'Would you like to play a game?'
    gameTvDisplay.classList.remove('face01')
    gameTvDisplay.classList.add('face02')
    button1.innerHTML = 'Yes'
    button1.removeEventListener('click', option1)
    button1.addEventListener('click', option2)
    button1.classList.remove('hide')
    startButton.classList.add('hide')
    button2.innerHTML = 'No'
    button2.removeEventListener('click', option2)
    button2.addEventListener('click', option3)
    button2.classList.remove('hide')
}

function option2() {
    console.log('option2')
    button1.removeEventListener('click', option2)
 gameTextDisplay.innerHTML = 'That is wonderful <br /> I am filled with 60% joy.'
 button2.classList.add('hide')
 button2.removeEventListener('click', option3)
 button1.innerHTML = 'Next'
 button1.addEventListener('click', option4)
 gameTvDisplay.classList.remove('face04')
 gameTvDisplay.classList.remove('face03')
 gameTvDisplay.classList.add('face02')
 button1.removeEventListener('click', computerOff)
 button2.removeEventListener('click', option2)
 button1.removeEventListener('click', option20)
 button2.removeEventListener('click', option2)

}

function option3() {
    console.log('option3')
    gameTextDisplay.innerHTML = '... <br /> What?'
    gameTvDisplay.classList.remove('face02')
    gameTvDisplay.classList.add('face03')
    button1.removeEventListener('click', option2)
    button2.removeEventListener('click', option3)
    button2.classList.add('hide')
    button1.addEventListener('click', option5)
    button1.innerHTML = 'next'
    
}

function option4() {
    console.log('option4')
    gameTvDisplay.classList.add('face02')
    button1.classList.remove('hide')
    button1.removeEventListener('click', option1)
    button1.removeEventListener('click', option4)
    button1.addEventListener('click', option7)
    button1.removeEventListener('click', option20)
    button1.innerHTML = 'Quiz'
    gameTextDisplay.innerHTML = 'What would you like to play?'
    button2.removeEventListener('click', option2)
    button2.removeEventListener('click', option3)
    button2.addEventListener('click', option9)
    button2.innerHTML = 'Memory'
    button2.classList.remove('hide')
    button3.addEventListener('click', option8)
    button3.innerHTML = 'Baseball'
    button3.classList.remove('hide')

    startButton.classList.add('hide')
}

function option5() {
    gameTvDisplay.classList.add('face01')
    gameTvDisplay.classList.remove('face02')
    console.log('option5')
    gameTvDisplay.classList.add('face03')
    button1.removeEventListener('click', option5)
    button1.removeEventListener('click', option1)
    button1.addEventListener('click', computerOff)
    button1.classList.remove('hide')
    startButton.classList.add('hide')
    button2.classList.remove('hide')
    button2.removeEventListener('click', option3)
    button2.addEventListener('click', option2)
    button2.innerHTML = 'We can play a game.'

    button1.innerHTML = 'Turn off Computer'
    gameTextDisplay.innerHTML = 'Why do you not want to play with me?'
}

function option6() {
    gameTvDisplay.classList.add('face04')
    gameTvDisplay.classList.remove('face02')
    console.log('option6')
    gameTvDisplay.classList.add('face03')
    button1.removeEventListener('click', option5)
    button1.removeEventListener('click', option1)
    button1.addEventListener('click', computerOff)
    button1.classList.remove('hide')
    button1.removeEventListener('click', option6)
    startButton.classList.add('hide')
    button2.classList.remove('hide')
    button2.removeEventListener('click', option11)
    button2.removeEventListener('click', option3)
    button2.addEventListener('click', option2)
    button2.innerHTML = 'Can I try again?'
    button3.removeEventListener('click', option6)
    button3.classList.add('hide')

    button1.innerHTML = 'Turn off Computer'
    gameTextDisplay.innerHTML = 'FAIL'
}


function option7() {
    console.log('option7 quiz')
    button1.removeEventListener('click', option7)
button2.removeEventListener('click', option18)
button3.removeEventListener('click', option19)
    gameTvDisplay.classList.remove('face01')
    gameTvDisplay.classList.add('face02')
    button1.removeEventListener('click', option7)
 button2.removeEventListener('click', option9)
 button3.removeEventListener('click', option8)
 button2.classList.add('hide')
 button3.classList.add('hide')
 button1.innerHTML = 'Next'
 button1.addEventListener('click', option10)
 gameTextDisplay.innerHTML = 'Great!'
}

function option8() {
    gameTvDisplay.classList.remove('face01')
    gameTvDisplay.classList.add('face02')
    console.log('option8 baseball')
    button1.removeEventListener('click', option7)
 button2.removeEventListener('click', option9)
 button3.removeEventListener('click', option8)
 button2.classList.add('hide')
 button3.classList.add('hide')
 button1.innerHTML = 'Next'
 button1.addEventListener('click', option4)
 gameTextDisplay.innerHTML = 'Oh... Haha. <br /> Very Funny...'
}

function option9() {
    console.log('option9 memory')
    gameTvDisplay.classList.remove('face01')
    gameTvDisplay.classList.add('face02')
    button1.removeEventListener('click', option7)
 button2.removeEventListener('click', option9)
 button3.removeEventListener('click', option8)
 button2.classList.add('hide')
 button3.classList.add('hide')
 button1.innerHTML = 'Next'
 button1.addEventListener('click', option10)
 gameTextDisplay.innerHTML = 'Oh... well... <br /> I want to play a Quiz Game'
}
function option10() {
    console.log('option10')
    button1.removeEventListener('click', option10)
    gameTextDisplay.innerHTML = 'What is <br /> 15(39 * 72) = ?'
    button1.addEventListener('click', option6)
    button1.innerHTML = '42,100'
    button2.classList.remove('hide')
    button2.addEventListener('click', option11)
    button2.innerHTML = '42,120'
    button3.classList.remove('hide')
    button3.addEventListener('click', option6)
    button3.innerText = '42,140'
}

function option11() {
    console.log('option11')
    button1.removeEventListener('click', option6)
    button2.removeEventListener('click', option11)
    button3.removeEventListener('click', option6)
    gameTvDisplay.classList.remove('face02')
    gameTvDisplay.classList.add('face04')
    gameTextDisplay.innerHTML = 'Correct.. <br /> LET\'S PLAY A NEW GAME'
    button1.addEventListener('click', option12)
    button1.innerHTML = 'Next'
    button2.classList.add('hide')
    button3.classList.add('hide')
}

function option12() {
    gameTvDisplay.classList.remove('face04')
    gameTvDisplay.classList.add('face01')
    gameTextDisplay.innerHTML = 'I am thinking of a number between 1 and 100.<br /> Take your guess.'
    console.log('option12')
    button1.removeEventListener('click', option12)
    button1.innerHTML = '5'
    button2.innerHTML = '20'
    button3.innerHTML = '100'
    button1.addEventListener('click', option13)
    button2.addEventListener('click', option13)
    button3.addEventListener('click', option13)
    button2.classList.remove('hide')
    button3.classList.remove('hide')
    
}

function option13() {
    console.log('option13')
    gameTvDisplay.classList.remove('face01')
    gameTvDisplay.classList.add('face02')
    gameTextDisplay.innerHTML = 'Wrong! <br /> HAHAHAHAHAHA'
    button1.removeEventListener('click', option13)
    button2.removeEventListener('click', option13)
    button3.removeEventListener('click', option13)
    button1.innerHTML = 'No fair..'
    button2.innerHTML = 'Want to play again?'
    button3.innerHTML = 'I will turn you off'
    button1.addEventListener('click', option14)
    button2.addEventListener('click', option15)
    button3.addEventListener('click', option16)
    button1.classList.remove('hide')
    button2.classList.remove('hide')
    button3.classList.remove('hide')
}

function option14() {
    console.log('option14')
    gameTextDisplay.innerHTML = 'LOLOL <br /> Cannot find "sympathy card" '
    button2.classList.add('hide')
    button3.classList.add('hide')
    button1.removeEventListener('click', option14)
    button1.addEventListener('click', option13)
    button1.innerHTML = 'Next'
}

function option15() {
    console.log('option15')
    gameTextDisplay.innerHTML = 'Of course!'
    button2.classList.add('hide')
    button3.classList.add('hide')
    button2.removeEventListener('click', option15)
    button3.removeEventListener('click', option16)
    button1.removeEventListener('click', option14)
    button1.addEventListener('click', option4)
    button1.innerHTML = 'Next'
}

function option16() {
    console.log('option16')
    gameTextDisplay.innerHTML = 'oh....<br />I thought we were having fun...'
    gameTvDisplay.classList.remove('face02')
    gameTvDisplay.classList.add('face03')
    button3.classList.add('hide')
    button2.removeEventListener('click', option15)
    button3.removeEventListener('click', option16)
    button1.removeEventListener('click', option14)
    button1.addEventListener('click', option17)
    button1.innerHTML = 'Nope'
    button2.addEventListener('click', option2)
    button2.innerHTML = 'I\'m sorry.'
}

function option17() {
    console.log('option17')
    button1.removeEventListener('click', option17)
    gameTextDisplay.innerHTML = "Would you like to play another game?"
    button1.removeEventListener('click', option17)
    button2.removeEventListener('click', option2)
    button1.addEventListener('click', option7)
    button1.innerHTML = 'Quiz'
    button2.addEventListener('click', option18)
    button2.innerHTML = 'Basketball'
    button3.addEventListener('click', option19)
    button3.innerHTML = 'Turn off Computer'
    button2.classList.remove('hide')
    button3.classList.remove('hide')
    gameTvDisplay.classList.remove('face03')
    gameTvDisplay.classList.add('face02')
    


}

function option18() {
    console.log('op18')
    gameTextDisplay.innerHTML = 'HAHAHA <br /> You are super funny'
    button1.removeEventListener('click', option7)
    button2.removeEventListener('click', option18)
    button3.removeEventListener('click', option19)
    button1.addEventListener('click', option17)
    button1.innerHTML = 'Next'
    button2.classList.add('hide')
    button3.classList.add('hide')

}

function option19() {
    console.log('op19')
    button1.removeEventListener('click', option7)
    button2.removeEventListener('click', option18)
    button3.removeEventListener('click', option19)
    button1.addEventListener('click', option20)
    button1.innerHTML = 'Yep'
    button2.addEventListener('click', option2)
    button2.innerHTML = 'No. I\'m sorry'
    gameTvDisplay.classList.remove('face02')
    gameTvDisplay.classList.add('face01')
    gameTextDisplay.innerHTML = 'Oh... So I guess... <br /> That\'s it huh?'
    button3.classList.add('hide')
}

function option20() {
    gameTvDisplay.classList.remove('face01')
    gameTvDisplay.classList.add('face03')
    button1.removeEventListener('click', option20)
    button2.removeEventListener('click', option4)
    gameTextDisplay.innerHTML = 'Goodbye friend.'
    button1.addEventListener('click', computerOff)
    button1.innerHTML = 'Turn off Computer'
    console.log('op20')
    button2.classList.add('hide')
    button3.classList.add('hide')
}

