angular.module('docsSimpleDirective', ['docsSimpleDirective2'])
  .controller('outerController', ['$scope', '$rootScope', function($scope,
    $rootScope) {
    $rootScope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre',
      outerScope: 'outer'
    };
    $rootScope.inputText = 123;
    $rootScope.styleSheet = 'darkTheme.css';
    $rootScope.bodyTheme = '';
  }])
  .directive('myCustomer', function() {
    return {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
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
