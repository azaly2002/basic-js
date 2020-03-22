module.exports = function countCats(ar) {
    let count = 0;
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar[i].length; j++) {
          if (ar[i][j] === "^^")  count++;
        }
    }
    return count;
};
