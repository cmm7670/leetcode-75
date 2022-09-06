// https://leetcode.com/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    // Break s and t up into arrays
    const sArray = s.split('');
    const tArray = t.split('');
    let thisFoundIdx = -2;
    let lastFoundIdx = -2;

    console.log(sArray, tArray);

    // Compare the first char in s to the full array of t
    for(x = 0; x < sArray.length; x++) {
        thisFoundIdx = tArray.indexOf(sArray[x]);
        // console.log(`this: ${thisFoundIdx}`);
        // console.log(`last: ${lastFoundIdx}`);
        if(thisFoundIdx == -1) {return false};

        if(thisFoundIdx < lastFoundIdx) {
            return false;
        }
        lastFoundIdx = thisFoundIdx;
    }
    return true;
    // If found, record the index of the first instance in a new array
    // Compare the next char in s to the full array of t
    // If found, record the index of the first full instance in the new array
    // If not found, return false
    // Check that the numbers in the array are in ascending order and return false if not
    // ...
    // Return true if false is never returned

    // Don't need an array, just hold on to the last letter's position 
    // and check against the next one

};

console.log(isSubsequence("abc", "azbyc"));
console.log(isSubsequence("zba", "azbyc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));