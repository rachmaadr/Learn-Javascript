const names = ["Rachmad", "Rama", "Dhani", "Rizky", "Hilmy"];
const [firstName, middleName, ...others] = names;

console.info(firstName);
console.info(middleName);
console.info(others);
