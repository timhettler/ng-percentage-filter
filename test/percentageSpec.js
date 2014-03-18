describe("Filter: percentage", function() {

    beforeEach(angular.mock.module('percentage'));


    describe('PercentageFilter', function() {

        beforeEach(angular.mock.inject(function($filter) {
            this.percentage = $filter('percentage');
        }));

        it('should assume decimal percentage', function() {

            expect(this.percentage(0.5)).toBe(50);

        });

        it('should get percentage of comparator value', function() {

            expect(this.percentage(100, 200)).toBe(50);

        });

        it('should return an empty string for non-number inputs', function () {

        });
    });
});
