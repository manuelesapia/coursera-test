var x = 4,
  y = 4;

if (x === y) {
  console.log("x='4' is equal to y=4");
} else {
  console.log("is NOT equal to y=4");
}

function a() {
  return {
    name: "manuele",
  };
}

console.log(a());

//for loop

var sum = 0;

for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}

console.log("sum of 0 till 9 is : " + sum);
