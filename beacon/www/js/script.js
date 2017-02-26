'use strict';

var app = angular.module('app', []);

app.controller('appController', ['$scope', function ($scope) {

      $scope.billTotal = 23.25;

    $scope.fifteenPer = $scope.billTotal + ($scope.billTotal * 15)/100;
    $scope.twentyPer = $scope.billTotal + ($scope.billTotal * 20)/100;
    $scope.twentyFivePer = $scope.billTotal + ($scope.billTotal * 25)/100;
    $scope.tip = 0;
    $scope.Total = $scope.billTotal;

    $scope.starRating1 = 4;
    $scope.starRating2 = 5;
    $scope.starRating3 = 2;
    $scope.hoverRating1 = $scope.hoverRating2 = $scope.hoverRating3 = 0;


    $scope.percentage = function (param) {
      if(param == 15){
        $scope.tip = ($scope.billTotal * 15)/100;
        $scope.Total = $scope.fifteenPer;
      }else if(param == 20){
        $scope.tip = ($scope.billTotal * 20)/100;
        $scope.Total = $scope.twentyPer;
      }else if(param == 25){
        $scope.tip = ($scope.billTotal * 25)/100;
        $scope.Total = $scope.twentyFivePer;
      }
    };

    $scope.click1 = function (param) {
        console.log('Click(' + param + ')');
    };

    $scope.click1 = function (param) {
        console.log('Click(' + param + ')');
    };

    $scope.mouseHover1 = function (param) {
        console.log('mouseHover(' + param + ')');
        $scope.hoverRating1 = param;
    };

    $scope.mouseLeave1 = function (param) {
        console.log('mouseLeave(' + param + ')');
        $scope.hoverRating1 = param + '*';
    };

    $scope.click2 = function (param) {
        console.log('Click');
    };

    $scope.mouseHover2 = function (param) {
        console.log('mouseHover(' + param + ')');
        $scope.hoverRating1 = param;
    };

    $scope.mouseLeave2 = function (param) {
        console.log('mouseLeave(' + param + ')');
        $scope.hoverRating2 = param + '*';
    };

    $scope.click3 = function (param) {
        console.log('Click');
    };

    $scope.mouseHover3 = function (param) {
        console.log('mouseHover(' + param + ')');
        $scope.hoverRating3 = param;
    };

    $scope.mouseLeave3 = function (param) {
        console.log('mouseLeave(' + param + ')');
        $scope.hoverRating3 = param + '*';
    };
}]);

app.directive('starRating', function () {
    return {
        scope: {
            rating: '=',
            maxRating: '@',
            readOnly: '@',
            click: "&",
            mouseHover: "&",
            mouseLeave: "&"
        },
        restrict: 'EA',
        template:
            "<div style='display: inline-block; margin: 0px; padding: 0px; cursor:pointer;' ng-repeat='idx in maxRatings track by $index'> \
                    <img ng-src='{{((hoverValue + _rating) <= $index) && \"http://www.codeproject.com/script/ratings/images/star-empty-lg.png\" || \"http://www.codeproject.com/script/ratings/images/star-fill-lg.png\"}}' \
                    ng-Click='isolatedClick($index + 1)' \
                    ng-mouseenter='isolatedMouseHover($index + 1)' \
                    ng-mouseleave='isolatedMouseLeave($index + 1)'></img> \
            </div>",
        compile: function (element, attrs) {
            if (!attrs.maxRating || (Number(attrs.maxRating) <= 0)) {
                attrs.maxRating = '5';
            };
        },
        controller: function ($scope, $element, $attrs) {
            $scope.maxRatings = [];

            for (var i = 1; i <= $scope.maxRating; i++) {
                $scope.maxRatings.push({});
            };

            $scope._rating = $scope.rating;

			$scope.isolatedClick = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope.rating = $scope._rating = param;
				$scope.hoverValue = 0;
				$scope.click({
					param: param
				});
			};

			$scope.isolatedMouseHover = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope._rating = 0;
				$scope.hoverValue = param;
				$scope.mouseHover({
					param: param
				});
			};

			$scope.isolatedMouseLeave = function (param) {
				if ($scope.readOnly == 'true') return;

				$scope._rating = $scope.rating;
				$scope.hoverValue = 0;
				$scope.mouseLeave({
					param: param
				});
			};
        }
    };
});
