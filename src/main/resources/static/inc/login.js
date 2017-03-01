$(document).ready(function() {
	if($('#thError').length > 0){
		$('.error').removeAttr('hidden');
	}
	$('.login').submit(function(e) {
		var $this = $(this), $state = $this.find('button > .state');
		$this.addClass('loading');
		$state.html('Authenticating');
		setTimeout(function() {
			$this.addClass('ok');
			$state.html('Welcome back!');
			$('#email2').val($('#email').val());
			$('#password2').val($('#password').val());
			$('.testLogin').submit();
		}, 500);
		e.preventDefault();
	});
});