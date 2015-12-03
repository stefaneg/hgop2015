var q = require('q');

module.exports = function(){
  var store = {};

  return {
    loadEvents : function(id){
      var deferred = q.defer();
      deferred.resolve(store[id] || []);
      return deferred.promise;
    },
    storeEvents: function(id, events){
      var deferred = q.defer();
      store[id] = (store[id] || []).concat(events);
      deferred.resolve(store[id]);
      return deferred.promise;
    }
  }
}
