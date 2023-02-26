function driftLeft (speed: number) {
	
}
function driftRight (speed: number) {
	
}
input.onButtonPressed(Button.A, function () {
    forward(180)
})
function spinLeft (speed: number) {
	
}
function reverse (speed: number) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    0 - speed,
    SuperBit.enMotors.M2,
    0 - speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    0 - speed,
    SuperBit.enMotors.M4,
    0 - speed
    )
}
input.onButtonPressed(Button.B, function () {
    reverse(180)
})
function spinRight (speed: number) {
	
}
function forward (speed: number) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    speed,
    SuperBit.enMotors.M2,
    speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    speed,
    SuperBit.enMotors.M4,
    speed
    )
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    SuperBit.MotorStopAll()
})
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
	
})
