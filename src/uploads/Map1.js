const AddMap = () => {
    loadSpriteAtlas("sprites/Maps/map.png", {
        // (x) left - right
        // (y) top - bottom
        // ✔🌲Tree
        "BGT": {
            "x": 275,
            "y": 135,
            "width": 63,
            "height": 63
        },
        // ✔ Mashrom
        "Masroom": {
            "x": 340,
            "y": 130,
            "width": 63,
            "height": 63
        },
        // ✔ land
        "land": {
            "x": 74,
            "y": 0,
            "width": 52,
            "height": 58.5
        },
        // Grass
        "grass": {
            "x": 320,
            "y": 0,
            "width": 70,
            "height": 68
        },
        // Small Grass
        "sGrass": {
            "x": 320,
            "y": 70,
            "width": 70,
            "height": 65
        },
        // // Masroom
        // "Masroom": {
        //     "x": 320,
        //     "y": 123.5,
        //     "width": 70,
        //     "height": 68
        // },
        // flower
        "flower": {
            "x": 128,
            "y": 0,
            "width": 30,
            "height": 40
        },
        // Grass2
        "grass2": {
            "x": 50,
            "y": 25,
            "width": 50,
            "height": 10
        },
        // Grass3
        "grass3": {
            "x": 100,
            "y": 30,
            "width": 30,
            "height": 30
        },
        // Ground
        "ground": {
            "x": 0,
            "y": 73,
            "width": 186,
            "height": 174
        },
    })
}

module.exports = { AddMap }