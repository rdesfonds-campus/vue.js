/* Section 1
async function main() {
  console.log("- 1 - START of main function");

  try {
    const response = await fetch('https://swapi.dev/api/species/1/');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  console.log("- 2 - BEFORE await");
  await new Promise(resolve => setTimeout(resolve, 10));
  console.log("- 3 - AFTER await");

  console.log("- 4 - END of main function");
}

console.log("= a = BEFORE main call");
main();
console.log("= b = AFTER main call");
*/

// section 2
async function getHumanSpecies() {
  const response = await fetch("https://swapi.py4e.com/api/species/1/");
  const species = await response.json();
  return species;
}

async function getFirstHumanCharacter() {
  const species = await getHumanSpecies();
  const response = await fetch(species.people[0]);
  const character = await response.json();
  return character;
}

async function getAllPeopleNamesFromSpecies() {
  const species = await getHumanSpecies();

  const peoplePromises = species.people.map((url) => fetch(url));
  const responses = await Promise.all(peoplePromises);

  const jsonPromises = responses.map((response) => response.json());
  const people = await Promise.all(jsonPromises);

  people.forEach((person) => {
    console.log(person.name);
  });
}

async function main() {
  console.log("= main start =");

  const species = await getHumanSpecies();
  console.log("Espèce :", species.name);

  const character = await getFirstHumanCharacter();
  console.log("Premier personnage :", character.name);

  await getAllPeopleNamesFromSpecies();

  console.log("= main end =");
}

console.log("= a = BEFORE main call");
main();
console.log("= b = AFTER main call");