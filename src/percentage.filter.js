angular.module('percentage', [])
    .filter("percentage", function () {
        return function (value, total) {
            total = total || 1;
            return (isNaN(value) || isNaN(total)) ? '' : value/total*100;
        };
    });
