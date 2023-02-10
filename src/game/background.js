import { AddMap } from "../uploads/Map1"
import { AddPerson } from "../uploads/person"
const addBackground = () => {
    // Variables
    let SPEED = 120

    AddMap()
    AddPerson()
    // Map
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
        "      l",
    ], {
        width: 16,
        height: 16,
        // ✔  Tree
        "T": () => [
            sprite("BGT"),
            area(),
        ],
        // ✔ Masroom
        "m": () => [
            sprite("Masroom"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        // ✔ land
        "l": () => [
            sprite("land"),
            area({ height: 4, offset: vec2(0, 12) }),
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
        // flower
        "F": () => [
            sprite("flower"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        // Grass2
        "v": () => [
            sprite("grass2"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        // Grass3
        "*": () => [
            sprite("grass3"),
            area({ height: 4, offset: vec2(0, 12) }),
            solid(),
        ],
        // ground
        "[": () => [
            sprite("ground"),
            area({ height: 4, offset: vec2(0, 12) }),
            // solid(),
        ],
    })


    // Add Player
    const player = add([
        sprite('player'),
        pos(map.getPos(2, 2)),
        area({ width: 12, height: 12, offset: vec2(0, 6) }),
        solid(),
        origin("center"),
    ])

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