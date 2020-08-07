// var array = new Array();
// array[0] = "Manuel";
// array[1] = 2;
// array[2] = function (name) {
//     console.log("hello" + name);
// };
// array[3] = {
//     course: "html css js"
// };

// console.log(array);


// var names = ["dav", "manuel", "david"];
// //console.log(names);

// for (var i = 0; i < names.length; i++) {
//     console.log("hello " + names[i]);
// }

var names2 = ["jack", "manuel", "david"];

// var myObj = {
//     name: "manuel",
//     course: "gfgfgg css js",
//     platform: "online"
// }

// for (var prop in myObj) {
//     console.log(prop + ": " + myObj[prop]);
// }


for (var name in names2) {
    console.log("hello " + names2[name]);
}





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