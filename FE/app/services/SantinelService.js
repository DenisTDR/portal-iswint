portal.service("SantinelService", function ($http, CachingService) {
    this.endPoint = backendUrl + "Santinel/";
    bindBasicModelService(this, $http, CachingService);
    
});