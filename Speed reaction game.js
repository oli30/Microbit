let buttonWasPressed = ""
let time = 0
let scoreA = 0
let scoreB = 0

basic.forever(function () {
    function getReward() {
        let rewardNumber = randint(1, 5)
        if (rewardNumber === 1) {
            basic.showIcon(IconNames.Heart)
        }
        else if (rewardNumber === 2) {
            basic.showIcon(IconNames.Yes)
        }
        else if (rewardNumber === 3) {
            basic.showIcon(IconNames.Happy)
        }
        else if (rewardNumber === 4) {
            basic.showIcon(IconNames.StickFigure)
        }
        else if (rewardNumber === 5) {
            basic.showLeds(`
. . . . .
. . # . .
. # # # .
# # # # #
. . # . .
            `)
        }
    }
buttonWasPressed = "false"
    time = randint(100, 1500)
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(time)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(100)
    basic.clearScreen()
    time = randint(100, 1000)
    while (buttonWasPressed == "false") {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("A wins!")
            buttonWasPressed = "true"
            scoreA += 1
            getReward()
            basic.showString(" A:" + scoreA + "B:" + scoreB)
        } else if (input.buttonIsPressed(Button.B)) {
            basic.showString("B wins!")
            buttonWasPressed = "true"
            scoreB += 1
            getReward()
            basic.showString("A:" + scoreA + "B:" + scoreB)
        }
        else if (input.buttonIsPressed(Button.AB)) {
            if (scoreA > scoreB) {
                basic.showString("Overall A wins with " + scoreA + 'points')
            }
            else if (scoreA > scoreB) {
                basic.showString("Overall B wins with " + scoreB + 'points')
            }
            else {
                basic.showString("Draw")
            }
            buttonWasPressed = "true"
        }   
    }
})
