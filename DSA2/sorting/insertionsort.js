function insertionSort(arr){
    for(let i=0; i<arr.length; i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j] > key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
}
let arr = [4,2,3,1,5]
console.log(arr)
insertionSort(arr)
console.log(arr)
