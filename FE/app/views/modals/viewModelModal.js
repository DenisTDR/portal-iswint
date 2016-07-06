/**
 * Created by NM on 6/29/2016.
 */

modals
    .controller('viewModelModalController',
        function ($scope, type, $uibModalInstance, $uibModal, model, isOrganizer, isAdmin, editing, RoomsService, OrganizersService) {
            console.log("viewModelModalController loaded");
            $scope.type = type;
            $scope.model = Clone(model);
            $scope.editing = editing;
            $scope.isOrganizer = isOrganizer;
            $scope.isAdmin = isAdmin;
            $scope.rooms = {allRooms: []};
            var propertyBag = {};
            var originalModel = model;
            
            $scope.propertyChanged = function(model, property) {
                console.log(property.Name + " changed to ");
                console.log(model[property.Name]);
                console.log(originalModel[property.Name]);
                // console.log(model);
                if(!Equals(model[property.Name], originalModel[property.Name])) {
                    propertyBag[property.Name] = model[property.Name];
                    console.log("set new value");
                }
                else {
                    delete propertyBag[property.Name];
                    console.log("cleared value");
                }
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };

            $scope.save = function () {
                console.log(propertyBag);
                var editingObject = Clone(propertyBag);
                console.log(editingObject);
                console.log(propertyBag);

                ForEachProperty($scope.type.Properties, function(propertyName, propertyBag) {
                    if(propertyBag.Type == "date" && editingObject[propertyName]){
                        editingObject[propertyName] = editingObject[propertyName].toISOString();
                    }
                });

                var waitingModal = $scope.messageBox("", "Please wait ...", false);

                OrganizersService.saveProperties(model.Id, editingObject).then(function(data) {
                    console.log(data);

                    ForEachProperty(editingObject, function(propertyName, propertyValue) {
                        originalModel[propertyName] = editingObject[propertyName];
                        console.log("set " + propertyName + " to " + editingObject[propertyName]);
                    });
                    var successMessage =
                        $scope.messageBox("Success!", "Saved!", true, "sm");
                    setTimeout(function(){
                        successMessage.close();
                        $scope.cancel();
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
                RoomsService.getAllCached(function(rooms){
                    $scope.rooms.allRooms = rooms;

                }, function(data){
                    console.log("err getting rooms", data);
                });
            };

            $scope.init();


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
        });