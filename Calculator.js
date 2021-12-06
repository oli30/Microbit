let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0

basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        count1++
        basic.showNumber(count1);
    }
    else if (input.buttonIsPressed(Button.B)) {
        count2++
        basic.showNumber(count2);
    }
    else if (input.isGesture(Gesture.ScreenUp)) {
        let count3 = count1 + count2
        basic.showNumber(count3);
    }
    else if (input.isGesture(Gesture.ScreenDown)) {
        let count4 = count1 - count2
        basic.showNumber(count4);
    }
})
