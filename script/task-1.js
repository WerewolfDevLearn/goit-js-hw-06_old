import users from './users.js';

const getUserNames = users => {
  
  const userName = users.map(user => user.name)
  return userName;

}
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Z
