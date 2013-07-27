angular.module('todo', ['todoFilter']);
function TodoCtrl($scope) {
	console.log("sdf");
	$scope.todos = [
		{text: "learning javascript", cost: 25, done: true},
		{text: "learning ruby on rails", cost: 10, done: false},
		{text: "attend the IELT",cost: 90, done: false}
	]

	$scope.orderPro = "text"
	$scope.remaining = function () {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			if(!todo.done) count++;
		});
		return count;
	}

	$scope.archive = function() {
		var old_todos = $scope.todos;
		$scope.todos = [];
		angular.forEach(old_todos, function(todo){
			if(!todo.done) $scope.todos.push(todo);
		});
	}

	$scope.addTodo = function(){
		$scope.todos.push({text: $scope.todoText, cost: $scope.todoCost, done: false});
		$scope.todoText = '';
	}
}