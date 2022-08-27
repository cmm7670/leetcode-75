/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
    let splitS = s.split('');
    let splitT = t.split('');

    let uniqueS = [...new Set(splitS)];
    let uniqueT = [...new Set(splitT)];

    if (uniqueS.length != uniqueT.length) {return false}

    console.log(uniqueS, uniqueT);

    for(x = 0; x < s.length; x++) {
        s = s.replaceAll(splitS[x], splitT[x])
        console.log(s)
    }
    return s == t;
};

console.log(isIsomorphic('abab', 'baba'));