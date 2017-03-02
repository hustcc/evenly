'use strict';
var test = require('tape');
var evenly = require('..');

test('evenly show be tested', function (t) {
  // 100 / 3, fixed = 2 => [33.33, 33.33, 33.34]
  t.deepEqual(evenly(100, 3, 2), [33.34, 33.33, 33.33]);

  // 100 / 6, fixed = 6 => [16.667, 16.667, 16.667, 16.667, 16.666, 16.666]
  t.deepEqual(evenly(100, 6, 3), [16.667, 16.667, 16.667, 16.667, 16.666, 16.666]);

  // for gold and robber test.
  function sum(a) {
    var reducer = function add(s, item) {
      return s + item;
    };
    return a.reduce(reducer, 0); 
  }

  var result = [];
  var tmp = '';

  for (var i = 1; i < 1000; i++) {
    for (var j = 4; j < 10; j++) {
      for (var k = 0; k < 3; k++) {
        result = evenly(i, j, k);
        // sum is equal
        t.equal(Math.round(sum(result)), i, 'sum');
        // elements size
        t.equal(result.length, j, 'len');
        // decimal number length
        for (var l = 0, len = result.length; l < len; l++) {
          tmp = result[l] + '';
          if (tmp.indexOf('.') != -1)
            t.equal(tmp.length - tmp.indexOf('.') - 1 <= k, true, 'dec');
        };
      };
    };
  };

  t.end();
});