var myApp = angular.module('tagsapp', ['ngRoute', 'ngResource']);

myApp.factory("Tag", function($resource) {
  return $resource("/api/tags/:id", { _id: "@id"},
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );
})

// Controllers
myApp.controller("TagListCtrl", ['$scope', '$resource', 'Tag', '$location',
                      function($scope, $resource, Tag, $location) {
  $scope.tags = Tag.query();

  $scope.saveNewTag = function() {
    Tag.create({ tag: $scope.newTag }, function(response){
      $scope.tags.push(response);
      $scope.newTag = null;
    });
  }

  $scope.deleteTag = function(tagId) {
    Tag.remove({ _id: tagId }, function(response){
      var index = $scope.tags.indexOf(tagId);
      $scope.tags.splice(index, 1)
      $location.path('/')
    })
  };
}]);

// myApp.controller("TagEditCtrl", ['$scope', '$resource', 'Tag', '$location', '$routeParams', function($scope, $resource, Tag, $location, $routeParams){
//   $scope.tag = Tag.get({ id: $routeParams.id });
//   $scope.update = function(){
//     if($scope.tagForm.$valid){
//       Tag.update({ id: $scope.tag.id }, { tag: $scope.tag }, function(){
//         $location.path('/');
//       }, function(error){
//         console.log(error)
//       });
//     }
//   }
// }]);

// Routes
// myApp.config([
//   '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//     $routeProvider.when('/tags/:id/edit', {
//       templateUrl: '/views/tags/edit.html.erb',
//       controller: 'TagEditCtrl'
//     });
//     $routeProvider.otherwise({
//       redirectTo: '/tags'
//     });
//   }
// ]);
