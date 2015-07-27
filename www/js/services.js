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
  var specials = [];
    
  return{
    all: function(){
      return new Promise(function(resolve, reject){
        var query = new Parse.Query(Parse.Object.extend("Location"));
        query.find({
          success: function(results) {
            for (var i = 0; i < results.length; i++) {
              var object = {};
              object.name = results[i].get('name');
              object.address = results[i].get('address');
              object.coordinates = results[i].get('coordinates');
              object.id = results[i].id;
              object.specials = results[i].get('specials');
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
    },
    getSpecials: function(loc){
      return new Promise(function(resolve, reject){
        var query = new Parse.Query(Parse.Object.extend("Special"));
        query.containedIn("objectId", loc.specials);
        query.find({
          success: function(results){
            resolve(results);
          },
          error: function(err){
            reject("Error: " + error.code + " " + error.message);
          }
        })
      })
    }
  }
})

.factory('Specials', function(){
   
    
});
