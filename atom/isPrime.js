var num = 333333331;
var ifPrime=true;
var crossedOutArray = []
var s = Math.sqrt(num);

for (var i = 2; i <= s; i++) {
  if (crossedOutArray.includes(i)) {
    continue;
  }
  if (num%i == 0) {
    console.log (i + " is a factor and the other is: " + (num/i));
    ifPrime = false;
    break;
  }
  for (var j = 1; j <= s/i; j++) {
    crossedOutArray.push(j*i);
  }
}

console.log(num + " is prime? " + ifPrime);
