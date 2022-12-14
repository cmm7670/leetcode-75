/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length != t.length) {
        return false
    };

    let sCodes = s.split('');
    let tCodes = t.split('');
    let test = {};

    for(x = 0; x < sCodes.length; x++) {
        const newObj1 = {[sCodes[x]]: `${tCodes[x]}`};
        console.log(`newObj1: ${JSON.stringify(newObj1)}`);
        if([sCodes[x]] in test && test[sCodes[x]] != tCodes[x]) {
            return false;
        }
        test = {...test, ...newObj1};
        if(Object.values(test).length != [...new Set(Object.values(test))].length) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic('badc', 'baba'));
//console.log(isIsomorphic('paper', 'title')); // Returns false instead of true
// console.log(isIsomorphic('geed', 'rwtt'));
// console.log(isIsomorphic('abab', 'dede'));