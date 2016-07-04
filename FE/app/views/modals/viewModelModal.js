/**
 * Created by NM on 6/29/2016.
 */

modals
    .controller('viewModelModalController',
        function ($scope, type, $uibModalInstance, $uibModal, item, isOrganizer, isAdmin, editing, RoomsService, OrganizersService) {
            console.log("viewModelModalController loaded");
            $scope.type = type;
            $scope.item = Clone(item);
            $scope.editing = editing;
            $scope.isOrganizer = isOrganizer;
            $scope.isAdmin = isAdmin;
            $scope.rooms = {allRooms: []};
            var propertyBag = {};
            var originalItem = item;
            
            $scope.propertyChanged = function(item, property) {
                console.log(property.Name + " changed to ");
                console.log(item[property.Name]);
                console.log(originalItem[property.Name]);
                // console.log(item);
                if(!Equals(item[property.Name], originalItem[property.Name])) {
                    propertyBag[property.Name] = item[property.Name];
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

                OrganizersService.saveProperties(item.Id, editingObject).then(function(data) {
                    console.log(data);

                    ForEachProperty(editingObject, function(propertyName, propertyValue) {
                        originalItem[propertyName] = editingObject[propertyName];
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
                ForEachProperty($scope.type.Properties, function(propertyName, propertyBag) {
                    if(propertyBag.Type == "photourl") {
                        $scope.photoProperty = propertyBag;
                        //console.log(propertyBag);
                    }
                    else if(propertyBag.MainView){
                        $scope.LeftViewProperties.push(propertyBag);
                    }
                    else {
                        $scope.RightViewProperties.push(propertyBag);
                    }
                    if(propertyBag.Type == "date") {
                        originalItem[propertyName] = new Date(originalItem[propertyName]);
                        $scope.item[propertyName] = new Date( $scope.item[propertyName]);
                    }
                });
                RoomsService.getAll(function(rooms){
                    $scope.rooms.allRooms = rooms;

                }, function(data){
                    console.log("err getting rooms", data);
                });
            };

            $scope.init();


            $scope.popup1 = {
                opened: false
            };
            $scope.model = {fku: null};
            $scope.open1 = function() {
                $scope.popup1.opened = true;
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

            ///TODO: resolve adminOnly
            $scope.showProperty = function(property) {
                return property.visible
                    && (!property.OrganizerOnly || $scope.isOrganizer)
                    && (!property.AdminOnly || $scope.isAdmin);
            };
        });