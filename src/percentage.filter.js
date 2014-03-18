angular.module('percentage', [])
    .filter("percentage", function () {
        return function (value, total) {
            total = total || 1;
            return value/total*100;
        };
    });
