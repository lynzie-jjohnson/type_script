@detailedLog('billing')
class AccountsPayable {
    constructor() {}

    deleteAccount() {
        console.log('Deleting Account...');
    }
}

function detailedLog(dashboard : string) {
    if(dashboard == 'billing '){
        console.log('Working in the billing department');
        return function (target : Object) {};
    } else {
        return function (target : Object) {};
    }
}

function admin(target : Object, propertyKey : string, descriptor : TypedPropertyDescriptor<any>) : any {
    console.log("Doing admin check");
    return descriptor;
}

var post = new AccountsPayable;
post.deleteAccount();