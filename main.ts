/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: Sep 2023
 * This program shows the temperature of the microbit
*/

const temperature = input.temperature()

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.B, function () {
  basic.clearScreen()
  basic.showString('The temperature is')
  basic.showNumber(temperature)
})
