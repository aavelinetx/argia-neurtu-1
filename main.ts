basic.forever(function () {
    if (input.lightLevel() < 50) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    }
})
basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.showString("EGUN ON")
    }
})
