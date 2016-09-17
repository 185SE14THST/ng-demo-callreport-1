/* Summary:         Controller definitions
*
* Descriptions:     This program provides the controller functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-15
*/

project.controller('mainController', ['$scope', '$filter', '$http', '$log', '$timeout', '$routeParams', function ($scope, $filter, $http, $log, $timeout, $routeParams) {

        $scope.companyDetails =
        {
            'appName': 'Report App',
            'appYear': '2012',
            'companyName': 'Acme Widget',
            'companyAddress': '5 Brickell Ave',
            'companyCity': 'Miami-Brickell',
            'companyState': 'FL',
            'companyZip': '33131',
            'companyPhone': '305-555-5555',
            'companyEmail': 'acme@amce.com'
        };

}]);

// About Page
project.controller('aboutCOntroller', ['$scope', '$filter', '$http', '$log', '$timeout', '$location', '$routeParams', function ($scope, $filter, $http, $log, $timeout, $location, $routeParams) {

    $scope.name = 'About Page';
	$scope.title = $routeParams.title;
}]);

// Contact Page
project.controller('contactController', ['$scope', '$filter', '$http', '$log', '$timeout', '$location', function ($scope, $filter, $http, $log, $timeout, $location) {

    $scope.name = 'Contact Page';
}]);


// Application1
project.controller('applicationController1', ['$scope', '$filter', '$http', '$log', '$timeout', '$resource', '$location','$routeParams','$interval', 'projectApp1', 'metrics', function ($scope, $filter, $http, $log, $timeout, $resource, $location, $routeParams, $interval, projectApp1, metrics) {

    //$scope.dashboard = projectApp1.chartRowTotals; do work in watcher + {{ sets}}

    $scope.city = projectApp1.city;
    //$scope.x = projectApp1.$g
    $scope.recievedCalls = metrics.recievedCalls;
    $scope.totalMinutes = metrics.totalMinutes;
    $scope.avgCallTime = metrics.avgCallTime;
    $scope.avgCallsPerDay = metrics.avgCallsPerDay;
    $scope.overageMinutes = metrics.overageMinutes;
    $scope.totalCosts = metrics.totalCosts;

    $scope.$watch('projectApp1.drawChart()', function () {
        console.log( metrics['recievedCalls'] );
    });

    $scope.chartTimer = function () {
        $interval( function chartTimerAction () {
            projectApp1.drawChart();
            $log.info('$interval: ' + metrics);
        }, 3000, 5);
    }

}]);
