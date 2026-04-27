/*Section 1 

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function first() {
  return sleep(300).then(() => { console.log('message 1'); });
}

function second() {
  return sleep(100).then(() => { console.log('message 2'); });
}

function third() {
  return sleep(200).then(() => { console.log('message 3'); });
}

function secondWithError() {
  return sleep(100).then(() => { throw new Error("catch me if you can"); });
}

first()
  .then(() => second())
  .then(() => third());

first()
  .then(() => secondWithError())
  .catch((error) => {
    console.error(error.message);
  })
  .then(() => third());*/


/*
// Section 2

function getHumanSpecies() {
  return fetch('https://swapi.py4e.com/api/species/1/')
    .then(response => response.json());
}

function getFirstHumanCharacter() {
  return getHumanSpecies()
    .then(species => fetch(species.people[0]))
    .then(response => response.json());
}

function getAllPeopleNamesFromSpecies() {
  return getHumanSpecies()
    .then(species => {
      const peoplePromises = species.people.map(url => {
        return fetch(url).then(response => response.json());
      });

      return Promise.all(peoplePromises);
    })
    .then(people => {
      people.forEach(person => {
        console.log(person.name);
      });
    });
}

getHumanSpecies().then(species => {
  console.log("Espèce :", species.name);
});

getFirstHumanCharacter().then(character => {
  console.log("Premier personnage :", character.name);
});

getAllPeopleNamesFromSpecies();

*/


// section 3

function waitForUserChoice() {
  return new Promise((resolve, reject) => {
    const okBtn = document.getElementById("okBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    okBtn.addEventListener("click", () => resolve("Ok clicked"), { once: true });
    cancelBtn.addEventListener("click", () => reject("Cancel clicked"), { once: true });
  });
}

waitForUserChoice()
  .then((message) => console.log(message))
  .catch((message) => console.log(message));