(function () {
  'use strict'

  angular.module('myFirstApp' , [])
  .controller('myFirstController' , myFirstController);

  myFirstController.$inject = ['$scope', '$filter'];

  function myFirstController($scope, $filter) {

    $scope.name = "harold";

    $scope.colorpick = "#abc";

    $scope.calculate = function() {
      $scope.value = $scope.colorpick.substring(1);
    };

    $scope.upper = function(){
      var upCase = $filter('uppercase');
      $scope.colorpick = upCase($scope.colorpick);
    };




  };

})();
