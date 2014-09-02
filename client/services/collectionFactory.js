angular.module('curates.collectionFactory', [])
.factory('collectionFactory', function($http){

  var getCollection = function(url) {
    return $http({
      method: 'GET',
      url: url
    }).then(function(response) {
      return response.data;
    });
  };

  var getListData = function() {
    return $http({
      method: 'GET',
      url: '/all'
    }).then(function(response) {
      return response.data;
    });
  };

  var getUserCollections = function(user) {
    return $http({
      method: 'GET',
      url: '/user/' + user
    }).then(function(response) {
      return response.data;
    });
  };

  var updateCollection = function(collection) {
    return $http({
      method: 'POST',
      url: 'collection/' + collection.c_id,
      data: collection
    }).then(function(response) {
      return response.data;
    });
  };

  var createCollection = function(collection) {
    return $http({
      method: 'POST',
      url: 'collection',
      data: collection
    }).then(function(response) {
      return response.data;
    });
  };

  return {
    getCollection: getCollection,
    getListData: getListData,
    getUserCollections: getUserCollections,
    updateCollection: updateCollection
  };

})
