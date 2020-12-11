# Weihnachtsbaum für deinen Schreibtisch
## ~avatar avatar @unplugged
Du möchtest einen kleinen digitalen Weihnachtsbaum für deinen Schriebtisch? <br>
Mit dem Calliope ein Neopixeln kein Problem! <br>
![Weihnachtsbaum](https://github.com/r00b1nh00d/weihnachtsbaum/blob/master/Weihnachtsbaum.gif?raw=true)
## Programmierung
Die Programmierung ist einfach. Mit dem drückens des ``||input: Knopfes A||`` kannst du alle LEDs auf Grün schalten. <br>
Mit drücken des ``||input: Knopfes B||`` kannst du jetzt den Weihnachtsbaum mit roten "Christbaum Kugeln" schmücken.  <br>
Schalte dazu einfach jede dritte oder vierte LED auf rot. <br>
**probiere dies möglichst selbst zu programmieren** <br>
![Weihnachtsbaum](https://github.com/r00b1nh00d/weihnachtsbaum/blob/master/Weihnachtsbaum.gif?raw=true)




## Lösung 
Hier siehst du nun eine mögliche Lösung. Hat dein eigenes Programm funktioniert?
```blocks
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
```



