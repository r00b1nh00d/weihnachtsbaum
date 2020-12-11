# Weihnachtsbaum für deinen Schreibtisch
## ~avatar avatar @unplugged
Du möchtest einen kleinen digitalen Weihnachtsbaum für deinen Schriebtisch? <br>
Mit dem Calliope ein Neopixeln kein Problem! <br>
![Weihnachtsbaum](https://github.com/r00b1nh00d/weihnachtsbaum/blob/master/Weihnachtsbaum.gif?raw=true)
## Programmierung
Die Programmierung ist einfach. Mit dem drückens des ``||input: Knopfes A||`` kannst du alle LEDs auf Grün schalten. <br>
Mit drücken des ``||input: Knopfes B||`` kannst du jetzt den Weihnachtsbaum mit roten "Christbaum Kugeln" schmücken.  <br>
Schalte dazu einfach jede dritte oder vierte LED auf rot.
**probiere dies möglichst selbst zu programmieren**
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


> Diese Seite bei [https://r00b1nh00d.github.io/weihnachtsbaum/](https://r00b1nh00d.github.io/weihnachtsbaum/) öffnen

## Als Erweiterung verwenden

Dieses Repository kann als **Erweiterung** in MakeCode hinzugefügt werden.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Neues Projekt**
* klicke auf **Erweiterungen** unter dem Zahnrad-Menü
* nach **https://github.com/r00b1nh00d/weihnachtsbaum** suchen und importieren

## Dieses Projekt bearbeiten ![Build Status Abzeichen](https://github.com/r00b1nh00d/weihnachtsbaum/workflows/MakeCode/badge.svg)

Um dieses Repository in MakeCode zu bearbeiten.

* öffne [https://makecode.calliope.cc/](https://makecode.calliope.cc/)
* klicke auf **Importieren** und dann auf **Importiere URL**
* füge **https://github.com/r00b1nh00d/weihnachtsbaum** ein und klicke auf Importieren

## Blockvorschau

Dieses Bild zeigt den Blockcode vom letzten Commit im Master an.
Die Aktualisierung dieses Bildes kann einige Minuten dauern.

![Eine gerenderte Ansicht der Blöcke](https://github.com/r00b1nh00d/weihnachtsbaum/raw/master/.github/makecode/blocks.png)

#### Metadaten (verwendet für Suche, Rendering)

* for PXT/calliopemini
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
