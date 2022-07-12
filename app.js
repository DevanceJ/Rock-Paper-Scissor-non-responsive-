var control = document.querySelectorAll('#rcs li')
var img = document.querySelectorAll('.main-img')
var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissor = document.getElementById('scissor')
var botRock = document.getElementById('bot-rock')
var botPaper = document.getElementById('bot-paper')
var botScissor = document.getElementById('bot-scissor')

let player, computer;
var controlArr = Array.from(control);


controlArr[0].addEventListener('click', animateRock)
controlArr[1].addEventListener('click', animatePaper)
controlArr[2].addEventListener('click', animateScissor)

function animateRock(e) {
    if (paper.style.display == 'block' || scissor.style.display == 'block') {
        scissor.style.display = 'none'
        paper.style.display = 'none'
    }
    rock.style.animation = 'myMove 1s'
    rock.style.display = 'block'
    player = 'rock'
    computerPlay()
    winner()
}
function animatePaper(e) {
    if (rock.style.display == 'block' || scissor.style.display == 'block') {
        scissor.style.display = 'none'
        rock.style.display = 'none'
    }
    paper.style.animation = 'myMove 1s'
    paper.style.display = 'block'
    player = 'paper';
    computerPlay()
    winner()
}
function animateScissor(e) {
    if (paper.style.display == 'block' || rock.style.display == 'block') {
        rock.style.display = 'none'
        paper.style.display = 'none'
    }
    scissor.style.animation = 'myMove 1s'
    scissor.style.display = 'block'
    player = 'scissor'
    computerPlay()
    winner()
}

function computerPlay() {
    const randNum = Math.floor(Math.random() * 3) + 1
    console.log(randNum)
    switch (randNum) {
        case 1:
            computer = 'rock'
            if (botPaper.style.display == 'block' || botScissor.style.display == 'block') {
                botScissor.style.display = 'none'
                botPaper.style.display = 'none'
            }
            botRock.style.animation = 'botMove 1s'
            botRock.style.display = 'block'
            break;

        case 2:
            computer = 'paper'
            if (botRock.style.display == 'block' || botScissor.style.display == 'block') {
                botScissor.style.display = 'none'
                botRock.style.display = 'none'
            }
            botPaper.style.animation = 'botMove 1s'
            botPaper.style.display = 'block'
            break;
        case 3:
            computer = 'scissor'
            if (botPaper.style.display == 'block' || botRock.style.display == 'block') {
                botRock.style.display = 'none'
                botPaper.style.display = 'none'
            }
            botScissor.style.animation = 'botMove 1s'
            botScissor.style.display = 'block'
            break;
    }
}
let w = 0;
let l = 0;
let d = 0;
var win = document.getElementById('win')
win.textContent = w
var lose = document.getElementById('lose')
lose.textContent = l
var draw = document.getElementById('draw')
draw.textContent = d
function winner() {
    if (player == computer) {
        draw.textContent = ++d;
    }
    else if (computer == 'rock') {
        if (player == 'paper') {
            win.textContent = ++w;
        }
        else if (player == 'scissor') {
            lose.textContent = ++l
        }
    }
    else if (computer == 'paper') {
        if (player == 'scissor') {
            win.textContent = ++w;
        }
        else if (player == 'rock') {
            lose.textContent = ++l
        }
    }
    else if (computer == 'scissor') {
        if (player == 'rock') {
            win.textContent = ++w;
        }
        else if (player == 'paper') {
            lose.textContent = ++l
        }
    }
}
