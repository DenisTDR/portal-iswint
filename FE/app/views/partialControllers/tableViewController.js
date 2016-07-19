/**
 * Created by NM on 7/6/2016.
 */

views
    .controller('TableViewController',
        function($scope, $rootScope, $uibModal, $stateParams, CachingService,
                 OrganizersService, ArrivalsService, PropertyService,
                 ParticipantsService, ModelsService, RoomsService,
                 CountriesService, WorkshopsService, MentorsService, SantinelService, Notification) {
        console.log("loading TableViewController with: " + $scope.typeName);
        $scope.PropertyService = PropertyService;
        $scope.pageTitle = "";
        $scope.advancedFiltersAreShown = false;

        $scope.models = null;
        $scope.type = null;

        $scope.canEdit = true;

        // Sorting
        $scope.propertyName = 'FirstName';
        $scope.reverse = false;

        $scope.depBag = {};

        var Service = null;

        $scope.initParent = function () {
            switch ($scope.typeName) {
                case "organizer":
                    Service = OrganizersService;
                    $scope.pageTitle = "Organizers";
                    break;
                case "participant":
                    Service = ParticipantsService;
                    $scope.pageTitle = "Participants";
                    break;
                case "room":
                    Service = RoomsService;
                    $scope.pageTitle = "Rooms";
                    break;
                case "workshop":
                    Service = WorkshopsService;
                    $scope.pageTitle = "Workshops";
                    break;
                case "mentor":
                    Service = MentorsService;
                    $scope.pageTitle = "Mentors";
                    break;
                case "country":
                    Service = CountriesService;
                    break;
                case "arrival":
                    Service = ArrivalsService;
                    break;
                case "santinel":
                    Service = SantinelService;
                    $scope.pageTitle = "Santinel Schedule"
                    break;
            }
            if(Service == null) {
                console.log("invalid type in TableViewController: " + $scope.typeName);
                return;
            }
            loadModels();
            loadType();

        };


        $scope.loaded = function(){
            return $scope.type != null && $scope.models;
        };


        var loadModels = function () {
            Service.getAll().then(function (data) {
                // console.log("got models: ", data.data);
                $scope.models = data.data;
                rebuild($scope.models);

                checkAutoOpenModal();
            }).catch(function (data) {
                console.log("err", data);
            }).finally(function () {
                $scope.loading = false;
            });
        };

        var loadType = function () {
            console.log("getting type: " + $scope.typeName + " from:", ModelsService);
            ModelsService.getModelType($scope.typeName).then(function(data) {
                $scope.type = data.data;
                var cacheKey = "prop_visibility_" + $scope.typeName;
                if(CachingService.contains(cacheKey)) {
                    $scope.type.Properties = CachingService.get(cacheKey);
                }
                else {
                    ForEachProperty($scope.type.Properties, function(pName, pValue) {
                        pValue.visible = true;
                    });
                }
                // console.log("got type: ", type);
                checkAutoOpenModal();
            });
        };
        

        console.log("loaded TableViewController");

        var rebuild = function(array) {
            var refArr = {};
            array.forEach(function(item){
                recMethod(item, refArr);
            });
            // console.log(refArr);
        };

        var recMethod = function(obj, refArr){
            if(obj["$id"]) {
                refArr[obj["$id"]] = obj;
                ForEachProperty(obj, function(propName, propValue){
                    if(typeof obj[propName] == "object" && obj[propName]){

                        if(obj[propName]["$ref"]){
                            obj[propName] = refArr[obj[propName]["$ref"]];
                        }
                        else {
                            recMethod(obj[propName], refArr);
                        }
                    }
                });
            }
        };

        var checkAutoOpenModal = function (){
            if(!$scope.loaded()) {
                return;
            }
            if($stateParams.Id) {
                for(var i = 0; i < $scope.models.length; i++) {
                    if($scope.models[i].Id == $stateParams.Id) {
                        var action = $stateParams.Action?$stateParams.Action:"view";
                        console.log(action + " to " + $stateParams.Id);
                        $scope.modelAction($scope.models[i], action);
                        break;
                    }
                }
            }
        };

        $scope.showProperty = function(property) {
            return property.visible
                && (!property.OrganizerOnly || $rootScope.isOrganizer)
                && property.VisibleInTable
                && (!property.AdminOnly || $rootScope.isAdmin);
        };

        $scope.showPropertyVisibleCheckbox = function(property) {
            return (!property.OrganizerOnly || $rootScope.isOrganizer)
                && property.VisibleInTable
                && (!property.AdminOnly || $rootScope.isAdmin);
        };

        $scope.propertyVisibleChanged = function(property) {
            var cacheKey = "prop_visibility_" + $scope.typeName;
            CachingService.set(cacheKey, $scope.type.Properties);
        };

        $scope.propertyChanged = function(item, property) {
            // console.log("changed " + property.Name + " to ", item[property.Name]);
            // console.log(this);
            var propBag = {};
            propBag[property.Name] = item[property.Name];
            Service.saveProperties(item.Id, propBag).then(function (data) {
                // console.log("changed?");
            }).catch(function(data){
                // console.log("err", data);
            }).finally(function () {
                // console.log("finally");
            });
        };

        $scope.modelAction = function(model, action) {

            if(action == "remove") {
                removeModel(model);
                return;
            }
            if(action != "edit" && action != "view" && action != "new") {
                console.log("invalid action: ", action);
                return;
            }

            var modalInstance = $uibModal.open({
                templateUrl: 'views/modals/viewModelModal.html',
                controller: 'viewModelModalController',
                size: 'lg',
                resolve: {
                    bag: function () {
                        return {
                            type: $scope.type,
                            model: model,
                            action: action,
                            depBag: $scope.depBag,
                            Service: Service
                        };
                    }
                }
            });

            modalInstance.result.then(function (theItem) {
                console.log("result ok with: ", theItem);
                if(action == "new") {
                    $scope.models.push(theItem);
                }
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };

        var removeModel = function (model) {
            console.log("removing");

            var removeModalInstance = $uibModal.open({
                templateUrl: 'views/modals/confirm/confirm.html',
                controller: 'RemoveConfirmInstanceController',
                size: 'md',
                resolve: {
                    model: function() {
                        return model;
                    },
                    type: function() {
                        return $scope.type;
                    },
                    Service: function() {
                        return Service;
                    }
                }
            });
            removeModalInstance.result.then(function () {
                var waitingNotification = Notification.info({message: 'Deleting ...'});
                console.log(waitingNotification);
                Service.removeModel(model.Id).then(function(data){
                    console.log("removed ", data);

                    Notification.success({message: 'Success'});
                    for(var i = 0; i < $scope.models.length; i++){
                        if($scope.models[i].Id == model.Id){
                            $scope.models.splice(i, 1);
                            return;
                        }
                    }
                });
            }, function () {
                console.log('not deleting');
            });
        };

        $scope.sortBy = function(propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };
    });