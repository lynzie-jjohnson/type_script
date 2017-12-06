// function fullName (first: string, last: string) {
//     return ...
// }

// fullName('Lynzie','Johnson');

var names : string [] = ['Lynzie', 'Rudy', 'Donovan'];
var counter : number = 0;

(function() {
    for (let name in names) {
        counter++;
    }
})();

console.log(counter);
