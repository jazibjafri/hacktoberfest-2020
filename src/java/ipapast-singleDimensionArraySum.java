//A function that returns the running sum of an 1D Array

public int singleDimensionArraySum(int num, int[] nums){
    List<Integer> list = new ArrayList<>();
    while(num>=0){
        list.add(nums[num]);
        num--;
    }
    return list.stream().mapToInt(Integer::intValue).sum();
}
