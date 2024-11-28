// Salutare in console con il nome dato
const argoments = process.argv;
console.log(argoments);
const list = argoments.slice(2);
console.log(list);

list.forEach(item => {
  console.log(item);
  
})

console.log("Ciao");
