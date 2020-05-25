import users from './users.js';
console.log(users)

const getUsersWithGender = (users, gender) => {
 const usersWithGender = users.filter(user =>user.gender===gender)
 .map(user => user.name)
   
 
 return usersWithGender;
};

console.log(getUsersWithGender(users, 'male'));

// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]