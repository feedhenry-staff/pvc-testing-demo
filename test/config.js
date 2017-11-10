let Config = require('../lib/config')
var expect = require('chai').expect
var assert = require('chai').assert


describe('Testing DB Functions', function() {

    it('Config object construction', () => {
        let cfg = new Config()
        assert.isObject(cfg)
        assert.isDefined(cfg.getRaw, 'load member should be defined')
    })

    it('Config.getRaw should load config file', () => {

      let cfg = new Config()
      let raw = require('fs').readFileSync('./store/db.json').toString() 
      raw = JSON.parse(raw)

      let obj = cfg.getRaw()

      assert.deepEqual(obj, raw)
    })
  
})
