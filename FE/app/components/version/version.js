'use strict';

angular.module('portal.version', [
  'portal.version.interpolate-filter',
  'portal.version.version-directive'
])

.value('version', '0.1');
