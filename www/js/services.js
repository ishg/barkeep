angular.module('starter.services', [])

.factory('DaysService', function(){
    var days = [];
    
    return{
        all: function(){
            return new Promise(function(resolve,reject){
                var query = new Parse.Query(Parse.Object.extend("Day"));
                query.find({
                  success: function(results) {
                    for (var i = 0; i < results.length; i++) {
                      var object = {};
                      object.name = results[i].attributes.name;
                      object.id = results[i].id;
                      days.push(object);
                    }
                    resolve(days);
                  },
                  error: function(error) {
                    reject("Error: " + error.code + " " + error.message);
                  }
                });
            });
        },
        get: function(dayId){
            return days.filter(function(obj){
                return obj.id == dayId;
            })[0];
        }
    }
})

.factory('LocationsService', function(){
    var locations = [];
    
    return{
        all: function(){
            return new Promise(function(resolve, reject){
                var query = new Parse.Query(Parse.Object.extend("Location"));
                query.find({
                  success: function(results) {
                    for (var i = 0; i < results.length; i++) {
                      var object = {};
                      object.name = results[i].attributes.name;
                      object.address = results[i].attributes.address;
                      object.coordinates = results[i].attributes.coordinates;
                      object.id = results[i].id;
                      locations.push(object);
                    }
                    resolve(locations);
                  },
                  error: function(error) {
                    reject("Error: " + error.code + " " + error.message);
                  }
                });
            });
        },
        get: function(locId){
            return locations.filter(function(obj){
                return obj.id == locId;
            })[0];
        }
    }
})

.factory('Specials', function(){
   
    
});
