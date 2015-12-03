var should = require('should');

var inMemoryStore = require('./memorystore');


describe('In memory store', function() {


  it('Should return empty array for unknown id', function() {

    var localStore = inMemoryStore();

    localStore.loadEvents('1234',function(err, loadedEvents){
      should(loadedEvents.length).be.exactly(0);
      should(loadedEvents).be.instanceof(Array);

    });

  });

  it('Should return events previously stored', function() {

    var localStore = inMemoryStore();

    localStore.storeEvents('1234', [{"id":"1"}]).then(function(){
      localStore.loadEvents('1234').then(function(loadedEvents){
        should(loadedEvents).eql([{"id":"1"}]);
      });
    });

  });


  it('should append stored events to events previously stored',function(){
    var localStore = inMemoryStore();

    localStore.storeEvents('1234', [{"id":"1"}]).then(function(){
      localStore.storeEvents('1234', [{"id":"2"}]).then(function(){
        localStore.loadEvents('1234').then(function(loadedEvents){
          should(loadedEvents).eql([{"id":"1"},{"id":"2"}]);
        });
      });
    });
  });
});
