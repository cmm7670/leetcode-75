// https://leetcode.com/problems/is-subsequence/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    const sArray = s.split('');
    let tArray = t.split('');
   
    for(x = 0; x < sArray.length; x++) {
        const foundIndex = tArray.indexOf(sArray[x]);
        if(foundIndex == -1) { return false; }
        tArray = tArray.slice(foundIndex + 1);
    }
    return true;
};