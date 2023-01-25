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

if (Object.keys(coder).length === 0) {
  console.log("DECODE FAIL AT INDEX 0");
} else {
  const str = readline();
  let countStart = 0;
  let res = "";

  console.error(str);

  let hasError = false;

  while (countStart < str.length || !hasError) {
    let countEnd = countStart;
    let letterFound = false;
    // console.log({countStart, countEnd})
    while (letterFound === false || !hasError) {
      let letter = coder[str.substring(countStart, countEnd)];
      if (letter) {
        res += letter;
        letterFound = true;
        countStart += countEnd - countStart;
        console.error(countStart);
      } else {
        if (countEnd > str.length + 1) {
          hasError = true;
          console.log("DECODE FAIL AT INDEX " + countStart);
        } else {
          countEnd++;
        }
      }
    }
  }

  if (!hasError) console.log(res);
}
