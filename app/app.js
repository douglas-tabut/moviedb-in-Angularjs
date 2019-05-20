(function() {
    var app = angular.module("Studio", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "main.html"
            })
            .when("/movies", {
                templateUrl: "films.html",
            })
            .when("/actors", {
                templateUrl: "people.html"
            })
            .when("/locations", {
                templateUrl: "locations.html"
            })
            .when("/species", {
                templateUrl: "species.html"
            })
            .when("/vehicles", {
                templateUrl: "vehicles.html"
            })
    });

    const tabs = [

        {
            domain: 'movies',
        },
        {
            domain: 'actors',
        },
        {
            domain: 'locations',
        }
    ];

    app.controller('StudioController', function() {
        this.tabs = tabs
    });

    app.controller('FilmsController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/films'
        }).then(function successCallback(response) {
            $scope.films_data = response.data
        });
    })

    app.controller('PeopleController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/people'
        }).then(function successCallback(response) {
            $scope.people_data = response.data
        });
    })

    app.controller('LocationsController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/locations'
        }).then(function successCallback(response) {
            $scope.location_data = response.data
        });
    })

    app.controller('SpeciesController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/species'
        }).then(function successCallback(response) {
            $scope.species_data = response.data
        });
    })

    app.controller('VehiclesController', function($http, $scope) {
        return $http({
            method: 'GET',
            url: 'http://localhost:8080/api/vehicles'
        }).then(function successCallback(response) {
            $scope.vehicles_data = response.data
        });
    })

})();