var array = [5, 8, 4, 9, 12, 18, 15, 22, 45];
var even = array[0];
var odd = array[0];
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    if (array[i] > even) {
      even = array[i];
    }
  } else {
    if (array[i] < odd) {
      odd = array[i];
    }
  }
}
console.log(even);
console.log(odd);
