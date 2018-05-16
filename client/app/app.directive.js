angular.module('b&bapp')
  .directive('customGrid', function($compile, $timeout) {
    /* wrap in root element so we can get final innerHTML*/
    return {
      restrict: "E",
      scope: {
        items: '=items'
      },
      transclude : true, 
      templateUrl : 'grid.html',

      link: function(scope, element, attrs) {
        
        scope.openImageModal = function(index){
          if (!scope.currentIndex) {
            scope.image = scope.items[index];
            scope.currentIndex = index;
            $('#image-modal').modal({backdrop: 'static',show: true});
          } else {
            scope.image = scope.items[index];
            scope.currentIndex = index;
          }
        }
      }
    };
  });