angular.module('docsSimpleDirective2', [])
  .directive('myTemplate', function() {
    return {
      restrict: 'E',
      templateUrl: 'template/template.html',
      scope: {
        input: '='
      }
    };
  });
