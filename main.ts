function driftLeft (speed: number) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    speed,
    SuperBit.enMotors.M3,
    speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    0 - speed,
    SuperBit.enMotors.M4,
    0 - speed
    )
}
function driftRight (speed: number) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M2,
    speed,
    SuperBit.enMotors.M3,
    speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    0 - speed,
    SuperBit.enMotors.M1,
    0 - speed
    )
}
input.onButtonPressed(Button.A, function () {
    forward(180)
    basic.pause(2000)
    reverse(180)
    basic.pause(2000)
    SuperBit.MotorStopAll()
})
function spinLeft (speed: number) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    speed,
    SuperBit.enMotors.M2,
    speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    0 - speed,
    SuperBit.enMotors.M4,
    0 - speed
    )
}
function reverse (speed: number) {
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
input.onButtonPressed(Button.AB, function () {
    driftLeft(180)
    basic.pause(2000)
    driftRight(180)
    basic.pause(2000)
    SuperBit.MotorStopAll()
})
input.onButtonPressed(Button.B, function () {
    spinLeft(180)
    basic.pause(2000)
    spinRight(180)
    basic.pause(2000)
    SuperBit.MotorStopAll()
})
function spinRight (speed: number) {
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M1,
    0 - speed,
    SuperBit.enMotors.M1,
    0 - speed
    )
    SuperBit.MotorRunDual(
    SuperBit.enMotors.M3,
    speed,
    SuperBit.enMotors.M4,
    speed
    )
}
function forward (speed: number) {
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
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    SuperBit.MotorStopAll()
})
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
	
})
