const n = parseInt(readline());
let coder = [];
for (let i = 0; i < n; i++) {
  var inputs = readline().split(" ");
  const b = inputs[0];
  const c = parseInt(inputs[1]);

  //console.error({b, c}
  console.error(String.fromCharCode(c) + " -> " + b);
  // on créer une table qui va permettre à chaque lettre
  //d'avoir son code
  coder[String.fromCharCode(c)] = b;
}
console.error(coder);
