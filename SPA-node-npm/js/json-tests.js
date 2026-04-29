const texteJson = '{"nom":"Alice","age":25,"ville":"Lyon"}';

const objetJs = JSON.parse(texteJson);
const texteJsonRegenere = JSON.stringify(objetJs);

console.log(objetJs);
console.log(texteJsonRegenere);