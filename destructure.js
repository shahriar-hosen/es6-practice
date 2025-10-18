// const person = {name: 'Jay Jack Russow', job: 'political scientist', age: 78, wife: 'Sania Mirza', country: 'Germany', language: 'German', friends: ['Tom Hanks', 'Shane Watson', 'Ricky Poiting', 'Glenn Maxwell']}

// const {friends, age, job, country, salary} = person
// console.log(friends, age, job, country, salary)

// const nayok = ['Sakib Khan', 'Amir Khan', 'Sharukh Khan', 'Salman Khan']
// const sakib = nayok[3]
// console.log(sakib)

const nayok = ['Sakib Khan', 'Amir Khan', 'Sharukh Khan', 'Salman Khan']
const [first, second, ...remaining] = nayok
console.log(first, second)
console.log(remaining)

//Nested Destructuring:
const person = { name: 'Shahriar', address: {
    city: 'Barisal',
    zip: 1207
  }
};
const {city} = person.address
console.log(city); 
