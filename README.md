# kevast-chrome.js
[![Dependencies](https://img.shields.io/david/kevast/kevast-chrome.js.svg?style=flat-square)](https://david-dm.org/kevast/kevast-chrome.js)
[![Dev Dependencies](https://img.shields.io/david/dev/kevast/kevast-chrome.js.svg?style=flat-square)](https://david-dm.org/kevast/kevast-chrome.js?type=dev)
[![Package Version](https://img.shields.io/npm/v/kevast-chrome.svg?style=flat-square)](https://www.npmjs.com/package/kevast-chrome)
[![Open Issues](https://img.shields.io/github/issues-raw/kevast/kevast-chrome.js.svg?style=flat-square)](https://github.com/kevast/kevast-chrome.js/issues)
[![MIT License](https://img.shields.io/npm/l/kevast-chrome.svg?style=flat-square)](https://github.com/kevast/kevast-chrome.js/blob/master/LICENSE)

A chrome storage for [kevast.js](https://github.com/kevast/kevast.js).

## Installation
### Node.js
Using yarn
```bash
yarn add kevast-chrome
```

Using npm
```bash
npm install kevast-chrome
```

### Browser
```html
<script src="https://cdn.jsdelivr.net/npm/kevast-chrome/dist/kevast-chrome.min.js"></script>
```

## Usage
```javascript
const { Kevast } = require('kevast');
const { KevastChrome } = require('kevast-chrome');
const assert = require('assert');

(async () => {
  const kevast = new Kevast(new KevastChrome());
  await kevast.set('key', 'value');
  assert(await kevast.get('key') === 'value');
})();
```
