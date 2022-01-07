(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];



  function LunchCheckController ($scope) {
    $scope.borderStyle="";
    $scope.calculate = function () {
      if($scope.inputText === "" || $scope.inputText === undefined) {
        $scope.message="Please enter data first";
        $scope.borderStyle="solid";
        $scope.textColor="d00";
      }
      else {
        var counter = 0;
        var array = $scope.inputText.replace(/\s/g,'').split(";");
        for(var i = 0 ; i < array.length; i++){
          if(array[i]!= "") {
            counter += 1;
          }
        }
        if (counter <= 3) {
          $scope.message="Enjoy!";
          $scope.textColor="0a0";
          $scope.borderStyle="solid";
        }else {
          $scope.message="Too much!";
          $scope.textColor="0a0";
          $scope.borderStyle="solid";

        }
      }

    };
  };
})();




//
// (function () {
//   'use strict';
//
//   angular.module('LunchCheck', [])
//
//   .controller('myController', myController);
//
//   myController.$inject = ['$scope'];
//
//
//
//   function myController ($scope) {
//     $scope.calculate = function () {
//       if($scope.inputText === "" || $scope.inputText === undefined) {
//         $scope.message="Please enter data first";
//       }
//       else if ($scope.inputText.split(";").length <= 3) {
//         $scope.message="Enjoy!";
//       }else {
//         $scope.message="Too much!";
//       }
//     };
//   };
// })();
