import gameSavingLoader from './gameSavingLoader';

gameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  console.log(error);
});
