angular.module('clicker').component(
	'done',
	{
		controller: ['$state','$stateParams','$timeout',Done],
		templateUrl: 'view/done.html',
		require: {
			clicker: '^^clicker'
		}
	}
);

function Done($state, $stateParams, $timeout)
{
	this.nick = $stateParams.nick;
	this.clicks = $stateParams.clicks;
	this.cps = $stateParams.cps;
	this.$onInit = function()
	{
		this.clicker.addScore($stateParams);
		$timeout(function(){ $state.go('clicker.start'); }, 5000);
	};
}