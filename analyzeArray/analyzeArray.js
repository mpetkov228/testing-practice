function analyzeArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('Invalid input!');
    }
    
    return {
        min: Math.min(...array),
        average: array.reduce((prev, curr) => prev + curr, 0) / array.length,
        max: Math.max(...array),
        length: array.length
    };
}

module.exports = analyzeArray;