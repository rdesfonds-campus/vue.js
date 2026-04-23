# Notes sur les exercices

## exercice 1: variables

var
→ Ancienne syntaxe, à éviter dans du nouveau code. Problèmes de portée, comportement parfois surprenant.

let
→ On l'utilise quand la variable est amenée à changer de valeur : compteur, index de boucle, état qui évolue ( age, score, etc.).

const
→ On l'utilise quandon ne réaffecte pas la variableaprès sa première valeur.
→ Ça marche très bien pour des valeurs « fixes » : une constante mathématique, une clé d'API, une chaîne qui ne bougea pas, etc.

## exercice 2 : Fonctions

### 2.1 – Fonctions simples

Dans cet exercice, je prends des fonctions écrites à l'ancienne et je les passe en fonctions fléchées, sans changer ce qu'elles font.

Je pars de quelque chose comme :


const f = function(a, b) {
  // ...
};
et je le transforme en :


const f = (a, b) => {
  // ...
};
L'idée à retenir pour moi :

Quand je vois const maFonction = function(...) { ... }, je peux l'écrire en plus moderne avec (...) => { ... }.
Ici, c'est surtout une question de syntaxe plus courte, le comportement reste le même.

### 2.2 – this dans un objet
Dans cet exercice, je regarde ce que vaut this à l'intérieur d'une méthode d'objet et je vois que ça change selon que j'utilise function()ou une fonction flèche.

Avec :


showThis: function() {
  console.log(this);
}
quand j'appelle object.showThis(), thisreprésente l'objet object.

Avec :


showThis: () => {
  console.log(this);
}
quand j'appelle object.showThis(), thisne représente plus l'objet, mais le contexte global (dans le navigateur, window).

L'idée à retenir pour moi :

Dans un objet, function() {}et () => {}ne sont pas équivalents.
Si j'ai besoin que thisdésigner l'objet lui-même, je dois garder une fonction classique, pas une fonction flèche.

### 2.3 – Application avec Odile
Dans cet exercice, j'applique tout ça à un objet odile: je lui ajoute des fonctions qui utilisent ses propres données (nom, âge).

Je crée un objet :


const odile = {
  name: { first: 'Odile', last: 'Crok' },
  age: 23,
  // sayHello: ...
  // sayMyName: ...
  // sayMyAge: ...
};
Puis je lui ajoute des méthodes du style sayHello, sayMyName, sayMyAge, et je les appelle ensuite avec odile.sayHello(), etc.

L'idée à retenir pour moi :

Un objet peut contenir des donnéesetdes fonctions.
Quand je mets une fonction dans un objet, ça devient une méthode qui peut utiliser les infos de cet objet ( name, age, etc.).

## exercice 3 : objects

### 3.1 –Object.keys
Dans cet exercice, je veux afficher toutes les informations d'un objet bus sous la forme clé valeur(par exemple id 3221).

Object.keys(bus)me renvoyer un tableau contenant toutes les clés de l'objet bus, par exemple ['vehicle', 'id', 'line', 'paint', 'garage', 'equipments'].

Je fais ensuite une boucle sur ces clés, et pour chaque clé je récupère la valeur avec bus[key].

Je peux me souvenir de ça avec ce modèle :


const keys = Object.keys(monObjet);

keys.forEach((key) => {
  console.log(key, monObjet[key]);
});
Idée à retenir :

Object.keys(obj)me donne la liste des noms de propriétés, et avec cette liste je peux afficher dynamiquement clé valeursans écrire chaque propriété à la main.

### 3.2 – Parcourir un tableau d'objets
Dans cet exercice, data est un tableau d'objets (les perturbations du réseau). Je dois afficher, pour chaque perturbation, son champion texte.

Je fais simplement une boucle sur le tableau :


data.forEach((item) => {
  console.log(item.texte);
});
Idée à retenir :

Quand j'ai un tableau d'objets, je peux utiliser forEach pour passer sur chaque objet, puis accéder à la propriété qui m'intéresse ( item.texte, item.id, etc.).

Object.keys(bus) → tableau des clés de bus.
Object.values(data) → tableau des valeurs (ici : les perturbations) de data.

## exercice 4 destructuring

Je peux sortir des valeurs d'un tableau avec :


const [a, b] = [1, 2, 3];
Je peux sortir des propriétés d'un objet avec :


const { first, last } = person;
Quand j'ai un gros objet avec des clés dynamiques (comme SEM_10427), j'utilise :


const perturbations = Object.values(data);
pour obtenir un tableau exploitable.

Ensuite, pour chaque perturbation, je peux déstructurer directement les champs utiles :


perturbations.forEach(({ texte, dateDebut, dateFin }) => {
  console.log(texte, dateDebut, dateFin);
});

## exercice 5 - import
