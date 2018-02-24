angular.module('clicker', ['ui.router','ngResource'])
	.run([
		'$rootScope', '$stateParams', '$state',
		function($rootScope, $stateParams, $state)
		{
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;
		}
	])
	.config([
		'$compileProvider', '$stateProvider', '$urlServiceProvider',
		function($compile, $state, $urlService)
		{
			$compile.debugInfoEnabled(false);
			$state.state('clicker', {component:'clicker'});
			$state.state('clicker.start', {url:'/start', component:'start'});
			$state.state('clicker.play', {url:'/play', component:'play'});
			$state.state('clicker.done', {url:'/done', component:'done'});
			$urlService.rules.otherwise('/start');
		}
	])
;