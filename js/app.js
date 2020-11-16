// function 1
function function1(a,b) {
    return(a + b) *5
}

// function 2
function function2(string) {
    if(string.length > 10) {
        return true;
    } else if(string.length <= 10) {
        return false;
    } else {
        console.log("error");
    }
}
// function 3
function function3(arrayOfString) {
    for(var i = 0; i < arrayOfString.length; i ++) {
        if(arrayOfString[i].startsWith("ph")){
            return function3[i];
        }
    }
    return "none";
}
// function 1
console.log(function1(5,2));
console.log(function1(3,2));
console.log(function1(7,2));
// function 2
console.log(function2("Name"));
console.log(function2("MyFullNameIs"));
console.log(function2("MyFullName"));
// function 3
console.log(function3(["phill", "fill"]));
console.log(function3(["sally", "bill"]));
console.log(function3(["phat", "fat"]));
