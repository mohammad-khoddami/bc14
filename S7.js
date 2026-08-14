var array = [5, 8, 4, 5, 12, 18, 12, 22, 5];
for (var i = 0; i < array.length; i++) {
  var number = array[i];
  var count = 0;
  var isRepeat = false;
  for (var k = 0; k < i; k++) {
    if (array[k] === number) {
      isRepeat = true;
    }
  }
  if (isRepeat === true) {
    continue;
  }
  for (var j = 0; j < array.length; j++) {
    if (array[j] === number) {
      count++;
    }
  }
  console.log(number + ":" + count);
}
