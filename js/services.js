/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('personApp.services',[]).factory('Person',function($resource){
    return $resource('https://xtern-roster.herokuapp.com/people/:id',{id:'@id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
