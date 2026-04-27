// 5-1 Import

import helloNyan, { hello, showError } from './functions.js';
import { sum, sub, multiply, divide, pow } from './math.js';

// On utilise hello
hello();

// On utilise showError
showError('Une erreur est survenue');

// On utilise la fonction anonyme par défaut (ici renommée helloNyan)
helloNyan();

// 5-2 Export

const [a, b] = [7, 9];

console.log(sum(a, b));
console.log(sub(a, b));
console.log(multiply(a, b));
console.log(divide(a, b));
console.log(pow(a, b));