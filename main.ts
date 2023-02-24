function doSomething () {
    myCounter = sevenseg.createCounter(SegmentStyle.Thick, SegmentScale.Full, 5)
    Count = game.askForNumber("Set the timer for how long")
    for (let index = 0; index < Count * 60 + 0; index++) {
        pause(1000)
        myCounter.count += 1
    }
    Res = game.ask("Do you want to set a new timer")
    if (Res == true) {
        doSomething()
    } else {
        game.splash("Closeing")
    }
}
let Res = false
let Count = 0
let myCounter: DigitCounter = null
doSomething()
