angular.module('clicker').component(
	'clicker',
	{
		controller: ['localStorageService',Clicker],
		templateUrl: 'view/clicker.html'
	}
);

function Clicker(localStorageService)
{
	this.scoreboard = localStorageService.get('scoreboard') || [];
	this.addScore = function(nick, clicks, cps)
	{
		this.scoreboard.push({nick:nick,clicks:clicks,cps:cps});
		localStorageService.set('scoreboard', this.scoreboard);
	}
}