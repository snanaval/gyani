const tailwindcss = require('tailwindcss');
/* autoprefixer grid: off */
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ],
};