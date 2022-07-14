const { color } = require('../cjs');

console.log(color.fg.red('red text'));
console.log(color.bg.red('red bg'));
console.log(color.underline(color.fg.green('green text with underline')));


// combine effects to create something like "pink"
console.log(color.fg.purple(color.bright('pink text')));


console.log(color.fg.purple(color.bg.yellow('purple text yellow bg')))
