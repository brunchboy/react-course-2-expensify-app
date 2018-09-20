// Object destructuring
const person = {
  name: 'James',
  stars: 466,
  location: {
    homeTown: 'Madison',
    temp: 70
  }
};

const { name: firstName = 'Anonymous', stars } = person;
// const name = person.name;
// const stars = person.stars;
const {
  location: { homeTown, temp: temperature }
} = person;

console.log(`${firstName} has ${stars} stars.`);
if (homeTown && temperature) {
  console.log(`It's ${temperature}° in ${homeTown}.`);
}

const book = {
  title: 'Neptune’s Brood',
  author: 'Charles Stross',
  publisher: { name: 'Penguin' }
};

const {
  publisher: { name: publisherName } = { name: 'self-published' }
} = book;

console.log(publisherName);

// Array destructuring
const address = ['1299 S Juniper St', 'Troy', 'New York', '12180'];
const [, city, state = 'Unknown'] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item;
console.log(`A ${itemName} costs ${mediumPrice}`);
