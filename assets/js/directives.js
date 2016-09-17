/* Summary:         Directive definitions
*
* Descriptions:     This program provides the Directive functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-16
*/

project.directive('chartMetrics', function() {
	return {
		restrict: 'AECM', // attr, elem, class, comm
		templateUrl: 'assets/dir/callmetrics.html',
		replace: true,
        scope: { // poke/pass obejects into directive
            weatherDay: "=", // object 2-way
            recievedCalls: "@",  // text
            totalMinutes: "@",  // text
            avgCallTime: "@",  // text
            avgCallsPerDay: "@",  // text
            overageMinutes: "@",  // text
            totalCosts: "@",  // text
        }
	};
});
