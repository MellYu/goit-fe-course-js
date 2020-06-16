import {users} from './users.js';



// Task-01
const getUserNames = users => (users.map(users => users.name));
  
  console.log(getUserNames(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]



// Task-02
  const getUsersWithEyeColor = (users, color) => users.filter(users => color === users.eyeColor);
  
  console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]



// Task-03
  const getUsersWithGender = (users, gender) => users.filter(users => gender === users.gender).map(users => users.name);
  
  console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]



  // Task-04
  const getInactiveUsers = users => users.filter(user => !user.isActive);
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]



  // Task-05
  const getUserWithEmail = (users, email) => users.find(users => users.email === email);
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}



// Task-06
const getUsersWithAge = (users, min, max) => users.filter(users => users.age > min && users.age < max);
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
  
  console.log(getUsersWithAge(users, 30, 40));
  // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]



  // Task-07
  const calculateTotalBalance = users => users.reduce(( total, users) => total + users.balance, 0)
  
  console.log(calculateTotalBalance(users)); // 20916




// Task-08
const getUsersWithFriend = (users, friendName) => users.filter(users => users.friends.includes(friendName)).map(users => users.name);
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]




// Task-09
const getNamesSortedByFriendsCount = users => users.sort((userFirst, userSecond) => userFirst.friends.length - userSecond.friends.length).map(users => users.name);
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]



// Task-10
const getSortedUniqueSkills = users => {
    // твой код
    const skills = users.reduce((arr, users) => [...arr, ...users.skills],[]);
    const allSkills = [];
    skills.forEach(skill => {
        if(!allSkills.includes(skill)) allSkills.push(skill);
     })
     return allSkills.sort();
  };
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]