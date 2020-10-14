// function to sort an array using selection sort
function selectionSort(array) {
    let newArray = [...array];
    
    let min = 0;
    for (let i = 0; i < newArray.length - 1; i++) {
        for(let j = i + 1; j < newArray.length; j++) {
            if (newArray[min] > newArray[j]) {
                min = j;
            }
        }

        const temp = newArray[i];
        newArray[i] = newArray[min];
        newArray[min] = temp;
    }

    return newArray;
}
