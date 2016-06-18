'use strict';

describe('portal.version module', function() {
  beforeEach(module('portal.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
