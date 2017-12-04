// Boolean
let paidAccount : boolean = false;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Lynzie Johnson"

// Array

var ages : number [] = [18, 1, 50];

// Tuple
let player : [number, string];
player = [27, 'Gobert'];

// Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job : ApprovalStatus = ApprovalStatus.Pending;

// Any

var apiData : any[] = [123, 'Lynzie', false];

// Void
function printOut(msg: string) : void {
    console.log(msg);
}
