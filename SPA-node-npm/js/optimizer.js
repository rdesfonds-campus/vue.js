const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');

(async () => {
    const files = await imagemin(['images/*.png'], {
        destination: 'output',
        plugins: [
            imageminPngquant()
        ]
    });

    console.log('Images optimisées avec succès !');
})();