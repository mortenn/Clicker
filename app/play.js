angular.module('clicker').component(
	'play',
	{
		controller: ['$interval','$state','$stateParams', Play],
		templateUrl: 'view/play.html'
	}
);

function Play($interval, $state, $stateParams)
{
	console.log($stateParams);
	this.nick = $stateParams.nick;
	this.totalTime = 30000;
	this.timeLeft = this.totalTime;
	this.running = false;
	this.timer = false;
	this.tickSize = 100;
	this.clicks = 0;
	this.cps = 0;
	this.class = 'bg-info';
	this.tick = function()
	{
		this.timeLeft -= this.tickSize;
		if(this.timeLeft <= 0)
		{
			$interval.cancel(this.timer);
			$state.go('clicker.done', {nick: this.nick, clicks: this.clicks, cps: this.cps});
		}
		if(this.timeLeft < 5000)
			this.class = this.timeLeft % 400 ? 'bg-dark' : 'bg-danger';
		this.cps = 1000 * this.clicks / (this.totalTime - this.timeLeft);
	};
	this.click = function()
	{
		if(!this.running)
		{
			this.running = true;
			var ctrl = this;
			this.class = 'bg-secondary';
			this.timer = $interval(function(){ctrl.tick();}, this.tickSize);
		}
		this.clicks++;
	}
}