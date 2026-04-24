// 4.1 Découverte

const [a, b] = [1, 2, 3, 4];
console.log(a);
console.log(b);
//affichera a et b et ignorera les autres éléments du tableau

const { first, last} = { first: 'Paul', last: 'Henta', age: 35 };
console.log(first);
console.log(last);
//le console log affichera les clés first et last et ignorera age


// 4.2 Application

// Transformer l'objet data en tableau de perturbations
const perturbations = Object.values(data);


// Pour chacune, récupérer texte, dateDebut, dateFin
perturbations.forEach(({ texte, dateDebut, dateFin }) => {
  console.log(texte, dateDebut, dateFin);
});

// 4.3 – Destructuring des paramètres d'une fonction
function addPerturbation({
  id,
  texte,
  dateDebut,
  dateFin,
  type = 'info',
  heureDebut = '00:00:00',
  heureFin = '23:59:59',
  latitude = -1,
  longitude = -1
}) {
  data[id] = {
    id,
    texte,
    dateDebut,
    dateFin,
    type,
    heureDebut,
    heureFin,
    latitude,
    longitude
  };
}

// 4.4 – Fonction avec opérateur rest (...)
function logAll(...args) {
  console.log(args);
}

logAll(1, 'a', true);