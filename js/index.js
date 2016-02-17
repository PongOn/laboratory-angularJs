angular.module('docsSimpleDirective', [])
  .controller('outerController', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre',
      outerScope: 'outer'
    };
    $scope.inputText = 123;
    $scope.styleSheet = 'whiteTheme.css';
  }])
  .directive('myCustomer', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  })
  .directive('myTemplate', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/template.html',
      scope: {
        input: '='
      }
    };
  });
// angular.module('docsRestrictDirective', [])
//   .controller('Controller', ['$scope', function($scope) {
//     $scope.customer = {
//       name: 'Naomi',
//       address: '1600 Amphitheatre'
//     };
//   }])
//   .directive('myCustomer', function() {
//     return {
//       restrict: 'E',
//       templateUrl: 'template/template.html'
//     };
//   });
