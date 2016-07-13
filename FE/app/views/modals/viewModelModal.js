/**
 * Created by NM on 6/29/2016.
 */

modals
    .controller('viewModelModalController',
        function ($scope, $uibModalInstance, $uibModal, bag, RoomsService, CountriesService,
                  WorkshopsService, OrganizersService, MentorsService) {
            console.log("viewModelModalController loaded");
            $scope.type = bag.type;
            $scope.model = Clone(bag.model ? bag.model : {});
            $scope.editing = bag.action != "view";
            $scope.isOrganizer = bag.isOrganizer;
            $scope.isAdmin = bag.isAdmin;
            $scope.rooms = {all: []};
            $scope.countries = {all: []};
            $scope.workshops = {all: []};
            $scope.organizers = {all: []};
            $scope.mentors = {all: []};
            $scope.bag = bag;
            var ModelService = bag.Service;
            var propertyBag = {};
            var originalModel = bag.model ? bag.model : {};
            
            $scope.propertyChanged = function(model, property) {
                // console.log(property.Name + " changed to ");
                // console.log(model[property.Name]);
                // console.log(originalModel[property.Name]);
                // console.log(model);
                if(bag.action == "edit") {
                    if (!Equals(model[property.Name], originalModel[property.Name])) {
                        propertyBag[property.Name] = model[property.Name];
                        // console.log("set new value");
                    }
                    else {
                        delete propertyBag[property.Name];
                        // console.log("cleared value");
                    }
                }
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            $scope.save = function () {
                if(bag.action == "new"){
                    saveNewModel();
                }
                else {
                    updateModel();
                }
            };

            var saveNewModel = function () {
                // console.log("saving");
                // console.log($scope.model);
                var newModel = Clone($scope.model);
                normalizeDates(newModel);

                var waitingModal = $scope.messageBox("", "Please wait ...", false);

                ModelService.addNew(newModel).then(function(data) {
                   console.log("ok", data);
                    newModel.Id = data.data.Id;
                    var successMessage =
                        $scope.messageBox("Success!", "Saved!", true, "sm");
                    setTimeout(function(){
                        successMessage.close();
                        $uibModalInstance.close(newModel);
                    }, 2000);
                }).catch(function(data){
                    console.log("err", data);
                }).finally(function(){
                    waitingModal.close();
                });
            };

            var normalizeDates = function (obj) {
                ForEachProperty($scope.type.Properties, function(propertyName, propertyBag) {
                    if(propertyBag.Type == "date" && obj[propertyName] && obj[propertyName].constructor == Date){
                        obj[propertyName] = obj[propertyName].toISOString();
                    }
                });
            };

            var updateModel = function () {
                // console.log(propertyBag);
                var editingObject = Clone(propertyBag);
                // console.log(editingObject);
                // console.log(propertyBag);

                normalizeDates(editingObject);

                var waitingModal = $scope.messageBox("", "Please wait ...", false);

                ModelService.saveProperties($scope.model.Id, editingObject).then(function(data) {
                    console.log(data);

                    ForEachProperty(editingObject, function(propertyName, propertyValue) {
                        originalModel[propertyName] = editingObject[propertyName];
                        console.log("set " + propertyName + " to " + editingObject[propertyName]);
                    });
                    var successMessage =
                        $scope.messageBox("Success!", "Saved!", true, "sm");
                    setTimeout(function(){
                        successMessage.close();
                        $uibModalInstance.close(originalModel, bag.action);
                    }, 2000);
                }).catch(function(data){
                    console.log(data);
                    $scope.messageBox("Error", "The server says: " + data.data.Message, true);
                }).finally(function() {
                    waitingModal.close();
                });
            };

            $scope.init = function () {
                $scope.LeftViewProperties = [];
                $scope.RightViewProperties = [];
                $scope.UnderImageProperties = [];
                ForEachProperty($scope.type.Properties, function(propertyName, propertyBag) {
                    if(propertyBag.Type == "photourl") {
                        $scope.photoProperty = propertyBag;
                        //console.log(propertyBag);
                    }
                    else if(propertyBag.UnderImage) {
                        $scope.UnderImageProperties.push(propertyBag);
                    }
                    else if(propertyBag.MainView){
                        $scope.LeftViewProperties.push(propertyBag);
                    }
                    else {
                        $scope.RightViewProperties.push(propertyBag);
                    }
                    if(propertyBag.Type == "date") {
                        originalModel[propertyName] = new Date(originalModel[propertyName]);
                        $scope.model[propertyName] = new Date( $scope.model[propertyName]);
                    }
                });

                if(bag.depBag.rooms){
                    loadRooms();
                }
                if(bag.depBag.countries){
                    loadCountries();
                }
                if(bag.depBag.workshops) {
                    loadWorkshops();
                }
                if(bag.depBag.organizers) {
                    loadOrganizers();
                }
                if(bag.depBag.mentors) {
                    loadMentors();
                }

            };


            var loadRooms = function(){
                console.log("loading rooms");
                RoomsService.getAllCached(function(rooms){
                    $scope.rooms.all = rooms;
                    console.log("got rooms", rooms);
                }, function(data){
                    console.log("err getting rooms", data);
                });
            };
            var loadCountries = function(){
                console.log("loading countries");
                CountriesService.getAll(function(countries){
                    $scope.countries.all = countries;
                    console.log("got countries", countries);
                }, function(data){
                    console.log("err getting countries", data);
                });
            };
            var loadOrganizers = function(){
                console.log("loading organizers");
                OrganizersService.getAll().then(function(data){
                    console.log("got organizers", data.data);
                    $scope.organizers.all = data.data;
                }).catch(function(data){
                    console.log("err getting organizers", data);
                });
            };
            var loadWorkshops = function(){
                console.log("loading workshops");
                WorkshopsService.getAll().then(function(data){
                    console.log("got workshops", data.data);
                    $scope.workshops.all = data.data;
                }).catch(function(data){
                    console.log("err getting workshops", data);
                }).finally(function() {
                    // console.log("finally getting workshops");
                });
            };
            var loadMentors = function(){
                console.log("loading mentors");
                MentorsService.getAll().then(function(data){
                    console.log("got mentors", data.data);
                    $scope.mentors.all = data.data;
                }).catch(function(data){
                    console.log("err getting mentors", data);
                }).finally(function() {
                    // console.log("finally getting mentors");
                });
            };

            $scope.messageBox = function(title, message, canClose, size) {
                if(!size) {
                    size = "sm";
                }
                return $uibModal.open({
                    templateUrl: 'views/modals/messageModal.html',
                    controller: 'messageModalController',
                    backdrop: 'static',
                    size: size,
                    keyboard: false,
                    resolve: {
                        title: function() {
                            return title;
                        },
                        message: function() {
                            return message;
                        },
                        canClose: function() {
                            return canClose;
                        }
                    }
                });
            };

            $scope.showProperty = function(property) {
                return property.visible
                    && (!property.OrganizerOnly || $scope.isOrganizer)
                    && (!property.AdminOnly || $scope.isAdmin);
            };
            
            $scope.canEdit = function(property) {
                return $scope.isOrganizer && $scope.editing && !property.ReadOnly;
            };


            $scope.init();

        });