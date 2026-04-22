// 4.1 Découverte

const [a, b] = [1, 2, 3, 4];
console.log(a);
console.log(b);

const { first, last } = { first: 'Paul', last: 'Henta', age: 35 };
console.log(first);
console.log(last);


// 4.2 Application

// Transformer l'objet data en tableau de perturbations
const perturbations = Object.values(data);

// Pour chacune, récupérer texte, dateDebut, dateFin
perturbations.forEach(({ texte, dateDebut, dateFin }) => {
  console.log(texte, dateDebut, dateFin);
});
