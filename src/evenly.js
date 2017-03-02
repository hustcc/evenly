/**
 * Copyright (c) 2017 hustcc
 * License: MIT
 * Version: %%GULP_INJECT_VERSION%%
 * GitHub: https://github.com/hustcc/evenly
**/

/**
 *  evenly( gold, robber, fixed ) -> Array
 *  - gold (Number): the number of gold.
 *  - robber(Number): the number of robber who will divide the gold.
 *  - fixed (Number): the decimal number length.
 *  
 *  return the array how divide the gold evenly
**/
module.exports = function(gold, robber, fixed) {
  if (fixed === undefined) fixed = 2;

  var pow10 = Math.pow(10, fixed);
  gold *= pow10;

  var divide = Math.floor(gold / robber),
    remain = gold - divide * robber;
  
  var result = [], cnt = 0;
  // 0 .. n-1 element
  while(++ cnt && cnt <= robber) {
    result.push((cnt <= remain ? divide + 1 : divide) / pow10);
  }
  return result;
};