const today = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(today.toLocaleDateString("ja-JP", options));