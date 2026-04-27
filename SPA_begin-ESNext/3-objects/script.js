// 3.1 Object.keys

const bus = {
  vehicle: 'Urbanway CNG 12',
  id: 3221,
  line: 'C6',
  paint: 'chrono',
  garage: {
    name: 'Sassenage',
    place: '47'
  },
  equipments: ['sae', 'tft', 'speech']
};

const busKeys = Object.keys(bus);

busKeys.forEach((key) => {
  console.log(key, bus[key]);
});


// 3.2 Object.values

console.log(data);

// 1) Transformer l'objet data en tableau de perturbations
const perturbations = Object.values(data);

// 2) Parcourir ce tableau et afficher le texte
perturbations.forEach((perturbation) => {
  console.log(perturbation.texte);
});

