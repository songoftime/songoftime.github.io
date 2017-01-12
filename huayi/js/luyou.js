var app = angular.module("huayi",[]);
//配置路由

//配置路由信息
app.config(function($routeProvider){
	$routeProvider.when("/index",{templateUrl:"index1.html"});
	$routeProvider.when("/anli",{templateUrl:"anli.html"});
	$routeProvider.when("/guanyu",{templateUrl:"guanyu.html"});
	$routeProvider.when("/lianxi",{templateUrl:"lianxi.html"});
	$routeProvider.otherwise({templateUrl:"index.html"});
});
app.config(['$locationProvider',function($locationProvider){
	$locationProvider.hashPrefix("");
}]);