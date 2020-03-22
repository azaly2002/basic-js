module.exports = function createDreamTeam(ar) {
    let resultArray = new Array();
    if (Array.isArray(ar)) {
        ar.forEach(name => {
            if (typeof(name) === "string") {
                name = name.trim();
                resultArray.push(name[0].toUpperCase());
            }
        });
        return resultArray.sort().join('');
    } else return false;
};
