(function (angular) {
    angular.module('son')
        .directive('genericField', ['$log', '$filter', function ($log, $filter) {
            return {
                restrict: 'EA',
                templateUrl: "app/module/genericOptimizer/son.optimizer.generic.field.html",
                scope: {
                    field: '=',
                    showLabel: '=',
                    relatedForm: '=',
                    namePrefix: '='
                },
                controller: function ($scope, $element) {
                    $scope.field.uniqueName = "lo_"+ $scope.namePrefix + "_" +  Math.random().toString(36).replace(/[^a-z]+/g, '');

                    if ($scope.field.validation) {
                        if ($scope.field.validation.min != null) {
                            $scope.field.validation.min.value = parseInt($scope.field.validation.min.value, 10);
                        }
                        if ($scope.field.validation.max != null) {
                            $scope.field.validation.max.value = parseInt($scope.field.validation.max.value, 10);
                        }
                        if ($scope.field.validation.required != null) {
                            $scope.field.validation.required.value = Boolean($scope.field.validation.required.value);
                        }
                    }

                    if ($scope.field.dataType != null) {
                        if ($scope.field.value != null) {
                            switch ($scope.field.dataType.toLocaleLowerCase()) {
                                case 'int':
                                    $scope.field.value = parseInt($scope.field.value, 10);
                                    $scope.field.inputType = 'number';
                                    break;
                                case 'float':
                                    $scope.field.value = parseFloat($scope.field.value);
                                    $scope.field.inputType = 'number';
                                    break;
                                case 'bool':
                                case 'boolean':
                                    $scope.field.value = Boolean($scope.field.value)
                                    break;
                                default:
                                    $scope.field.inputType = 'text';
                                    break;
                            }
                        }
                    } else {
                        $log.warn("DataType Undefined", $scope.field);
                    }
                }
            };
        }]);
})(angular);