
async function main() {
  console.log("- 1 - START of main function");

  // il n'est pas possible d'utiliser await en dehors d'une fonction async
  // vous devez donc appeler les fonctions que vous allez écrire ci dessous

 fetch('https://swapi.dev/api/species/1/')
  .then(response => response.json())
  .then(data => console.log(data));
  
  console.log("- 2 - BEFORE await");
  await new Promise( resolve => setTimeout(resolve, 10));
  console.log("- 3 - AFTER await");

  console.log("- 4 - END of main function");
}

console.log("= a = BEFORE main call");
main();
console.log("= b = AFTER main call");
