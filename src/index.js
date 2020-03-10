// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix)) return []

    function compareNumbers(a, b) {
        return a - b;
    }

    function compareNumbers2(a, b) {
        return b - a;
    }
    
    matrix.forEach((e, i) => {
        if (i % 2 === 0) {
            e.sort(compareNumbers)
        } else e.sort(compareNumbers2)
    })

    let arr = [].concat(...matrix)


    return arr

}
