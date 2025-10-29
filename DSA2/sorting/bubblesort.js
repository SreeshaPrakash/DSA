function bubblesort(arr){
let swapped;
    do{
         swapped = false;
        for(let i=0; i<arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped  = true;
            }
        }
    } while(swapped)
}
let arr = [4,3,2,1,5]
console.log(arr)
bubblesort(arr)
console.log(arr)