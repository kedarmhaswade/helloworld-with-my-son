console.time("insert");
var a = [1, -1, 2, -2, 3]

for (var i = 1; i < a.length; i++) {
  for (var j = i - 1; a[j] > a[i]; j--) {
    var temp = a[i];
    a[i] = a[j];
    a[j] = temp;
    i--;
  }
}

console.log(a);
console.timeEnd("insert");
