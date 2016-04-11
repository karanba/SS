(function (angular) {
    angular.module('son')
        .directive('genericField', ['$log', '$filter', function ($log, $filter) {
            return {
                restrict: 'EA',
                templateUrl: "app/module/genericOptimizer/son.optimizer.generic.field.html",
                scope: {
                    field: "=",
                    showLabel: "="
                },
                controller: function ($scope, $element) {
                    if($scope.field.dataType!=null){
                    if ($scope.field.value != null) {
                        switch ($scope.field.dataType.toLocaleLowerCase()) {
                            case 'bool':
                            case 'boolean':
                                $scope.field.value = Boolean($scope.field.value)
                                break;
                        }
                    }}else{
                        $log.warn("DataType Undefined", $scope.field);
                    }
                }
            };
        }]);
})(angular);