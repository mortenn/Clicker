angular.module('clicker', ['ui.router','ngResource','LocalStorageModule'])
	.run([
		'$rootScope', '$stateParams', '$state',
		function($rootScope, $stateParams, $state)
		{
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	])
	.config([
		'$compileProvider', '$stateProvider', '$urlServiceProvider', 'localStorageServiceProvider',
		function($compile, $state, $urlService, localStorageServiceProvider)
		{
			$compile.debugInfoEnabled(false);
			$state.state('clicker', {component:'clicker'});
			$state.state('clicker.start', {url:'/start', component:'start'});
			$state.state('clicker.play', {url:'/play', component:'play', params: { nick:null }});
			$state.state('clicker.done', {url:'/done', component:'done', params: { nick:null, clicks:null, cps:null }});
			$urlService.rules.otherwise('/start');
			localStorageServiceProvider.setPrefix('clicker');
		}
	])
	.directive('preventRightClick', [
		function() {
			return {
				restrict: 'A',
				link: function($scope, $ele) {
					$ele.bind("contextmenu", function(e) {
						e.preventDefault();
					});
				}
			};
		}
	])
;