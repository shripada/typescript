const assert = require('assert');

function greet(
  person: string,
  message: string,
  emojeeCount: number,
  shouldCapitalisePerson: boolean
) {
  assert(typeof person === 'string' && person !== '');

  const emojees = '🎉'.repeat(emojeeCount);
  const capitalisedName = shouldCapitalisePerson
    ? person.toUpperCase()
    : person;
  console.log(`Hi ${capitalisedName}! ${message} ${emojees}`);
}

greet('john', 'Welcome to typescript', 5, true);
greet('go', 'Welcome', 5, true);
// greet(10, 'Welcome to typescript', 5, true);
// greet();
