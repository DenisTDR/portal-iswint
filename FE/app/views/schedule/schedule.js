/**
 * Created by NM on 7/6/2016.
 */


 views
 .controller('ScheduleController', function($scope, $controller, $uibModal, $rootScope) {

 	$scope.typeName = "schedule";
 	$scope.currentTab = 1;

 	$scope.schedule = [
 	{
 		"date": "25.07.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "09:00",
 			"hourToEvent": "",
 			"name": "Wake-up time and road to workshop location",
 			"content": "No details",
 			"class": ""
 		},
 		{
 			"startHour": "09:30",
 			"endHour": "13:30",
 			"hourToEvent": "",
 			"name": "Coffee break and city strolling",
 			"content": "No details",
 			"class": ""
 		},
 		{
 			"startHour": "14:00",
 			"endHour": "14:30",
 			"hourToEvent": "",
 			"name": "Lunch",
 			"content": "No details",
 			"class": ""
 		},
 		{
 			"startHour": "15:00",
 			"endHour": "15:30",
 			"hourToEvent": "",
 			"name": "Free time",
 			"content": "No details",
 			"class": ""
 		},
 		{
 			"startHour": "16:00",
 			"endHour": "19:30",
 			"hourToEvent": "",
 			"name": "Opening Ceremony",
 			"content": "No details",
 			"class": ""
 		},
 		{
 			"startHour": "20:00",
 			"endHour": "20:30",
 			"hourToEvent": "",
 			"name": "Dinner",
 			"content": "No details",
 			"class": ""
 		},
 		{
 			"startHour": "21:00",
 			"endHour": "21:30",
 			"hourToEvent": "",
 			"name": "Free time",
 			"content": "No details",
 			"class": ""
 		},
 		{
 			"startHour": "22:00",
 			"endHour": "24:00",
 			"hourToEvent": "",
 			"name": "Get to know party",
 			"content": "No details",
 			"class": ""
 		}
 		]
 	},
 	{
 		"date": "26.07.2016",
 		"items": [
 		{
 			"startHour": "08:50",		
 			"endHour": "09:00",
 			"hourToEvent": "",
 			"name": "Wake-up time and road to workshop location",
 			"content": "No details"
 		},
 		{
 			"startHour": "9:30",
 			"endHour": "13:30",
 			"hourToEvent": "",
 			"name": "Workshop and Breakfast",
 			"content": "No details"
 		},
 		{
 			"startHour": "14:00",
 			"endHour": "14:30",
 			"hourToEvent": "",
 			"name": "Lunch",
 			"content": "No details"
 		},
 		{
 			"startHour": "15:00",
 			"endHour": "15:30",
 			"hourToEvent": "",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "16:00",
 			"endHour": "19:30",
 			"hourToEvent": "",
 			"name": "Treasure Hunt",
 			"content": "No details"
 		},
 		{
 			"startHour": "20:00",
 			"endHour": "21:00",
 			"hourToEvent": "",
 			"name": "Dinner",
 			"content": "No details"
 		},
 		{
 			"startHour": "21:00",
 			"endHour": "21:30",
 			"hourToEvent": "",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "22:00",
 			"endHour": "24:00",
 			"hourToEvent": "",
 			"name": "Glow in the dark Party",
 			"content": "No details"
 		}
 		]
 	},
 	{
 		"date": "27.07.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "09:00",
 			"name": "Wake-up time and road to workshop location",
 			"content": "No details"
 		},
 		{
 			"startHour": "9:30",
 			"endHour": "13:30",
 			"name": "Workshop and Breakfast",
 			"content": "No details"
 		},
 		{
 			"startHour": "14:00",
 			"endHour": "14:30",
 			"name": "Lunch",
 			"content": "No details"
 		},
 		{
 			"startHour": "15:00",
 			"endHour": "15:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "10:00",
 			"endHour": "10:00",
 			"name": "ISWinT Talks",
 			"content": "No details"
 		},
 		{
 			"startHour": "20:00",
 			"endHour": "20:30",
 			"name": "Dinner",
 			"content": "No details"
 		},
 		{
 			"startHour": "21:00",
 			"endHour": "21:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "22:00",
 			"endHour": "05:00",
 			"name": "Pool Project X Party",
 			"content": "No details"
 		}
 		]
 	},
 	{
 		"date": "28.07.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "09:00",
 			"name": "Wake-up time and road to workshop location",
 			"content": "No details"
 		},
 		{
 			"startHour": "10:00",
 			"endHour": "10:00",
 			"name": "Workshop & Breakfast",
 			"content": "No details"
 		},
 		{
 			"startHour": "14:00",
 			"endHour": "19:30",
 			"name": "Picnic and Grill Day",
 			"content": "No details"
 		},
 		{
 			"startHour": "20:00",
 			"endHour": "21:00",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "21:00",
 			"endHour": "24:00",
 			"name": "Romanian Night",
 			"content": "No details"
 		}
 		]
 	},
 	{
 		"date": "29.07.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "24:00",
 			"name": "ISWinT Trip",
 			"content": "No details"
 		}
 		]
 	},
 	{
 		"date": "30.07.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "10:00",
 			"name": "Sleepy time",
 			"content": "No details"
 		},
 		{
 			"startHour": "10:00",
 			"endHour": "10:30",
 			"name": "Breakfast",
 			"content": "No details"
 		},
 		{
 			"startHour": "10:30",
 			"endHour": "13:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "13:30",
 			"endHour": "14:30",
 			"name": "Lunch",
 			"content": "No details"
 		},
 		{
 			"startHour": "14:30",
 			"endHour": "18:30",
 			"name": "Sightseeing and leisure activities",
 			"content": "No details"
 		},
 		{
 			"startHour": "18:30",
 			"endHour": "19:30",
 			"name": "Dinner",
 			"content": "No details"
 		},
 		{
 			"startHour": "19:30",
 			"endHour": "20:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "20:30",
 			"endHour": "23:00",
 			"name": "ISWinT Parade",
 			"content": "No details"
 		},
 		{
 			"startHour": "23:00",
 			"endHour": "24:00",
 			"name": "ISWinT Concert",
 			"content": "No details"
 		}
 		]
 	},
 	{
 		"date": "31.07.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "09:00",
 			"name": "Wake-up time and road to workshop location",
 			"content": "No details"
 		},
 		{
 			"startHour": "9:00",
 			"endHour": "13:30",
 			"name": "Workshop & Breakfast",
 			"content": "No details"
 		},
 		{
 			"startHour": "13:30",
 			"endHour": "14:30",
 			"name": "Lunch",
 			"content": "No details"
 		},
 		{
 			"startHour": "15:00",
 			"endHour": "15:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "15:30",
 			"endHour": "17:00",
 			"name": "International Day preparation",
 			"content": "No details"
 		},
 		{
 			"startHour": "17:00",
 			"endHour": "21:30",
 			"name": "International Day",
 			"content": "No details"
 		},
 		{
 			"startHour": "21:30",
 			"endHour": "24:00",
 			"name": "Open Mic Night",
 			"content": "No details"
 		}
 		]
 	},
 	{
 		"date": "01.08.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "09:00",
 			"name": "Wake-up time and road to workshop location",
 			"content": "No details"
 		},
 		{
 			"startHour": "9:00",
 			"endHour": "13:30",
 			"name": "Workshop & Breakfast",
 			"content": "No details"
 		},
 		{
 			"startHour": "13:30",
 			"endHour": "14:30",
 			"name": "Lunch",
 			"content": "No details"
 		},
 		{
 			"startHour": "14:30",
 			"endHour": "19:30",
 			"name": "International Night preparation",
 			"content": "No details"
 		},
 		{
 			"startHour": "19:30",
 			"endHour": "21:00",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "21:00",
 			"endHour": "24:00",
 			"name": "International Night",
 			"content": "No details"
 		}
 		]
 	},
 	{
 		"date": "02.08.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "09:00",
 			"name": "Wake-up time and road to workshop location",
 			"content": "No details"
 		},
 		{
 			"startHour": "9:00",
 			"endHour": "13:30",
 			"name": "Workshop & Breakfast",
 			"content": "No details"
 		},
 		{
 			"startHour": "13:30",
 			"endHour": "14:30",
 			"name": "Lunch",
 			"content": "No details"
 		},
 		{
 			"startHour": "15:00",
 			"endHour": "15:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "15:30",
 			"endHour": "18:30",
 			"name": "ISWinT Olympics",
 			"content": "No details"
 		},
 		{
 			"startHour": "18:30",
 			"endHour": "19:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "20:00",
 			"endHour": "20:30",
 			"name": "Dinner",
 			"content": "No details"
 		},
 		{
 			"startHour": "20:30",
 			"endHour": "21:30",
 			"name": "White T-Shirt Party",
 			"content": "No details"
 		}
 		]
 	},
 	{
 		"date": "03.08.2016",
 		"items": [
 		{
 			"startHour": "08:50",
 			"endHour": "09:00",
 			"name": "Wake-up time and road to workshop location",
 			"content": "No details"
 		},
 		{
 			"startHour": "9:00",
 			"endHour": "13:30",
 			"name": "Workshop & Breakfast",
 			"content": "No details"
 		},
 		{
 			"startHour": "13:30",
 			"endHour": "14:30",
 			"name": "Lunch",
 			"content": "No details"
 		},
 		{
 			"startHour": "15:00",
 			"endHour": "15:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "15:30",
 			"endHour": "19:30",
 			"name": "Workshow",
 			"content": "No details"
 		},
 		{
 			"startHour": "20:00",
 			"endHour": "20:30",
 			"name": "Dinner",
 			"content": "No details"
 		},
 		{
 			"startHour": "20:30",
 			"endHour": "21:30",
 			"name": "Free time",
 			"content": "No details"
 		},
 		{
 			"startHour": "21:30",
 			"endHour": "24:00",
 			"name": "See you again Party",
 			"content": "No details"
 		}
 		]
 	}
 	]

 	$scope.init = function() {
 		$rootScope.currentView = "schedule";
 		$scope.calculateDate();
 		$scope.calculateSchedule();
 	};

 	$scope.setCurrentTab = function (tab) {
 		$scope.currentTab = tab;
 	};

 	$scope.isCurrentTab = function(tab) {
 		return (tab == $scope.currentTab);
 	};

 	$scope.calculateDate = function() {
 		var d = new Date();
 		var day = d.getDate();
 		var month = d.getMonth() + 1;
 		var year = d.getFullYear();

 		if(day == 25 && month == 7 && year == 2016) $scope.currentTab = 1;
 		else if(day == 26 && month == 7 && year == 2016) $scope.currentTab = 2;
 		else if(day == 27 && month == 7 && year == 2016) $scope.currentTab = 3;
 		else if(day == 28 && month == 7 && year == 2016) $scope.currentTab = 4;
 		else if(day == 29 && month == 7 && year == 2016) $scope.currentTab = 5;
 		else if(day == 30 && month == 7 && year == 2016) $scope.currentTab = 6;
 		else if(day == 31 && month == 7 && year == 2016) $scope.currentTab = 7;
 		else if(day == 1 && month == 8 && year == 2016) $scope.currentTab = 8;
 		else if(day == 2 && month == 8 && year == 2016) $scope.currentTab = 9;
 		else if(day == 3 && month == 8 && year == 2016) $scope.currentTab = 10;
 	}

 	$scope.calculateSchedule = function() {
 		var d = new Date();
 	// 	var day = "19"//d.getDate();
 	// 	var month = "6"//d.getMonth();
 	// 	var year = "2016"//d.getFullYear();
 	// 	var minutes = "35"//d.getMinutes();
		// var hour = "18"//d.getHours();

		var day = d.getDate();
 		var month = d.getMonth();
 		var year = d.getFullYear();
 		var minutes = d.getMinutes();
		var hour = d.getHours();

 		for(i = 0; i < $scope.schedule.length; i++)
 		{
 			var date = $scope.schedule[i].date;
 			var dateElements = date.split(".");		
 			
 			for(j = 0;j < $scope.schedule[i].items.length; j++) {
 				var startHourElements = $scope.schedule[i].items[j].startHour.split(":");
 				var endHourElements = $scope.schedule[i].items[j].endHour.split(":");

				var moment = new Date(year,month,day,hour,minutes);
				var s = new Date(dateElements[2],dateElements[1]-1,dateElements[0],startHourElements[0],startHourElements[1]);
				var e = new Date(dateElements[2],dateElements[1]-1,dateElements[0],endHourElements[0],endHourElements[1]);

				if (moment >= s && moment <= e) {
				    $scope.schedule[i].items[j].class = "is-current";
				} 
				else if (moment < s) {
				    $scope.schedule[i].items[j].class = "is-future";
				    $scope.schedule[i].items[j].hourToEvent = ((s.getTime()-moment.getTime()) / 3600000).toFixed(0);
				}
				else if (moment > e) {
				    $scope.schedule[i].items[j].class = "is-completed";
				}
			}
 		}
 	}

 	$scope.init();
 });
