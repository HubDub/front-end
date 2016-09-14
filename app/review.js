"use strict";

// console.log("review.js is on deck");
//first create the angular module variable
var app = angular.module("ReviewPhraseApp", ["ngRoute"])
  .constant("FirebaseUrl", "https://review-phrases.firebaseio.com");

app.config(function($routeProvider) {
  console.log("we are inside app.config");
  $routeProvider.
    when("/landing", {
      templateUrl: "partials/Landing.html",
      controller: "LandingPageCtrl"
    }).
    when("/", {
      templateUrl: "partials/Landing.html",
      controller: "LandingPageCtrl"
    }).
    when("/search", {
      templateUrl: "partials/searchNew.html",
      controller: "SearchNewCtrl"
    });
});

