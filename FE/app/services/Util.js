/**
 * Created by NM on 7/19/2016.
 */

portal.service("Util", function ($controller, $injector) {
    this.controllerExists = function(name) {
        try {
            // inject '$scope' as a dummy local variable
            // and flag the $controller with 'later' to delay instantiation
            $controller(name, { "$scope": {} }, true);
            return true;
        }
        catch(ex) {
            return false;
        }
    };

    this.serviceExists = function(name) {
        try {
            $injector.get(name);
            return true;
        }
        catch (ex) {
            return false;
        }
    }
});