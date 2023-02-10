// Player  Merge 2 img
function mergeImg(urls) {
    let promises = [];
    for (let url of urls) {
        const img = new Image();
        img.src = url;
        img.crossOrigin = "anonymous";
        promises.push(new Promise((resolve, reject) => {
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(`failed to load ${url}`);
            };
        }));
    }
    return new Promise((resolve, reject) => {
        Promise.all(promises).then((images) => {
            const canvas = document.createElement("canvas");

            const width = images[0].width;
            const height = images[0].height;
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext("2d");
            if (ctx) {
                images.forEach((img, i) => {
                    if (img.width === width && img.height === height) {
                        ctx.drawImage(img, 0, 0);
                    }
                });
                resolve(ctx.getImageData(0, 0, width, height));
            } else {
                reject();
            }
        }).catch((error) => reject(error));
    })
}
// animationsettings in Spriteatlas
const anims = {
    x: 0,
    y: 0,
    height: 1344,
    width: 832,
    sliceX: 13,
    sliceY: 21,
    anims: {
        'walk-up': { from: 104, to: 112 },
        'walk-left': { from: 117, to: 125 },
        'walk-down': { from: 130, to: 138 },
        'walk-right': { from: 143, to: 151 },
        'idle-up': { from: 104, to: 104 },
        'idle-left': { from: 117, to: 117 },
        'idle-down': { from: 130, to: 130 },
        'idle-right': { from: 143, to: 143 },
    }
}
module.exports = { mergeImg, anims}