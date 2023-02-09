import { mergeImg, anims } from "./allFunc"
const addBackground = () => {
    // Variables
    let SPEED = 120

    const playerAnims = {
        player: anims
    };

    const corpusAnims = {
        corpus: anims
    };

    loadSpriteAtlas("sprites/person/spritemerge_corpus.png", corpusAnims)
    // load and merge body and leather armor 
    mergeImg(["sprites/person/spritemerge_corpus.png", "sprites/person/spritemerge_chest.png"]).then((img) =>
        loadSpriteAtlas(img, playerAnims)
    );

    loadSpriteAtlas("sprites/map.png", {
        // (x) left - right
        // (y) top - bottom
        // Big green Tree
        "BGT": {
            "x": 260,
            "y": 0,
            "width": 50,
            "height": 128
        },
        // Big green Tree
        "SGT": {
            "x": 260,
            "y": 123.5,
            "width": 50,
            "height": 68
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
        // Masroom
        "Masroom": {
            "x": 320,
            "y": 123.5,
            "width": 70,
            "height": 68
        },
        // flower
        "flower": {
            "x": 128,
            "y": 0,
            "width": 30,
            "height": 40
        },
    })

    // objects
    const map = addLevel([
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "         F",
    ], {
        width: 16,
        height: 16,
        // Tree
        "T": () => [
            sprite("BGT"),
            area(),
            solid(),
        ],
        // Small Tree
        "t": () => [
            sprite("SGT"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        // Grass
        "G": () => [
            sprite("grass"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        // small Grass
        "g": () => [
            sprite("sGrass"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        // Masroom
        "M": () => [
            sprite("Masroom"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        // flower
        "F": () => [
            sprite("flower"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
    })

    const player = add([
        sprite('player'),
        pos(map.getPos(2, 2)),
        area({ width: 12, height: 12, offset: vec2(0, 6) }),
        solid(),
        origin("center"),
    ])


    function spin() {
        let spinning = false
        return {
            id: "spin",
            update() {
                if (spinning) {
                    this.angle += 1200 * dt()
                    if (this.angle >= 360) {
                        this.angle = 0
                        spinning = false
                    }
                }
            },
            spin() {
                spinning = true
            },
        }
    }

    player.play("idle-down")


    // Controls
    onKeyDown('left', () => {
        DIRECTION = 'left';
        switchAnimation('walk');
        player.move(-SPEED, 0)
        // camPos(player.pos)
    })
    onKeyDown('right', () => {
        DIRECTION = 'right';
        switchAnimation('walk');
        player.move(SPEED, 0)
        // camPos(player.pos)
    })
    onKeyDown('down', () => {
        DIRECTION = 'down';
        switchAnimation('walk');
        player.move(0, SPEED)
        // camPos(player.pos)
    })
    onKeyDown('up', () => {
        DIRECTION = 'up';
        switchAnimation('walk');
        player.move(0, -SPEED)
        // camPos(player.pos)
    })


    onKeyRelease(['left', 'right', 'down', 'up'], () => {
        switchAnimation('idle');
    })

    function switchAnimation(type) {
        if (player.curAnim() !== type + '-' + DIRECTION) {
            player.play(type + '-' + DIRECTION, { loop: true });
        }
    }



}

module.exports = { addBackground }