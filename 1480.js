/**
 * @param {number[]} nums
 * @return {number[]}
 */
 let runningSum = function(nums) {
    let sum = 0;
    let answer = nums.map(el => {
        return sum += el;
    });
    return answer;
    // let answer = nums.map((el, idx, arr) => {
    //     for(x = 1; x <= idx; x++) {
    //         el += arr[x-1];
    //     };
    //     return el;
    // });
    // return answer;
};

console.log(runningSum([3,1,2,10,1]));