input.onGesture(Gesture.Shake, function () {
	
})
input.calibrateCompass()
basic.forever(function () {
    if (true) {
        basic.showNumber(input.compassHeading())
    } else {
        basic.showArrow(ArrowNames.North)
        basic.showArrow(ArrowNames.East)
        basic.showArrow(ArrowNames.South)
        basic.showArrow(ArrowNames.West)
    }
})
