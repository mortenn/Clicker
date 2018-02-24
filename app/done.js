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
	this.$onInit = function()
	{
		console.log($stateParams);
		this.nick = $stateParams.nick;
		this.clicks = $stateParams.clicks;
		this.cps = $stateParams.cps;
		this.clicker.addScore($stateParams.nick, $stateParams.clicks, $stateParams.cps);
		$timeout(function(){ $state.go('clicker.start'); }, 5000);
	};
}