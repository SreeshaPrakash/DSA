function merge(arr){

    if(arr.length<2){
        return arr;
    }

    let mid = Math.floor(arr.length/2)
    let left = arr.slice(0,mid);
    let right = arr.slice(mid)
    return mergeSort(merge(left), merge(right))
}

function mergeSort(left, right){
    let sorted = [];

    while(left.length && right.length){

        if(left[0] <= right[0]){
            sorted.push(left.shift())
        } else {
            sorted.push(right.shift())
        }
    }
    return [...sorted, ...left, ...right]
}

let arr = [4,2,3,1,5]
console.log(arr)
console.log(merge(arr));
