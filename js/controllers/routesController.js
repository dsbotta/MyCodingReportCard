(function() {

	angular.module('CodingReportCard')
		.config(['$routeProvider', function($routeProvider) {

			$routeProvider.when('/', {
				templateUrl: 'routes/treehouse/treehouse-profile/'
			})

			.when ('/treehouse-badge/:badgeId', {
				templateUrl: 'routes/treehouse/treehouse-badge/',
				controller: 'TreehouseBadgeAjax',
				controllerAs: 'myInfo'
			})

			.when ('/codeschool', {
				templateUrl: 'routes/codeschool/',
			})

			.when ('/codeschool-badge/:badgeName', {
				templateUrl: 'routes/codeschool/codeschool-badge/',
			})

		}]);

})();