// javascript function to find factorial of a non negative-number
//with recursive method
function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
    }
}

let n = 4;
answer = factorial(n)
console.log("The factorial of " + n + " is " + answer);