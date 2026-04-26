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