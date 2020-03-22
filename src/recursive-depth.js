module.exports = class DepthCalculator {
    calculateDepth(ar) {
        if (!Array.isArray(ar)) {
            return 0;
        }
        var count = 1;
        for (var i = 0; i < ar.length; i++) {
            count = Math.max(this.calculateDepth(ar[i]) + 1, count);
        }
        return count;
    }
};
