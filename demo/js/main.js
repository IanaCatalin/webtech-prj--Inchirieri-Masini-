/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('tutorialWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "pagini/home.html", controller: "PageCtrl"})
    // Pages
    .when("/about", {templateUrl: "pagini/about.html", controller: "PageCtrl"})
    .when("/listaoferte", {templateUrl: "pagini/listaoferte.html", controller: "PageCtrl"})
    .when("/modele", {templateUrl: "pagini/modele.html", controller: "ModeleController"})
    .when("/contact", {templateUrl: "pagini/contact.html", controller: "PageCtrl"})
}]);

/**
 * Controls the Blog
 */
app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  console.log("Blog Controller reporting for duty.");
});
app.controller('ModeleController',function($http,$scope,$window){
    $scope.Modele=function(){
        $http({
			method: 'GET',
			url: 'https://inchirieri-masini-ianacatalin.c9users.io/Modele',
                        crossDomain : true,
    xhrFields: {
        withCredentials: true
    }
		}).then(function successCallback(data) {
			$scope.Modele=data.data;
		},
		function errorCallback(response) {
        
});
  };
    $scope.Modele();
});
/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});