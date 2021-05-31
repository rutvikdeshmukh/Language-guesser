var franc = require("franc");
var langs = require("langs");
let str_data = "";
for (let i = 2; i < process.argv.length; i++) {
  str_data = str_data.concat(process.argv[i]);
  str_data = str_data.concat(" ");
}
const code_data = franc(str_data);
console.log(
  "the language of entered text is: ",

  langs.where("3", code_data)?.name
);
