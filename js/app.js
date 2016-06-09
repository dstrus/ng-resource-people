/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('personApp',['ui.router','ngResource','personApp.controllers','personApp.services']);

angular.module('personApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('people',{
        url:'/people',
        templateUrl:'partials/people.html',
        controller:'PersonListController'
    }).state('viewPerson',{
       url:'/people/:id/view',
       templateUrl:'partials/person-view.html',
       controller:'PersonViewController'
    }).state('newPerson',{
        url:'/people/new',
        templateUrl:'partials/person-add.html',
        controller:'PersonCreateController'
    }).state('editPerson',{
        url:'/people/:id/edit',
        templateUrl:'partials/person-edit.html',
        controller:'PersonEditController'
    });
}).run(function($state){
   $state.go('people');
});