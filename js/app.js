var app = angular.module('TodoApp', ['ngMaterial']);

app.controller('TodoController', function ($scope) {

    $scope.todos = [
        {"title": "delectus aut autem", "status": false},
        {"title": "quis ut nam facilis et officia qui", "status": true},
        {"title": "fugiat veniam minus", "status": true},
        {"title": "illo est ratione doloremque quia maiores aut", "status": false}
    ];

    $scope.NewTodo = function () {
        $scope.todos.push({
            "title": $scope.newtodo,
            "status": false
        });
        $scope.newtodo = "";
    };

    $scope.ClearTodo = function () {

        $scope.todos = $scope.todos.filter(function (done) {

            return !done.status;
        })
    };
});
