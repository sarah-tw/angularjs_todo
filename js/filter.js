angular.module('todoFilter', []).filter('checkdone', function() {
  	return function(input){
	  return input ? '\u2713' : '\u2718';
}
  
  
});
