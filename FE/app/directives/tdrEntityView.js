/**
 * Created by NM on 7/14/2016.
 */

portal.directive('tdrEntityView', function() {
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
});