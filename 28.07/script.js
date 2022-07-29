let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} 
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

console.log(a == b);
let c = 10;
console.log(b == c);
console.log(a = b);
let cstr = "10";
console.log(c == cstr);
console.log(c === cstr);

true + true + true === 3;
c = c + 2;
c += 2;

c = c * 2;
c *= 2;

++c;

console.log(c !== Number(cstr));
console.log(c < 100);
console.log(c);

let answer = confirm("Is everything ok?");

///statement - logicals statement (returns true or false)

let statement = true;
let statement2 = false;
if (statement) {
    alert("a is true");
} else {
    alert("a is not true");
};

if (statement) {
    alert("a is true");
    if (statement2) {
        alert("Do something");
    } else {
        alert("Do something else");
    }
}
if (!statement)
    alert("a is not true");
else
    alert("");