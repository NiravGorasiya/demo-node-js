const generatePassword = (length, charSet = '') => {
    charSet = charSet ?
        charSet :
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^°!"§$%&/()=?`*+~\'#,;.:-_';
    let newPass = Array.apply(null, Array(length || 10))
        .map(function() {
            return charSet.charAt(Math.random() * charSet.length);
        })
        .join('');
    return newPass;
}

const generateRandomString = (length, charSet = '') => {
    charSet = charSet ?
        charSet :
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789^°!"§$%&/()=?`*+~\'#,;.:-_';
    let newString = Array.apply(null, Array(length || 10))
        .map(function() {
            return charSet.charAt(Math.random() * charSet.length);
        })
        .join('');
    return newString;
}
module.exports = { generatePassword, generateRandomString };