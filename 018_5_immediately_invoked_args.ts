//Function Expression
var fullName : (first : string, last : string) => string;

fullName = function(first : string, last : string){
    return first + " " + last;
}

console.log(fullName('Lynzie', 'Johnson'));

// Immediately invoked version

(function(first : string, last : string){
    console.log(first + " " + last);
}) ('Rudy', 'Gobert');