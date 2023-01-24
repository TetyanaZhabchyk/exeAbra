const n = parseInt(readline());

let coder = {};

for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  const b = inputs[0];
  const c = parseInt(inputs[1]);

  console.error(b + " -> " + c);
  //console.error(b + " -> " + String.fromCharCode(c));

  coder[b] = String.fromCharCode(c);
}
console.error(coder);
