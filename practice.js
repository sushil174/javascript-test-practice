function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
}

function reverseString(s) {
    return s.split('').reverse().join('')
}

const calculator = (() => {
    add = (a,b) => a+b;
    sub = (a,b) => a-b;
    div = (a,b) => a/b;
    mul = (a,b) => a*b;

    return {
        add,
        sub,
        div,
        mul
    }

})();



function analyzeArray(arr) {
    const sum = arr.reduce((c,i) => c += i,0)
    const l = arr.length
    const average = sum / l
    const min = Math.min(...arr);
    const max = Math.max(...arr)

    return {
        average: average,
        min: min,
        max: max,
        length: l,
    }
}

function handleCapitalLetter(c){
    return (((c-65) % (90-65 + 1)) + 65)
}

function handleSmallLetter(c){
    return (((c-97) % (122 - 97 + 1)) + 97)
}

function caesarCipher(s,n) {
    let ans = ''
    for(let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i)
        if(charCode >= 65 && charCode <= 90) {
            charCode += n
            ans  = ans + String.fromCharCode(
                handleCapitalLetter(charCode)
            )
        }
        else if(charCode >= 97 && charCode <= 122) {
            charCode += n
            ans  = ans + String.fromCharCode(
                handleSmallLetter(charCode)
            )
        }
        else {
            ans = ans + s[i]
        }
    }
    return ans
}

export {capitalize,calculator,reverseString,analyzeArray,caesarCipher}