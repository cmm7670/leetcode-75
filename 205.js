//20220902: the uncommented test is returning false instead of true



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
        const newObj2 = {[tCodes[x]]: `${sCodes[x]}`};
        // console.log(newObj[sCodes[x]])
        // console.log(`t: ${tCodes[x]}`)
        console.log(newObj1);
        console.log(newObj2);
        if([sCodes[x]] in test && test[sCodes[x]] != tCodes[x]) {
            return false;
        }
        if([tCodes[x]] in test && test[tCodes[x]] != sCodes[x]) {
            return false;
        }
        // This is checking whether tCodes[x] already exists as a property value in the object.
        // If it does exist I need to find which property in the object has that value,
        // and see if sCodes[x] is the same. If not return false.
        // if(Object.values(test).includes(tCodes[x])) {
        //     return false;
        // }

        // console.log(newObj);
        test = {...test, ...newObj1, ...newObj2};
        // console.log(test);
    }

    return true;

    // console.log(Object.keys(test).length);
    // for(const prop in test) {
    //     for(x=0; x<Object.keys(test).length; x++) {

    //         // if((JSON.stringify(test[x]) != JSON.stringify(test[y])) && (test[x][0] == test[y][0] || test[x][1] == test[y][1])) {
    //         //     return false;
    //         // }
    //     }
    // }

    // let sCodes = s.split('');
    // let tCodes = t.split('');
    // let test = [];

    // for(x=0; x < s.length; x++) {
    //     test[x] = [sCodes[x], tCodes[x]]
    // }

    // for(x=0; x < test.length; x++) {
    //     for(y=0; y < test.length; y++) {
    //         if((JSON.stringify(test[x]) != JSON.stringify(test[y])) && (test[x][0] == test[y][0] || test[x][1] == test[y][1])) {
    //             return false;
    //         }
    //     }
    // }
    // return true;
};

// console.log(isIsomorphic('badc', 'baba'));
console.log(isIsomorphic('paper', 'title')); // Returns false instead of true
// console.log(isIsomorphic('geed', 'rwtt'));
// console.log(isIsomorphic('abab', 'dede'));