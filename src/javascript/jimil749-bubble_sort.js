// function to sort an array using bubble sort

function swap(arr, firstIndex, secondIndex) {
    var tmp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tmp;
}

function bubble_sort(arr) {
    var len = arr.length, i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop=len-i; j < stop; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}

console.log(bubble_sort([8,6,3,10,7]));