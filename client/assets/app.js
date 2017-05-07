var app = angular.module('checklist', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'partials/listView.html',
            controller: 'ListController'
        })
});
