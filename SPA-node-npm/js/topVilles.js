const fs = require('fs');

const contenu = fs.readFileSync('villes.json', 'utf-8');
const villes = JSON.parse(contenu);

for (let i = 0; i < 10; i++) {
  const ville = villes[i];
  console.log(`${ville.nom} (${ville.pays}) : ${ville.population} millions d'habitants`);
}