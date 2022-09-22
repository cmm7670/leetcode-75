/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const validChars = "()[]{}".split('');
    const sArray = s.split('');
    let bArray = [];

    let sArrayCleaned = sArray.filter(item => validChars.includes(item));

    if(sArrayCleaned.length % 2 || sArrayCleaned.length == 0) {
        return false;
    }

    for(x=0; x<sArrayCleaned.length; x++) {
        if(sArrayCleaned[x] == '(' || sArrayCleaned[x] == '[' || sArrayCleaned[x] == '{') {
            bArray.push(sArrayCleaned[x]);
        }
        if(sArrayCleaned[x] == ')' || sArrayCleaned[x] == ']' || sArrayCleaned[x] == '}') {
            const searchCharPosition = validChars.indexOf(sArrayCleaned[x]) - 1;
            const compareChar = bArray.pop();
            if(validChars[searchCharPosition] != compareChar) {
                return false;
            }
        }
    }
    if(bArray.length > 0) {
        return false;
    }
    return true;
};