angular.module('clicker').component(
	'start',
	{
		controller: ['$state',Start],
		templateUrl: 'view/start.html',
		require: {
			clicker: '^^clicker'
		}
	}
);

function Start($state)
{
	this.nick = '';
	this.start = function()
	{
		$state.go('clicker.play', {nick:this.nick});
		this.nick = '';
	}
}