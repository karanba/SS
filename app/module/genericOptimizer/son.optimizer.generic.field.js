(function (angular) {
    angular.module('son')
        .directive('genericField', ['$log', '$filter', function ($log, $filter) {
            return {
                restrict: 'EA',
                templateUrl: "app/module/genericOptimizer/son.optimizer.generic.field.html",
                scope: {
                    field: '=',
                    showLabel: '=',
                    relatedForm: '='
                },
                controller: function ($scope, $element) {
                    $scope.field.uniqueName = "slim_son" + Math.random().toString(36).replace(/[^a-z]+/g, '');
                    if ($scope.field.validation) {
                        if ($scope.field.validation.min != null) {
                            $scope.field.validation.min = parseInt($scope.field.validation.min, 10);
                        }
                        if ($scope.field.validation.max != null) {
                            $scope.field.validation.max = parseInt($scope.field.validation.max, 10);
                        }
                        if ($scope.field.validation.required != null) {
                            $scope.field.validation.required = Boolean($scope.field.validation.required);
                        }
                    }

                    if ($scope.field.dataType != null) {
                        if ($scope.field.value != null) {
                            switch ($scope.field.dataType.toLocaleLowerCase()) {
                                case 'int':
                                    $scope.field.value = parseInt($scope.field.value, 10);
                                    break;
                                case 'float':
                                    $scope.field.value = parseFloat($scope.field.value);
                                    if ($scope.field.validation) {
                                        $scope.field.validation.min = parseFloat($scope.field.validation.min);
                                        $scope.field.validation.max = parseFloat($scope.field.validation.max);
                                    }
                                    break;
                                case 'bool':
                                case 'boolean':
                                    $scope.field.value = Boolean($scope.field.value)
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