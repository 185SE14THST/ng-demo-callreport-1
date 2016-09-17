/* Summary:         Router definitions
*
* Descriptions:     This program provides the Router functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-16
*/

project.config(function ($routeProvider) {
	$routeProvider
		.when ('/' || '', {
			templateUrl: 'assets/html/home.html',
			controller: 'mainController'
			})
		.when ('/about', {
			templateUrl: 'assets/html/about.html',
			controller: 'aboutCOntroller'
			})
		.when ('/contact', {
			templateUrl: 'assets/html/contact.html',
			controller: 'contactController'
			})
});
