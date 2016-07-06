/**
 * Created by NM on 7/6/2016.
 */



views
    .controller('TableViewController', function($scope, $uibModal, OrganizersService, ParticipantsService, ModelsService, RoomsService, CountriesService) {
        console.log("loading TableViewController with: " + $scope.typeName);

        $scope.isOrganizer = true;
        $scope.isAdmin = false;

        $scope.models = null;
        $scope.type = null;
        var Service = null;

        $scope.initParent = function () {
            switch ($scope.typeName) {
                case "organizer":
                    Service = OrganizersService;
                    break;
                case "participant":
                    Service = ParticipantsService;
                    break;
                case "room":
                    Service = RoomsService;
                    break;
            }
            if(Service == null) {
                console.log("invalid type in TableViewController: " + $scope.typeName);
                return;
            }
            loadModels();
            loadType();
        };


        var loadModels = function () {
            Service.getAll().then(function (data) {
                console.log("got models: ", data.data);
                $scope.models = data.data;
                rebuild($scope.models);
            }).catch(function (data) {
                console.log("err", data);
            }).finally(function () {
                $scope.loading = false;
            });
        };

        var loadType = function () {
            ModelsService.getModelType($scope.typeName, function(type) {
                $scope.type = type;
                ForEachProperty($scope.type.Properties, function(pName, pValue) {
                    pValue.visible = true;
                });
                console.log("got type: ", type);

            });
        };

        console.log("loaded TableViewController");

        var rebuild = function(array) {
            var refArr = {};
            array.forEach(function(item){
                recMethod(item, refArr);
            });
            console.log(refArr);
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

        $scope.showProperty = function(property) {
            return property.visible
                && (!property.OrganizerOnly || $scope.isOrganizer)
                && property.VisibleInTable
                && (!property.AdminOnly || $scope.isAdmin);
        };

        $scope.showPropertyVisibleCheckbox = function(property) {
            return (!property.OrganizerOnly || $scope.isOrganizer)
                && property.VisibleInTable;
        };


        $scope.propertyChanged = function(item, property) {
            console.log("changed " + property.Name + " to " + item[property.Name]);
            // console.log(this);
            var propBag = {};
            propBag[property.Name] = item[property.Name];
            Service.saveProperties(item.Id, propBag).then(function (data) {
                console.log("changed?");
            }).catch(function(data){
                console.log("err", data);
            }).finally(function () {
                console.log("finally");
            });
        };

        $scope.modelAction = function(model, action) {

            var modalInstance = $uibModal.open({
                templateUrl: 'views/modals/viewModelModal.html',
                controller: 'viewModelModalController',
                size: 'lg',
                resolve: {
                    type: function () {
                        return $scope.type;
                    },
                    model: function () {
                        return model;
                    },
                    isOrganizer: function () {
                        return $scope.isOrganizer;
                    },
                    editing: function() {
                        return action == "edit";
                    },
                    isAdmin: function() {
                        return $scope.isAdmin;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };


    });