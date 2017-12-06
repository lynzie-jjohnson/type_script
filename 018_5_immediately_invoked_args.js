//Function Expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Lynzie', 'Johnson'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Rudy', 'Gobert');
//# sourceMappingURL=018_5_immediately_invoked_args.js.map