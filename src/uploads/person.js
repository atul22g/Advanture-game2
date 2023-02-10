import { mergeImg, anims } from "../func/personfunc"
const AddPerson = () => {
    const playerAnims = {
        player: anims
    };

    const corpusAnims = {
        corpus: anims
    };
    loadSpriteAtlas("sprites/person/spritemerge_corpus.png", corpusAnims)
    mergeImg(["sprites/person/spritemerge_corpus.png", "sprites/person/spritemerge_chest.png"]).then((img) =>
        loadSpriteAtlas(img, playerAnims)
    );

}

module.exports = { AddPerson }