module.exports = function reverse(n) {
    return Math.abs(n).toString().split('')
        .reduce((previous, current, index) => previous + current * Math.pow(10, index), 0);
}
