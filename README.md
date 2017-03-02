# evenly

> **evenly** is a simple javascript library to solve problem which is similar to **how to divide the gold evenly?**

**Q**: How **3 robbers** to divide **100 gold**?

**A**: 100 / 3 can not solve it. But evenly can, **`evenly(100, 3)`** can get `[33.34, 33.33, 33.33]`. Done ^_^.

[![Build Status](https://travis-ci.org/hustcc/evenly.svg?branch=master)](https://travis-ci.org/hustcc/evenly) [![npm](https://img.shields.io/npm/v/evenly.svg?style=flat-square)](https://www.npmjs.com/package/evenly) [![npm](https://img.shields.io/npm/dt/evenly.svg?style=flat-square)](https://www.npmjs.com/package/evenly) [![npm](https://img.shields.io/npm/l/evenly.svg?style=flat-square)](https://www.npmjs.com/package/evenly)


# 1. Install

> **npm install evenly**

Then import it.

```js
var evenly = require('evenly');
//or
import evenly from 'evenly';
```

Then use **evenly(gold, robber, fixed=2)** API.

```js
// 3 robber divide 100 golds, with 2 decimal.
evenly(100, 3, 1); // will return [33.4, 33.3, 33.3];

evenly(100, 6); // will return [16.67, 16.67, 16.67, 16.67, 16.66, 16.66];
```


# 2. API

The unique API is: **evenly(gold, robber, fixed=2)**.

 - **gold** (Number): the number of gold.
 - **robber** (Number): the number of robber who will divide the gold.
 - **fixed** (Number): the decimal length, default is `2`.

The api return the array which shows how to divide the gold evenly.


# 3. Build & Test

> npm install

> npm run build

> npm test


# 4. LICENSE

MIT @[hustcc](https://github.com/hustcc)
