const _ = require("lodash");
let data = {};
const controller = _.throttle(saveToFile, 1000, {
  trailing: true
});

const handleJSON = (jsonString) => {
  // Feel free to use console.log() for debugging purposes
  // console.log(jsonString)
  // Normalize strings
  const jsonObject = JSON.parse(JSON.stringify(jsonString));

  jsonObject.username = normalize(jsonObject.username);
  jsonObject.filename = normalize(jsonObject.filename);
  data = jsonObject;

  // Here is an example usage of saveToFile function
  controller();
  return aja;
};

const normalize = (text) => {
  text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  text = text.trim();
  text = text.replace(" ", "_");
  return text;
};

function saveToFile() {
  console.log(`Saving ${data.username}/${data.filename}`);
}

const aja = { username: "señor Gonzales", filename: "bÜk.txt", author: "adam" };
const aja2 = {
  username: "señor Andrés ",
  filename: "ADA f.txt  ",
  author: "adam "
};
console.log(handleJSON(aja));
setTimeout(() => {
  console.log(handleJSON(aja2));
}, 2000);