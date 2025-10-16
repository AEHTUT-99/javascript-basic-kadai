const today = new Date();
const [month, day, year] = [
  today.getMonth()+1,
  today.getDate(),
  today.getFullYear(),
]
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(year+'年'+month+'月'+day+'日');