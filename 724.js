/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    for( x = 0; x < nums.length; x++ ) {
        const leftSum = nums.slice(0, x).reduce((prev, curr) => { return prev + curr }, 0);
        const rightSum = nums.slice(x + 1).reduce((prev, curr) => { return prev + curr }, 0);
        if(leftSum == rightSum) { return x };
    }
    return -1;
};

console.log(pivotIndex([1, 3, 5, 4, 2, -14]))
console.log(pivotIndex([1, 3, 5, 4, 2, 7]))