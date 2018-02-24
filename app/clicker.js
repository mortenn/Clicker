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
	this.addScore = function(nick, clicks, cps)
	{
		this.scoreboard.push({nick:nick,clicks:clicks,cps:cps});
	}
}