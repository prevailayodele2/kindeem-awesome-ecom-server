const Jimp = require('jimp')
const path = require('path')

//should be async or sync?
module.exports = async (
    filename,
    size,
    filepath,
    destination,
    foldername
) => {
    await Jimp.read(filepath)
        .then(async (image)  => {
            await image.resize(size, Jimp.AUTO)
                .write(path.resolve(destination, `${foldername}`, filename))
        })
        .catch(async (err) => {
            await image.resize(size, Jimp.AUTO)
                .write(path.resolve(destination, `${foldername}`, filename))
        });
    return `${foldername}/${filename}`;
};