/**
 * Created by Sandeep on 01/06/14.
 */
angular.module('personApp.controllers',[]).controller('PersonListController',function($scope,$state,popupService,$window,Person){

    $scope.people=Person.query();

    $scope.deletePerson=function(person){
        if(popupService.showPopup('Really delete this?')){
            person.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('PersonViewController',function($scope,$stateParams,Person){

    $scope.person=Person.get({id:$stateParams.id});

}).controller('PersonCreateController',function($scope,$state,$stateParams,Person){

    $scope.person=new Person();

    $scope.addPerson=function(){
        $scope.person.$save(function(){
            $state.go('people');
        });
    }

}).controller('PersonEditController',function($scope,$state,$stateParams,Person){

    $scope.updatePerson=function(){
        $scope.person.$update(function(){
            $state.go('people');
        });
    };

    $scope.loadPerson=function(){
        $scope.person=Person.get({id:$stateParams.id});
    };

    $scope.loadPerson();
});
