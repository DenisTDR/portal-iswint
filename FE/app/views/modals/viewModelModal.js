/**
 * Created by NM on 6/29/2016.
 */

modals
    .controller('viewModelModalController',
        function ($scope, $rootScope, $uibModalInstance, $uibModal, bag, RoomsService, CountriesService,
                  WorkshopsService, OrganizersService, MentorsService, PropertyService,Notification) {
            console.log("viewModelModalController loaded");
            $scope.type = bag.type;
            $scope.model = Clone(bag.model ? bag.model : {});
            $scope.editing = bag.action != "view";
            $scope.rooms = {all: []};
            $scope.countries = {all: []};
            $scope.workshops = {all: []};
            $scope.organizers = {all: []};
            $scope.mentors = {all: []};
            $scope.bag = bag;
            $scope.currentTab = 1;

            $scope.propDefaultView = {};
            $scope.propTabbedView = {};
            
            var ModelService = bag.Service;
            var propertyBag = {};
            var originalModel = bag.model ? bag.model : {};
            var modifiedPropertiesCount = 0;

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
                PropertyService.convertDatePropertiesToString(newModel, $scope.type);

               // var waitingModal = $rootScope.messageBox("", "Please wait ...", false);

                ModelService.addNew(newModel).then(function(data) {
                   console.log("ok", data);
                    newModel.Id = data.data.Id;
                    var successMessage =
                         Notification.success({message: 'Success'});
                    setTimeout(function(){
                       // successMessage.close();
                        
                    }, 0);
                }).catch(function(data){
                    Notification.error({message: 'Error'});
                }).finally(function(){
                    $uibModalInstance.close(newModel);
                
                });
    
            };

            var updateModel = function () {
                if(CountProperties(propertyBag) == 0) {
                    console.log("nothing to save ...");
                    $rootScope.messageBox("...", "Nothing to save ...", true, "md", 100 * 1000);
                }
                // console.log(propertyBag);
                var editingObject = Clone(propertyBag);
                // console.log(editingObject);
                // console.log(propertyBag);

                PropertyService.convertDatePropertiesToString(editingObject, $scope.type);

                var waitingModal = $rootScope.messageBox("", "Please wait ...", false);

                ModelService.saveProperties($scope.model.Id, editingObject).then(function(data) {
                    console.log(data);

                    ForEachProperty(editingObject, function(propertyName, propertyValue) {
                        originalModel[propertyName] = editingObject[propertyName];
                        console.log("set " + propertyName + " to " + editingObject[propertyName]);
                    });
                    var successMessage =
                        $rootScope.messageBox("Success!", "Saved!", true, "sm");
                    setTimeout(function(){
                        successMessage.close();
                        $uibModalInstance.close(originalModel, bag.action);
                    }, 1000);
                }).catch(function(data){
                    console.log(data);
                    $rootScope.messageBox("Error", "The server says: " + data.data.Message, true, "md", 100 * 1000);
                }).finally(function() {
                    waitingModal.close();
                });
            };

            $scope.init = function () {

                PropertyService.convertDatePropertiesToDateObject(originalModel, $scope.type);
                PropertyService.convertDatePropertiesToDateObject($scope.model, $scope.type);

                console.log("type = ", $scope.type);
                if(!$scope.type.TabbedModal){
                    PropertyService.splitIntoDefaultView($scope.type, $scope.propDefaultView);
                }
                else {
                    PropertyService.splitIntoTabs($scope.type, $scope.propTabbedView, $scope.showProperty);
                    $scope.currentTab = $scope.propTabbedView.firstTab;
                    console.log($scope.propTabbedView);
                }

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

                $scope.title = PropertyService.getTitleForModal($scope.type, $scope.model);
                if($scope.model['Genre'] == 'Male') $scope.model['PhotoUrl'] = 'images/profile_male.png';
                else $scope.model['PhotoUrl'] = 'images/profile_female.png';
            };


            var loadRooms = function(){
                console.log("loading rooms");
                RoomsService.getAll().then(function(data){
                    $scope.rooms.all = data.data;
                    // console.log("got rooms", rooms);
                }).catch(function(data){
                    console.log("err getting rooms", data);
                });
            };
            var loadCountries = function(){
                console.log("loading countries");
                CountriesService.getAll().then(function(data){
                    $scope.countries.all = data.data;
                    console.log("got countries");
                }).catch(function(data){
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



            $scope.showProperty = function(property) {
                return (!property.OrganizerOnly || $rootScope.isOrganizer)
                    && (!property.AdminOnly || $rootScope.isAdmin);
            };
            
            $scope.canEdit = function(property) {
                return ($rootScope.isAdmin || $rootScope.isOrganizer) && $scope.editing && !property.ReadOnly;
            };

            $scope.PropertyService = PropertyService;
            $scope.isCurrentTab = function(tab) {
                return (tab.Name == $scope.currentTab);
            };

            $scope.setCurrentTab = function (tab) {
                $scope.currentTab = tab.Name;
            };
            
            $scope.init();

        });