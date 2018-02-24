angular.module('clicker').component(
	'clicker',
	{
		controller: [Clicker],
		templateUrl: 'view/clicker.html'
	}
);

function Clicker()
{
	this.scoreboard = [];
	this.addScore = function(score)
	{
		this.scoreboard.push(score);
	}
}