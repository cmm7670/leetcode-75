/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    if (s.length != t.length) {
        return false;
    };

    let sCodes = s.split('');
    let tCodes = t.split('');
    let test = [];

    for(x=0; x < s.length; x++) {
        test[x] = [sCodes[x], tCodes[x]]
    }

    for(x=0; x < test.length; x++) {
        for(y=0; y < test.length; y++) {
            if((JSON.stringify(test[x]) != JSON.stringify(test[y])) && (test[x][0] == test[y][0] || test[x][1] == test[y][1])) {
                return false;
            }
        }
    }
    return true;
};

console.log(isIsomorphic('abab', 'baba'));