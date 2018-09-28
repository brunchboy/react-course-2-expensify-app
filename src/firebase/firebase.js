import * as firebase from 'firebase/app';
require('firebase/database');

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// const onExpenseRemoved = database
//   .ref('expenses')
//   .on('child_removed', snapshot => {
//     console.log(`removed expense ${snapshot.key}, value" `, snapshot.val());
//   });

// const onExpenseChanged = database
//   .ref('expenses')
//   .on('child_changed', snapshot => {
//     console.log(`changed expense ${snapshot.key}, value:`, snapshot.val());
//   });

// const onExpenseAdded = database.ref('expenses').on('child_added', snapshot => {
//   console.log(`added expense ${snapshot.key}, value:`, snapshot.val());
// });

// const onExpensesChanged = database.ref('expenses').on('value', snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'on-campus dump',
//   amount: 78000,
//   createdAt: 1000
// });

// const onValueChange = database.ref().on(
//   'value',
//   snapshot => {
//     const val = snapshot.val();
//     // console.log('Data received: ', val);
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
//   },
//   e => {
//     console.log('Problem fetching data!', e);
//   }
// );

// database
//   .ref('location/city')
//   .once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log('Problem fetching data!', e);
//   });

// console.log('Requesting save of data.');
// database
//   .ref()
//   .set({
//     name: 'Pantalaimon Belacqua',
//     age: 4,
//     job: {
//       title: 'Pet',
//       company: 'Deep Symmetry, LLC'
//     },
//     isSingle: true,
//     location: {
//       city: 'Madison',
//       country: 'United States'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved.');
//   })
//   .catch(e => {
//     console.log('Problem saving data!', e);
//   });

// database.ref().update({
//   name: 'Fred',
//   age: 29,
//   job: 'Tank',
//   isSingle: null
// });

// database.ref().update({
//   'job/company': 'TCP Software',
//   age: 29,
//   'location/city': 'Boston'
// });

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Private data removed.');
//   })
//   .catch(e => {
//     console.log('Problem removing private data!', e);
//   });

// database.ref('isSingle').set(null);  // Equivalent, but less clear.
