//recursion should always have base case



// //1. sum of array 
// function sum(arr){
//     if(arr.length === 0 )return 0;

//     return arr[0] + sum(arr.slice(1))
// }
// let arr = [1,2,3,4]
// console.log(sum(arr))

// //2. reverse a string
// function reverse(str){
//     if(str.length < 2) return str;

//     return  reverse(str.slice(1)) + str[0]
// }
// // let str = ''
let str = 'hello world'
// console.log(reverse(str));



// //3.binary search
// function search(arr, target){
//     return  recursiveBinary(arr, target, 0, arr.length-1)
// }

// function recursiveBinary(arr, target, left, right){
//     if(left > right) return -1;

//     let mid = Math.floor((left + right)/2)

//     if(arr[mid] === target){
//         return mid;
//     } else if(arr[mid] <= target){
//         return recursiveBinary(arr,target, mid+1, right);
//     } else {
//         return recursiveBinary(arr, target, left, mid-1)
//     }
// }
// let arr = [1,2,3,4,5,6,7]
// console.log(search(arr, 5))


//4.fibonacci series
function fibonacci(n){
    if(n==0) return 0;
    if(n==1) return 1;
    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(-2));



// //5. find factorial of a number
// function factorial(n){
//     if(n<0) return "factorial doesn't exist";
//     if(n== 0 ) return 1;

//     return n*factorial(n-1)
// }
// console.log(factorial(-1));





// //6.fibonacci series
// function fibonacci(n){
//     if(n==0) return 0;
//     if(n==1) return 1;
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(-2));









