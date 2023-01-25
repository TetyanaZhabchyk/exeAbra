const n = parseInt(readline());

const errorStartMessage = "% Error at ";
const errorEndMessage = "%";

let coder = {};

for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  const b = inputs[0];
  const c = parseInt(inputs[1]);

  console.error(b + " -> " + c);
  console.error(b + " -> " + String.fromCharCode(c));

  coder[b] = String.fromCharCode(c);
}
console.error(coder);

const str = readline();
let countStart = 0;
let res = "";

console.error(str);

while (countStart < str.length) {
  let countEnd = countStart;
  let letterFound = false;
  // console.log({countStart, countEnd})
  while (letterFound === false) {
    let letter = coder[str.substring(countStart, countEnd)];
    if (letter) {
      res += letter;
      letterFound = true;
      countStart += countEnd - countStart;
      console.error(countStart);
    } else {
      countEnd++;
    }
  }
}

console.log(res);
