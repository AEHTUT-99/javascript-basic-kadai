const date = new Date(2024,9,12);
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(date.toLocaleDateString("ja-JP",options));
