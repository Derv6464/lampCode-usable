function long2 () {
    basic.showString("L")
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 12; index++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 25)
        basic.pause(100)
    }
    for (let index = 0; index < 12; index++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 25)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    basic.clearScreen()
}
input.onButtonPressed(Button.A, function () {
    long2()
})
function short2 () {
    basic.showString("s")
    pins.digitalWritePin(DigitalPin.P2, 1)
    for (let index = 0; index < 4; index++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 100)
        basic.pause(100)
    }
    for (let index = 0; index < 4; index++) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 100)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P2, 0)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    basic.clearScreen()
}
input.onButtonPressed(Button.B, function () {
    short2()
})
