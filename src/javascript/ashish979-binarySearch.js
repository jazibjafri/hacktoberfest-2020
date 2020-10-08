// function to search a number in array using binary search

function binarySearch(a, v, i, j){
  if(j >= i){
    let mid = parseInt((i + j)/2);
    if(v === a[mid]){
      return true;
    }
    else if(v < a[mid]){
      return binarySearch(a, v, i, mid - 1);
    }
    else if(v > a[mid]){
      return binarySearch(a, v, mid + 1, j);
    }
  }
  return false;
}


console.log(binarySearch([1,2,3,4,5,6,7], 9, 0, 6));
console.log(binarySearch([1,2,3,4,5,6,7], 4, 0, 6));
