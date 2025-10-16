const today = new Date();
const [month, day, year] = [
  today.getMonth(),
  today.getDate(),
  today.getFullYear(),
]
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("ja-JP",options).format(today));