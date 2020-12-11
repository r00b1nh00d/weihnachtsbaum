input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    for (let Index = 0; Index <= 11; Index++) {
        strip.setPixelColor(Index * 3, neopixel.colors(NeoPixelColors.Red))
        strip.show()
    }
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.C16, 29, NeoPixelMode.RGB)
