const handleJSON = (jsonString, saveToFile = null) => {
  // Feel free to use console.log() for debugging purposes
  // console.log(jsonString)
  // Normalize strings
  const jsonObject = JSON.parse(JSON.stringify(jsonString));

  jsonObject.username = normalize(jsonObject.username);
  jsonObject.filename = normalize(jsonObject.filename);

  // Here is an example usage of saveToFile function
  // saveToFile("username", "filename", `{"good":"luck"}`)n
  return jsonObject;
};

const normalize = (text) => {
  text = text.normalize("NFD").replace(/\p{Diacritic}/gu, "");
  text = text.trim();
  text = text.replace(" ", "_");
  return text;
};

const aja = { username: "señor Gonzales", filename: "bÜk.txt", author: "adam" };
const aja2 = {
  username: "señor Andrés ",
  filename: "ADA f.txt  ",
  author: "adam ",
};
console.log(handleJSON(aja));
console.log(handleJSON(aja2));
