function selectionSort(arr){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(i !== minIndex){
            [arr[i], arr[minIndex]]  = [arr[minIndex], arr[i]]
        }
    }
}

let arr = [4,2,3,1,5]
console.log(arr);
selectionSort(arr)
console.log(arr);

