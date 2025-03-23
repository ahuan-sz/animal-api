const AnimalApi = require('./lib/index').default;

AnimalApi.getDog()
  .then(dog => {
    console.log(dog);
  });
