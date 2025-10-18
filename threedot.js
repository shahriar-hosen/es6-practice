const ages = [12, 14, 16, 18]
const ages2 = [11, 13, 15, 19]
const ages3 = [1, 2, 3, 4]
const allages = ages.concat([20]).concat(ages2)
const allages2 = [...ages, ...ages2, 5, ...ages3]
console.log(Math.min(...ages))