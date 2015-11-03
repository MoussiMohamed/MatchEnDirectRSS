angular.module('MatchEnDirectRSS')
    .filter('rssDate', function () {
        return function (value) {
            return new Date(value).toLocaleString();
        };
    });