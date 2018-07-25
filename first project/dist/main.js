/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./lib/axios */ \"./node_modules/axios/lib/axios.js\");\n\n//# sourceURL=webpack:///./node_modules/axios/index.js?");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar settle = __webpack_require__(/*! ./../core/settle */ \"./node_modules/axios/lib/core/settle.js\");\r\nvar buildURL = __webpack_require__(/*! ./../helpers/buildURL */ \"./node_modules/axios/lib/helpers/buildURL.js\");\r\nvar parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ \"./node_modules/axios/lib/helpers/parseHeaders.js\");\r\nvar isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ \"./node_modules/axios/lib/helpers/isURLSameOrigin.js\");\r\nvar createError = __webpack_require__(/*! ../core/createError */ \"./node_modules/axios/lib/core/createError.js\");\r\nvar btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ \"./node_modules/axios/lib/helpers/btoa.js\");\r\n\r\nmodule.exports = function xhrAdapter(config) {\r\n  return new Promise(function dispatchXhrRequest(resolve, reject) {\r\n    var requestData = config.data;\r\n    var requestHeaders = config.headers;\r\n\r\n    if (utils.isFormData(requestData)) {\r\n      delete requestHeaders['Content-Type']; // Let the browser set it\r\n    }\r\n\r\n    var request = new XMLHttpRequest();\r\n    var loadEvent = 'onreadystatechange';\r\n    var xDomain = false;\r\n\r\n    // For IE 8/9 CORS support\r\n    // Only supports POST and GET calls and doesn't returns the response headers.\r\n    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.\r\n    if (\"development\" !== 'test' &&\r\n        typeof window !== 'undefined' &&\r\n        window.XDomainRequest && !('withCredentials' in request) &&\r\n        !isURLSameOrigin(config.url)) {\r\n      request = new window.XDomainRequest();\r\n      loadEvent = 'onload';\r\n      xDomain = true;\r\n      request.onprogress = function handleProgress() {};\r\n      request.ontimeout = function handleTimeout() {};\r\n    }\r\n\r\n    // HTTP basic authentication\r\n    if (config.auth) {\r\n      var username = config.auth.username || '';\r\n      var password = config.auth.password || '';\r\n      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);\r\n    }\r\n\r\n    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);\r\n\r\n    // Set the request timeout in MS\r\n    request.timeout = config.timeout;\r\n\r\n    // Listen for ready state\r\n    request[loadEvent] = function handleLoad() {\r\n      if (!request || (request.readyState !== 4 && !xDomain)) {\r\n        return;\r\n      }\r\n\r\n      // The request errored out and we didn't get a response, this will be\r\n      // handled by onerror instead\r\n      // With one exception: request that using file: protocol, most browsers\r\n      // will return status as 0 even though it's a successful request\r\n      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {\r\n        return;\r\n      }\r\n\r\n      // Prepare the response\r\n      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;\r\n      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;\r\n      var response = {\r\n        data: responseData,\r\n        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)\r\n        status: request.status === 1223 ? 204 : request.status,\r\n        statusText: request.status === 1223 ? 'No Content' : request.statusText,\r\n        headers: responseHeaders,\r\n        config: config,\r\n        request: request\r\n      };\r\n\r\n      settle(resolve, reject, response);\r\n\r\n      // Clean up request\r\n      request = null;\r\n    };\r\n\r\n    // Handle low level network errors\r\n    request.onerror = function handleError() {\r\n      // Real errors are hidden from us by the browser\r\n      // onerror should only fire if it's a network error\r\n      reject(createError('Network Error', config, null, request));\r\n\r\n      // Clean up request\r\n      request = null;\r\n    };\r\n\r\n    // Handle timeout\r\n    request.ontimeout = function handleTimeout() {\r\n      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',\r\n        request));\r\n\r\n      // Clean up request\r\n      request = null;\r\n    };\r\n\r\n    // Add xsrf header\r\n    // This is only done if running in a standard browser environment.\r\n    // Specifically not if we're in a web worker, or react-native.\r\n    if (utils.isStandardBrowserEnv()) {\r\n      var cookies = __webpack_require__(/*! ./../helpers/cookies */ \"./node_modules/axios/lib/helpers/cookies.js\");\r\n\r\n      // Add xsrf header\r\n      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?\r\n          cookies.read(config.xsrfCookieName) :\r\n          undefined;\r\n\r\n      if (xsrfValue) {\r\n        requestHeaders[config.xsrfHeaderName] = xsrfValue;\r\n      }\r\n    }\r\n\r\n    // Add headers to the request\r\n    if ('setRequestHeader' in request) {\r\n      utils.forEach(requestHeaders, function setRequestHeader(val, key) {\r\n        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {\r\n          // Remove Content-Type if data is undefined\r\n          delete requestHeaders[key];\r\n        } else {\r\n          // Otherwise add header to the request\r\n          request.setRequestHeader(key, val);\r\n        }\r\n      });\r\n    }\r\n\r\n    // Add withCredentials to request if needed\r\n    if (config.withCredentials) {\r\n      request.withCredentials = true;\r\n    }\r\n\r\n    // Add responseType to request if needed\r\n    if (config.responseType) {\r\n      try {\r\n        request.responseType = config.responseType;\r\n      } catch (e) {\r\n        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.\r\n        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.\r\n        if (config.responseType !== 'json') {\r\n          throw e;\r\n        }\r\n      }\r\n    }\r\n\r\n    // Handle progress if needed\r\n    if (typeof config.onDownloadProgress === 'function') {\r\n      request.addEventListener('progress', config.onDownloadProgress);\r\n    }\r\n\r\n    // Not all browsers support upload events\r\n    if (typeof config.onUploadProgress === 'function' && request.upload) {\r\n      request.upload.addEventListener('progress', config.onUploadProgress);\r\n    }\r\n\r\n    if (config.cancelToken) {\r\n      // Handle cancellation\r\n      config.cancelToken.promise.then(function onCanceled(cancel) {\r\n        if (!request) {\r\n          return;\r\n        }\r\n\r\n        request.abort();\r\n        reject(cancel);\r\n        // Clean up request\r\n        request = null;\r\n      });\r\n    }\r\n\r\n    if (requestData === undefined) {\r\n      requestData = null;\r\n    }\r\n\r\n    // Send the request\r\n    request.send(requestData);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/adapters/xhr.js?");

/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\r\nvar Axios = __webpack_require__(/*! ./core/Axios */ \"./node_modules/axios/lib/core/Axios.js\");\r\nvar defaults = __webpack_require__(/*! ./defaults */ \"./node_modules/axios/lib/defaults.js\");\r\n\r\n/**\r\n * Create an instance of Axios\r\n *\r\n * @param {Object} defaultConfig The default config for the instance\r\n * @return {Axios} A new instance of Axios\r\n */\r\nfunction createInstance(defaultConfig) {\r\n  var context = new Axios(defaultConfig);\r\n  var instance = bind(Axios.prototype.request, context);\r\n\r\n  // Copy axios.prototype to instance\r\n  utils.extend(instance, Axios.prototype, context);\r\n\r\n  // Copy context to instance\r\n  utils.extend(instance, context);\r\n\r\n  return instance;\r\n}\r\n\r\n// Create the default instance to be exported\r\nvar axios = createInstance(defaults);\r\n\r\n// Expose Axios class to allow class inheritance\r\naxios.Axios = Axios;\r\n\r\n// Factory for creating new instances\r\naxios.create = function create(instanceConfig) {\r\n  return createInstance(utils.merge(defaults, instanceConfig));\r\n};\r\n\r\n// Expose Cancel & CancelToken\r\naxios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\r\naxios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ \"./node_modules/axios/lib/cancel/CancelToken.js\");\r\naxios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\r\n\r\n// Expose all/spread\r\naxios.all = function all(promises) {\r\n  return Promise.all(promises);\r\n};\r\naxios.spread = __webpack_require__(/*! ./helpers/spread */ \"./node_modules/axios/lib/helpers/spread.js\");\r\n\r\nmodule.exports = axios;\r\n\r\n// Allow use of default import syntax in TypeScript\r\nmodule.exports.default = axios;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * A `Cancel` is an object that is thrown when an operation is canceled.\r\n *\r\n * @class\r\n * @param {string=} message The message.\r\n */\r\nfunction Cancel(message) {\r\n  this.message = message;\r\n}\r\n\r\nCancel.prototype.toString = function toString() {\r\n  return 'Cancel' + (this.message ? ': ' + this.message : '');\r\n};\r\n\r\nCancel.prototype.__CANCEL__ = true;\r\n\r\nmodule.exports = Cancel;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/Cancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar Cancel = __webpack_require__(/*! ./Cancel */ \"./node_modules/axios/lib/cancel/Cancel.js\");\r\n\r\n/**\r\n * A `CancelToken` is an object that can be used to request cancellation of an operation.\r\n *\r\n * @class\r\n * @param {Function} executor The executor function.\r\n */\r\nfunction CancelToken(executor) {\r\n  if (typeof executor !== 'function') {\r\n    throw new TypeError('executor must be a function.');\r\n  }\r\n\r\n  var resolvePromise;\r\n  this.promise = new Promise(function promiseExecutor(resolve) {\r\n    resolvePromise = resolve;\r\n  });\r\n\r\n  var token = this;\r\n  executor(function cancel(message) {\r\n    if (token.reason) {\r\n      // Cancellation has already been requested\r\n      return;\r\n    }\r\n\r\n    token.reason = new Cancel(message);\r\n    resolvePromise(token.reason);\r\n  });\r\n}\r\n\r\n/**\r\n * Throws a `Cancel` if cancellation has been requested.\r\n */\r\nCancelToken.prototype.throwIfRequested = function throwIfRequested() {\r\n  if (this.reason) {\r\n    throw this.reason;\r\n  }\r\n};\r\n\r\n/**\r\n * Returns an object that contains a new `CancelToken` and a function that, when called,\r\n * cancels the `CancelToken`.\r\n */\r\nCancelToken.source = function source() {\r\n  var cancel;\r\n  var token = new CancelToken(function executor(c) {\r\n    cancel = c;\r\n  });\r\n  return {\r\n    token: token,\r\n    cancel: cancel\r\n  };\r\n};\r\n\r\nmodule.exports = CancelToken;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/CancelToken.js?");

/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = function isCancel(value) {\r\n  return !!(value && value.__CANCEL__);\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/cancel/isCancel.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar defaults = __webpack_require__(/*! ./../defaults */ \"./node_modules/axios/lib/defaults.js\");\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ \"./node_modules/axios/lib/core/InterceptorManager.js\");\r\nvar dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ \"./node_modules/axios/lib/core/dispatchRequest.js\");\r\n\r\n/**\r\n * Create a new instance of Axios\r\n *\r\n * @param {Object} instanceConfig The default config for the instance\r\n */\r\nfunction Axios(instanceConfig) {\r\n  this.defaults = instanceConfig;\r\n  this.interceptors = {\r\n    request: new InterceptorManager(),\r\n    response: new InterceptorManager()\r\n  };\r\n}\r\n\r\n/**\r\n * Dispatch a request\r\n *\r\n * @param {Object} config The config specific for this request (merged with this.defaults)\r\n */\r\nAxios.prototype.request = function request(config) {\r\n  /*eslint no-param-reassign:0*/\r\n  // Allow for axios('example/url'[, config]) a la fetch API\r\n  if (typeof config === 'string') {\r\n    config = utils.merge({\r\n      url: arguments[0]\r\n    }, arguments[1]);\r\n  }\r\n\r\n  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);\r\n  config.method = config.method.toLowerCase();\r\n\r\n  // Hook up interceptors middleware\r\n  var chain = [dispatchRequest, undefined];\r\n  var promise = Promise.resolve(config);\r\n\r\n  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {\r\n    chain.unshift(interceptor.fulfilled, interceptor.rejected);\r\n  });\r\n\r\n  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {\r\n    chain.push(interceptor.fulfilled, interceptor.rejected);\r\n  });\r\n\r\n  while (chain.length) {\r\n    promise = promise.then(chain.shift(), chain.shift());\r\n  }\r\n\r\n  return promise;\r\n};\r\n\r\n// Provide aliases for supported request methods\r\nutils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {\r\n  /*eslint func-names:0*/\r\n  Axios.prototype[method] = function(url, config) {\r\n    return this.request(utils.merge(config || {}, {\r\n      method: method,\r\n      url: url\r\n    }));\r\n  };\r\n});\r\n\r\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\r\n  /*eslint func-names:0*/\r\n  Axios.prototype[method] = function(url, data, config) {\r\n    return this.request(utils.merge(config || {}, {\r\n      method: method,\r\n      url: url,\r\n      data: data\r\n    }));\r\n  };\r\n});\r\n\r\nmodule.exports = Axios;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/Axios.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nfunction InterceptorManager() {\r\n  this.handlers = [];\r\n}\r\n\r\n/**\r\n * Add a new interceptor to the stack\r\n *\r\n * @param {Function} fulfilled The function to handle `then` for a `Promise`\r\n * @param {Function} rejected The function to handle `reject` for a `Promise`\r\n *\r\n * @return {Number} An ID used to remove interceptor later\r\n */\r\nInterceptorManager.prototype.use = function use(fulfilled, rejected) {\r\n  this.handlers.push({\r\n    fulfilled: fulfilled,\r\n    rejected: rejected\r\n  });\r\n  return this.handlers.length - 1;\r\n};\r\n\r\n/**\r\n * Remove an interceptor from the stack\r\n *\r\n * @param {Number} id The ID that was returned by `use`\r\n */\r\nInterceptorManager.prototype.eject = function eject(id) {\r\n  if (this.handlers[id]) {\r\n    this.handlers[id] = null;\r\n  }\r\n};\r\n\r\n/**\r\n * Iterate over all the registered interceptors\r\n *\r\n * This method is particularly useful for skipping over any\r\n * interceptors that may have become `null` calling `eject`.\r\n *\r\n * @param {Function} fn The function to call for each interceptor\r\n */\r\nInterceptorManager.prototype.forEach = function forEach(fn) {\r\n  utils.forEach(this.handlers, function forEachHandler(h) {\r\n    if (h !== null) {\r\n      fn(h);\r\n    }\r\n  });\r\n};\r\n\r\nmodule.exports = InterceptorManager;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/InterceptorManager.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar enhanceError = __webpack_require__(/*! ./enhanceError */ \"./node_modules/axios/lib/core/enhanceError.js\");\r\n\r\n/**\r\n * Create an Error with the specified message, config, error code, request and response.\r\n *\r\n * @param {string} message The error message.\r\n * @param {Object} config The config.\r\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\r\n * @param {Object} [request] The request.\r\n * @param {Object} [response] The response.\r\n * @returns {Error} The created error.\r\n */\r\nmodule.exports = function createError(message, config, code, request, response) {\r\n  var error = new Error(message);\r\n  return enhanceError(error, config, code, request, response);\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/createError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar transformData = __webpack_require__(/*! ./transformData */ \"./node_modules/axios/lib/core/transformData.js\");\r\nvar isCancel = __webpack_require__(/*! ../cancel/isCancel */ \"./node_modules/axios/lib/cancel/isCancel.js\");\r\nvar defaults = __webpack_require__(/*! ../defaults */ \"./node_modules/axios/lib/defaults.js\");\r\nvar isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ \"./node_modules/axios/lib/helpers/isAbsoluteURL.js\");\r\nvar combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ \"./node_modules/axios/lib/helpers/combineURLs.js\");\r\n\r\n/**\r\n * Throws a `Cancel` if cancellation has been requested.\r\n */\r\nfunction throwIfCancellationRequested(config) {\r\n  if (config.cancelToken) {\r\n    config.cancelToken.throwIfRequested();\r\n  }\r\n}\r\n\r\n/**\r\n * Dispatch a request to the server using the configured adapter.\r\n *\r\n * @param {object} config The config that is to be used for the request\r\n * @returns {Promise} The Promise to be fulfilled\r\n */\r\nmodule.exports = function dispatchRequest(config) {\r\n  throwIfCancellationRequested(config);\r\n\r\n  // Support baseURL config\r\n  if (config.baseURL && !isAbsoluteURL(config.url)) {\r\n    config.url = combineURLs(config.baseURL, config.url);\r\n  }\r\n\r\n  // Ensure headers exist\r\n  config.headers = config.headers || {};\r\n\r\n  // Transform request data\r\n  config.data = transformData(\r\n    config.data,\r\n    config.headers,\r\n    config.transformRequest\r\n  );\r\n\r\n  // Flatten headers\r\n  config.headers = utils.merge(\r\n    config.headers.common || {},\r\n    config.headers[config.method] || {},\r\n    config.headers || {}\r\n  );\r\n\r\n  utils.forEach(\r\n    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],\r\n    function cleanHeaderConfig(method) {\r\n      delete config.headers[method];\r\n    }\r\n  );\r\n\r\n  var adapter = config.adapter || defaults.adapter;\r\n\r\n  return adapter(config).then(function onAdapterResolution(response) {\r\n    throwIfCancellationRequested(config);\r\n\r\n    // Transform response data\r\n    response.data = transformData(\r\n      response.data,\r\n      response.headers,\r\n      config.transformResponse\r\n    );\r\n\r\n    return response;\r\n  }, function onAdapterRejection(reason) {\r\n    if (!isCancel(reason)) {\r\n      throwIfCancellationRequested(config);\r\n\r\n      // Transform response data\r\n      if (reason && reason.response) {\r\n        reason.response.data = transformData(\r\n          reason.response.data,\r\n          reason.response.headers,\r\n          config.transformResponse\r\n        );\r\n      }\r\n    }\r\n\r\n    return Promise.reject(reason);\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/dispatchRequest.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Update an Error with the specified config, error code, and response.\r\n *\r\n * @param {Error} error The error to update.\r\n * @param {Object} config The config.\r\n * @param {string} [code] The error code (for example, 'ECONNABORTED').\r\n * @param {Object} [request] The request.\r\n * @param {Object} [response] The response.\r\n * @returns {Error} The error.\r\n */\r\nmodule.exports = function enhanceError(error, config, code, request, response) {\r\n  error.config = config;\r\n  if (code) {\r\n    error.code = code;\r\n  }\r\n  error.request = request;\r\n  error.response = response;\r\n  return error;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/enhanceError.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar createError = __webpack_require__(/*! ./createError */ \"./node_modules/axios/lib/core/createError.js\");\r\n\r\n/**\r\n * Resolve or reject a Promise based on response status.\r\n *\r\n * @param {Function} resolve A function that resolves the promise.\r\n * @param {Function} reject A function that rejects the promise.\r\n * @param {object} response The response.\r\n */\r\nmodule.exports = function settle(resolve, reject, response) {\r\n  var validateStatus = response.config.validateStatus;\r\n  // Note: status is not exposed by XDomainRequest\r\n  if (!response.status || !validateStatus || validateStatus(response.status)) {\r\n    resolve(response);\r\n  } else {\r\n    reject(createError(\r\n      'Request failed with status code ' + response.status,\r\n      response.config,\r\n      null,\r\n      response.request,\r\n      response\r\n    ));\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/settle.js?");

/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\n/**\r\n * Transform the data for a request or a response\r\n *\r\n * @param {Object|String} data The data to be transformed\r\n * @param {Array} headers The headers for the request or response\r\n * @param {Array|Function} fns A single function or Array of functions\r\n * @returns {*} The resulting transformed data\r\n */\r\nmodule.exports = function transformData(data, headers, fns) {\r\n  /*eslint no-param-reassign:0*/\r\n  utils.forEach(fns, function transform(fn) {\r\n    data = fn(data, headers);\r\n  });\r\n\r\n  return data;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/core/transformData.js?");

/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(process) {\r\n\r\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/axios/lib/utils.js\");\r\nvar normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ \"./node_modules/axios/lib/helpers/normalizeHeaderName.js\");\r\n\r\nvar DEFAULT_CONTENT_TYPE = {\r\n  'Content-Type': 'application/x-www-form-urlencoded'\r\n};\r\n\r\nfunction setContentTypeIfUnset(headers, value) {\r\n  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {\r\n    headers['Content-Type'] = value;\r\n  }\r\n}\r\n\r\nfunction getDefaultAdapter() {\r\n  var adapter;\r\n  if (typeof XMLHttpRequest !== 'undefined') {\r\n    // For browsers use XHR adapter\r\n    adapter = __webpack_require__(/*! ./adapters/xhr */ \"./node_modules/axios/lib/adapters/xhr.js\");\r\n  } else if (typeof process !== 'undefined') {\r\n    // For node use HTTP adapter\r\n    adapter = __webpack_require__(/*! ./adapters/http */ \"./node_modules/axios/lib/adapters/xhr.js\");\r\n  }\r\n  return adapter;\r\n}\r\n\r\nvar defaults = {\r\n  adapter: getDefaultAdapter(),\r\n\r\n  transformRequest: [function transformRequest(data, headers) {\r\n    normalizeHeaderName(headers, 'Content-Type');\r\n    if (utils.isFormData(data) ||\r\n      utils.isArrayBuffer(data) ||\r\n      utils.isBuffer(data) ||\r\n      utils.isStream(data) ||\r\n      utils.isFile(data) ||\r\n      utils.isBlob(data)\r\n    ) {\r\n      return data;\r\n    }\r\n    if (utils.isArrayBufferView(data)) {\r\n      return data.buffer;\r\n    }\r\n    if (utils.isURLSearchParams(data)) {\r\n      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');\r\n      return data.toString();\r\n    }\r\n    if (utils.isObject(data)) {\r\n      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');\r\n      return JSON.stringify(data);\r\n    }\r\n    return data;\r\n  }],\r\n\r\n  transformResponse: [function transformResponse(data) {\r\n    /*eslint no-param-reassign:0*/\r\n    if (typeof data === 'string') {\r\n      try {\r\n        data = JSON.parse(data);\r\n      } catch (e) { /* Ignore */ }\r\n    }\r\n    return data;\r\n  }],\r\n\r\n  /**\r\n   * A timeout in milliseconds to abort a request. If set to 0 (default) a\r\n   * timeout is not created.\r\n   */\r\n  timeout: 0,\r\n\r\n  xsrfCookieName: 'XSRF-TOKEN',\r\n  xsrfHeaderName: 'X-XSRF-TOKEN',\r\n\r\n  maxContentLength: -1,\r\n\r\n  validateStatus: function validateStatus(status) {\r\n    return status >= 200 && status < 300;\r\n  }\r\n};\r\n\r\ndefaults.headers = {\r\n  common: {\r\n    'Accept': 'application/json, text/plain, */*'\r\n  }\r\n};\r\n\r\nutils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {\r\n  defaults.headers[method] = {};\r\n});\r\n\r\nutils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {\r\n  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);\r\n});\r\n\r\nmodule.exports = defaults;\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/axios/lib/defaults.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = function bind(fn, thisArg) {\r\n  return function wrap() {\r\n    var args = new Array(arguments.length);\r\n    for (var i = 0; i < args.length; i++) {\r\n      args[i] = arguments[i];\r\n    }\r\n    return fn.apply(thisArg, args);\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/bind.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js\r\n\r\nvar chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';\r\n\r\nfunction E() {\r\n  this.message = 'String contains an invalid character';\r\n}\r\nE.prototype = new Error;\r\nE.prototype.code = 5;\r\nE.prototype.name = 'InvalidCharacterError';\r\n\r\nfunction btoa(input) {\r\n  var str = String(input);\r\n  var output = '';\r\n  for (\r\n    // initialize result and counter\r\n    var block, charCode, idx = 0, map = chars;\r\n    // if the next str index does not exist:\r\n    //   change the mapping table to \"=\"\r\n    //   check if d has no fractional digits\r\n    str.charAt(idx | 0) || (map = '=', idx % 1);\r\n    // \"8 - idx % 1 * 8\" generates the sequence 2, 4, 6, 8\r\n    output += map.charAt(63 & block >> 8 - idx % 1 * 8)\r\n  ) {\r\n    charCode = str.charCodeAt(idx += 3 / 4);\r\n    if (charCode > 0xFF) {\r\n      throw new E();\r\n    }\r\n    block = block << 8 | charCode;\r\n  }\r\n  return output;\r\n}\r\n\r\nmodule.exports = btoa;\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/btoa.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nfunction encode(val) {\r\n  return encodeURIComponent(val).\r\n    replace(/%40/gi, '@').\r\n    replace(/%3A/gi, ':').\r\n    replace(/%24/g, '$').\r\n    replace(/%2C/gi, ',').\r\n    replace(/%20/g, '+').\r\n    replace(/%5B/gi, '[').\r\n    replace(/%5D/gi, ']');\r\n}\r\n\r\n/**\r\n * Build a URL by appending params to the end\r\n *\r\n * @param {string} url The base of the url (e.g., http://www.google.com)\r\n * @param {object} [params] The params to be appended\r\n * @returns {string} The formatted url\r\n */\r\nmodule.exports = function buildURL(url, params, paramsSerializer) {\r\n  /*eslint no-param-reassign:0*/\r\n  if (!params) {\r\n    return url;\r\n  }\r\n\r\n  var serializedParams;\r\n  if (paramsSerializer) {\r\n    serializedParams = paramsSerializer(params);\r\n  } else if (utils.isURLSearchParams(params)) {\r\n    serializedParams = params.toString();\r\n  } else {\r\n    var parts = [];\r\n\r\n    utils.forEach(params, function serialize(val, key) {\r\n      if (val === null || typeof val === 'undefined') {\r\n        return;\r\n      }\r\n\r\n      if (utils.isArray(val)) {\r\n        key = key + '[]';\r\n      } else {\r\n        val = [val];\r\n      }\r\n\r\n      utils.forEach(val, function parseValue(v) {\r\n        if (utils.isDate(v)) {\r\n          v = v.toISOString();\r\n        } else if (utils.isObject(v)) {\r\n          v = JSON.stringify(v);\r\n        }\r\n        parts.push(encode(key) + '=' + encode(v));\r\n      });\r\n    });\r\n\r\n    serializedParams = parts.join('&');\r\n  }\r\n\r\n  if (serializedParams) {\r\n    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;\r\n  }\r\n\r\n  return url;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/buildURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Creates a new URL by combining the specified URLs\r\n *\r\n * @param {string} baseURL The base URL\r\n * @param {string} relativeURL The relative URL\r\n * @returns {string} The combined URL\r\n */\r\nmodule.exports = function combineURLs(baseURL, relativeURL) {\r\n  return relativeURL\r\n    ? baseURL.replace(/\\/+$/, '') + '/' + relativeURL.replace(/^\\/+/, '')\r\n    : baseURL;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/combineURLs.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nmodule.exports = (\r\n  utils.isStandardBrowserEnv() ?\r\n\r\n  // Standard browser envs support document.cookie\r\n  (function standardBrowserEnv() {\r\n    return {\r\n      write: function write(name, value, expires, path, domain, secure) {\r\n        var cookie = [];\r\n        cookie.push(name + '=' + encodeURIComponent(value));\r\n\r\n        if (utils.isNumber(expires)) {\r\n          cookie.push('expires=' + new Date(expires).toGMTString());\r\n        }\r\n\r\n        if (utils.isString(path)) {\r\n          cookie.push('path=' + path);\r\n        }\r\n\r\n        if (utils.isString(domain)) {\r\n          cookie.push('domain=' + domain);\r\n        }\r\n\r\n        if (secure === true) {\r\n          cookie.push('secure');\r\n        }\r\n\r\n        document.cookie = cookie.join('; ');\r\n      },\r\n\r\n      read: function read(name) {\r\n        var match = document.cookie.match(new RegExp('(^|;\\\\s*)(' + name + ')=([^;]*)'));\r\n        return (match ? decodeURIComponent(match[3]) : null);\r\n      },\r\n\r\n      remove: function remove(name) {\r\n        this.write(name, '', Date.now() - 86400000);\r\n      }\r\n    };\r\n  })() :\r\n\r\n  // Non standard browser env (web workers, react-native) lack needed support.\r\n  (function nonStandardBrowserEnv() {\r\n    return {\r\n      write: function write() {},\r\n      read: function read() { return null; },\r\n      remove: function remove() {}\r\n    };\r\n  })()\r\n);\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/cookies.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Determines whether the specified URL is absolute\r\n *\r\n * @param {string} url The URL to test\r\n * @returns {boolean} True if the specified URL is absolute, otherwise false\r\n */\r\nmodule.exports = function isAbsoluteURL(url) {\r\n  // A URL is considered absolute if it begins with \"<scheme>://\" or \"//\" (protocol-relative URL).\r\n  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed\r\n  // by any combination of letters, digits, plus, period, or hyphen.\r\n  return /^([a-z][a-z\\d\\+\\-\\.]*:)?\\/\\//i.test(url);\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isAbsoluteURL.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nmodule.exports = (\r\n  utils.isStandardBrowserEnv() ?\r\n\r\n  // Standard browser envs have full support of the APIs needed to test\r\n  // whether the request URL is of the same origin as current location.\r\n  (function standardBrowserEnv() {\r\n    var msie = /(msie|trident)/i.test(navigator.userAgent);\r\n    var urlParsingNode = document.createElement('a');\r\n    var originURL;\r\n\r\n    /**\r\n    * Parse a URL to discover it's components\r\n    *\r\n    * @param {String} url The URL to be parsed\r\n    * @returns {Object}\r\n    */\r\n    function resolveURL(url) {\r\n      var href = url;\r\n\r\n      if (msie) {\r\n        // IE needs attribute set twice to normalize properties\r\n        urlParsingNode.setAttribute('href', href);\r\n        href = urlParsingNode.href;\r\n      }\r\n\r\n      urlParsingNode.setAttribute('href', href);\r\n\r\n      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils\r\n      return {\r\n        href: urlParsingNode.href,\r\n        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',\r\n        host: urlParsingNode.host,\r\n        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\\?/, '') : '',\r\n        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',\r\n        hostname: urlParsingNode.hostname,\r\n        port: urlParsingNode.port,\r\n        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?\r\n                  urlParsingNode.pathname :\r\n                  '/' + urlParsingNode.pathname\r\n      };\r\n    }\r\n\r\n    originURL = resolveURL(window.location.href);\r\n\r\n    /**\r\n    * Determine if a URL shares the same origin as the current location\r\n    *\r\n    * @param {String} requestURL The URL to test\r\n    * @returns {boolean} True if URL shares the same origin, otherwise false\r\n    */\r\n    return function isURLSameOrigin(requestURL) {\r\n      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;\r\n      return (parsed.protocol === originURL.protocol &&\r\n            parsed.host === originURL.host);\r\n    };\r\n  })() :\r\n\r\n  // Non standard browser envs (web workers, react-native) lack needed support.\r\n  (function nonStandardBrowserEnv() {\r\n    return function isURLSameOrigin() {\r\n      return true;\r\n    };\r\n  })()\r\n);\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/isURLSameOrigin.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\nmodule.exports = function normalizeHeaderName(headers, normalizedName) {\r\n  utils.forEach(headers, function processHeader(value, name) {\r\n    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {\r\n      headers[normalizedName] = value;\r\n      delete headers[name];\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/normalizeHeaderName.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar utils = __webpack_require__(/*! ./../utils */ \"./node_modules/axios/lib/utils.js\");\r\n\r\n// Headers whose duplicates are ignored by node\r\n// c.f. https://nodejs.org/api/http.html#http_message_headers\r\nvar ignoreDuplicateOf = [\r\n  'age', 'authorization', 'content-length', 'content-type', 'etag',\r\n  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',\r\n  'last-modified', 'location', 'max-forwards', 'proxy-authorization',\r\n  'referer', 'retry-after', 'user-agent'\r\n];\r\n\r\n/**\r\n * Parse headers into an object\r\n *\r\n * ```\r\n * Date: Wed, 27 Aug 2014 08:58:49 GMT\r\n * Content-Type: application/json\r\n * Connection: keep-alive\r\n * Transfer-Encoding: chunked\r\n * ```\r\n *\r\n * @param {String} headers Headers needing to be parsed\r\n * @returns {Object} Headers parsed into an object\r\n */\r\nmodule.exports = function parseHeaders(headers) {\r\n  var parsed = {};\r\n  var key;\r\n  var val;\r\n  var i;\r\n\r\n  if (!headers) { return parsed; }\r\n\r\n  utils.forEach(headers.split('\\n'), function parser(line) {\r\n    i = line.indexOf(':');\r\n    key = utils.trim(line.substr(0, i)).toLowerCase();\r\n    val = utils.trim(line.substr(i + 1));\r\n\r\n    if (key) {\r\n      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {\r\n        return;\r\n      }\r\n      if (key === 'set-cookie') {\r\n        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);\r\n      } else {\r\n        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;\r\n      }\r\n    }\r\n  });\r\n\r\n  return parsed;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/parseHeaders.js?");

/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\n/**\r\n * Syntactic sugar for invoking a function and expanding an array for arguments.\r\n *\r\n * Common use case would be to use `Function.prototype.apply`.\r\n *\r\n *  ```js\r\n *  function f(x, y, z) {}\r\n *  var args = [1, 2, 3];\r\n *  f.apply(null, args);\r\n *  ```\r\n *\r\n * With `spread` this example can be re-written.\r\n *\r\n *  ```js\r\n *  spread(function(x, y, z) {})([1, 2, 3]);\r\n *  ```\r\n *\r\n * @param {Function} callback\r\n * @returns {Function}\r\n */\r\nmodule.exports = function spread(callback) {\r\n  return function wrap(arr) {\r\n    return callback.apply(null, arr);\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/helpers/spread.js?");

/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nvar bind = __webpack_require__(/*! ./helpers/bind */ \"./node_modules/axios/lib/helpers/bind.js\");\r\nvar isBuffer = __webpack_require__(/*! is-buffer */ \"./node_modules/is-buffer/index.js\");\r\n\r\n/*global toString:true*/\r\n\r\n// utils is a library of generic helper functions non-specific to axios\r\n\r\nvar toString = Object.prototype.toString;\r\n\r\n/**\r\n * Determine if a value is an Array\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is an Array, otherwise false\r\n */\r\nfunction isArray(val) {\r\n  return toString.call(val) === '[object Array]';\r\n}\r\n\r\n/**\r\n * Determine if a value is an ArrayBuffer\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is an ArrayBuffer, otherwise false\r\n */\r\nfunction isArrayBuffer(val) {\r\n  return toString.call(val) === '[object ArrayBuffer]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a FormData\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is an FormData, otherwise false\r\n */\r\nfunction isFormData(val) {\r\n  return (typeof FormData !== 'undefined') && (val instanceof FormData);\r\n}\r\n\r\n/**\r\n * Determine if a value is a view on an ArrayBuffer\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false\r\n */\r\nfunction isArrayBufferView(val) {\r\n  var result;\r\n  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {\r\n    result = ArrayBuffer.isView(val);\r\n  } else {\r\n    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);\r\n  }\r\n  return result;\r\n}\r\n\r\n/**\r\n * Determine if a value is a String\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a String, otherwise false\r\n */\r\nfunction isString(val) {\r\n  return typeof val === 'string';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Number\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Number, otherwise false\r\n */\r\nfunction isNumber(val) {\r\n  return typeof val === 'number';\r\n}\r\n\r\n/**\r\n * Determine if a value is undefined\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if the value is undefined, otherwise false\r\n */\r\nfunction isUndefined(val) {\r\n  return typeof val === 'undefined';\r\n}\r\n\r\n/**\r\n * Determine if a value is an Object\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is an Object, otherwise false\r\n */\r\nfunction isObject(val) {\r\n  return val !== null && typeof val === 'object';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Date\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Date, otherwise false\r\n */\r\nfunction isDate(val) {\r\n  return toString.call(val) === '[object Date]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a File\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a File, otherwise false\r\n */\r\nfunction isFile(val) {\r\n  return toString.call(val) === '[object File]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Blob\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Blob, otherwise false\r\n */\r\nfunction isBlob(val) {\r\n  return toString.call(val) === '[object Blob]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Function\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Function, otherwise false\r\n */\r\nfunction isFunction(val) {\r\n  return toString.call(val) === '[object Function]';\r\n}\r\n\r\n/**\r\n * Determine if a value is a Stream\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a Stream, otherwise false\r\n */\r\nfunction isStream(val) {\r\n  return isObject(val) && isFunction(val.pipe);\r\n}\r\n\r\n/**\r\n * Determine if a value is a URLSearchParams object\r\n *\r\n * @param {Object} val The value to test\r\n * @returns {boolean} True if value is a URLSearchParams object, otherwise false\r\n */\r\nfunction isURLSearchParams(val) {\r\n  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;\r\n}\r\n\r\n/**\r\n * Trim excess whitespace off the beginning and end of a string\r\n *\r\n * @param {String} str The String to trim\r\n * @returns {String} The String freed of excess whitespace\r\n */\r\nfunction trim(str) {\r\n  return str.replace(/^\\s*/, '').replace(/\\s*$/, '');\r\n}\r\n\r\n/**\r\n * Determine if we're running in a standard browser environment\r\n *\r\n * This allows axios to run in a web worker, and react-native.\r\n * Both environments support XMLHttpRequest, but not fully standard globals.\r\n *\r\n * web workers:\r\n *  typeof window -> undefined\r\n *  typeof document -> undefined\r\n *\r\n * react-native:\r\n *  navigator.product -> 'ReactNative'\r\n */\r\nfunction isStandardBrowserEnv() {\r\n  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {\r\n    return false;\r\n  }\r\n  return (\r\n    typeof window !== 'undefined' &&\r\n    typeof document !== 'undefined'\r\n  );\r\n}\r\n\r\n/**\r\n * Iterate over an Array or an Object invoking a function for each item.\r\n *\r\n * If `obj` is an Array callback will be called passing\r\n * the value, index, and complete array for each item.\r\n *\r\n * If 'obj' is an Object callback will be called passing\r\n * the value, key, and complete object for each property.\r\n *\r\n * @param {Object|Array} obj The object to iterate\r\n * @param {Function} fn The callback to invoke for each item\r\n */\r\nfunction forEach(obj, fn) {\r\n  // Don't bother if no value provided\r\n  if (obj === null || typeof obj === 'undefined') {\r\n    return;\r\n  }\r\n\r\n  // Force an array if not already something iterable\r\n  if (typeof obj !== 'object') {\r\n    /*eslint no-param-reassign:0*/\r\n    obj = [obj];\r\n  }\r\n\r\n  if (isArray(obj)) {\r\n    // Iterate over array values\r\n    for (var i = 0, l = obj.length; i < l; i++) {\r\n      fn.call(null, obj[i], i, obj);\r\n    }\r\n  } else {\r\n    // Iterate over object keys\r\n    for (var key in obj) {\r\n      if (Object.prototype.hasOwnProperty.call(obj, key)) {\r\n        fn.call(null, obj[key], key, obj);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Accepts varargs expecting each argument to be an object, then\r\n * immutably merges the properties of each object and returns result.\r\n *\r\n * When multiple objects contain the same key the later object in\r\n * the arguments list will take precedence.\r\n *\r\n * Example:\r\n *\r\n * ```js\r\n * var result = merge({foo: 123}, {foo: 456});\r\n * console.log(result.foo); // outputs 456\r\n * ```\r\n *\r\n * @param {Object} obj1 Object to merge\r\n * @returns {Object} Result of all merge properties\r\n */\r\nfunction merge(/* obj1, obj2, obj3, ... */) {\r\n  var result = {};\r\n  function assignValue(val, key) {\r\n    if (typeof result[key] === 'object' && typeof val === 'object') {\r\n      result[key] = merge(result[key], val);\r\n    } else {\r\n      result[key] = val;\r\n    }\r\n  }\r\n\r\n  for (var i = 0, l = arguments.length; i < l; i++) {\r\n    forEach(arguments[i], assignValue);\r\n  }\r\n  return result;\r\n}\r\n\r\n/**\r\n * Extends object a by mutably adding to it the properties of object b.\r\n *\r\n * @param {Object} a The object to be extended\r\n * @param {Object} b The object to copy properties from\r\n * @param {Object} thisArg The object to bind function to\r\n * @return {Object} The resulting value of object a\r\n */\r\nfunction extend(a, b, thisArg) {\r\n  forEach(b, function assignValue(val, key) {\r\n    if (thisArg && typeof val === 'function') {\r\n      a[key] = bind(val, thisArg);\r\n    } else {\r\n      a[key] = val;\r\n    }\r\n  });\r\n  return a;\r\n}\r\n\r\nmodule.exports = {\r\n  isArray: isArray,\r\n  isArrayBuffer: isArrayBuffer,\r\n  isBuffer: isBuffer,\r\n  isFormData: isFormData,\r\n  isArrayBufferView: isArrayBufferView,\r\n  isString: isString,\r\n  isNumber: isNumber,\r\n  isObject: isObject,\r\n  isUndefined: isUndefined,\r\n  isDate: isDate,\r\n  isFile: isFile,\r\n  isBlob: isBlob,\r\n  isFunction: isFunction,\r\n  isStream: isStream,\r\n  isURLSearchParams: isURLSearchParams,\r\n  isStandardBrowserEnv: isStandardBrowserEnv,\r\n  forEach: forEach,\r\n  merge: merge,\r\n  extend: extend,\r\n  trim: trim\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/axios/lib/utils.js?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/style/article/article.less":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/style/article/article.less ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".article {\\n  grid-column-start: 1;\\n  grid-column-end: 4;\\n  grid-row-start: 2;\\n  grid-row-end: 3;\\n}\\n.article .article__result-search-api {\\n  list-style: none;\\n  padding-left: 20px;\\n}\\n.article .article__result-search-api .article__recipe-dish {\\n  display: grid;\\n  grid-template-columns: 250px 1fr 100px;\\n  grid-template-rows: 80px auto auto;\\n  margin: 10px;\\n  padding: 10px;\\n}\\n.article .article__result-search-api .article__recipe-dish p {\\n  line-height: 1.5;\\n  grid-column-start: 1;\\n  grid-column-end: 2;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n}\\n.article .article__result-search-api .article__recipe-dish img {\\n  min-height: 250px;\\n  min-width: 250px;\\n  max-height: 250px;\\n  max-width: 400px;\\n  grid-column-start: 1;\\n  grid-column-end: 2;\\n  grid-row-start: 2;\\n  grid-row-end: 4;\\n}\\n.article .article__result-search-api .article__recipe-dish .article__button-favorites,\\n.article .article__result-search-api .article__recipe-dish .article__button-ingredients {\\n  height: 40px;\\n  background: #009af3;\\n  color: #fff;\\n  border: none;\\n}\\n.article .article__result-search-api .article__recipe-dish .article__button-favorites {\\n  width: 70px;\\n  grid-column-start: 3;\\n  grid-column-end: 4;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n}\\n.article .article__result-search-api .article__recipe-dish .article__button-ingredients {\\n  width: 120px;\\n  grid-column-start: 2;\\n  grid-column-end: 3;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n}\\n.article .article__result-search-api .article__recipe-dish .article__ingredients {\\n  padding: 10px;\\n  position: relative;\\n  top: -50px;\\n  text-align: center;\\n  background-color: #fff;\\n  border: 6px solid #666;\\n  border-radius: 58px;\\n  box-shadow: 2px 2px 4px #888;\\n  background: rgba(219, 219, 219, 0.8);\\n  grid-column-start: 2;\\n  grid-column-end: 3;\\n  grid-row-start: 2;\\n  grid-row-end: 3;\\n}\\n.article .article__result-search-api .article__recipe-dish .article__ingredients:before {\\n  content: \\\" \\\";\\n  position: absolute;\\n  left: -10px;\\n  bottom: -40px;\\n  width: 40px;\\n  height: 40px;\\n  background-color: #dbdbdb;\\n  border: 6px solid #666;\\n  border-radius: 28px;\\n}\\n.article .article__result-search-api .article__recipe-dish .article__ingredients:after {\\n  content: \\\" \\\";\\n  position: absolute;\\n  width: 25px;\\n  height: 25px;\\n  left: -20px;\\n  background-color: #dbdbdb;\\n  border: 6px solid #666;\\n  bottom: -60px;\\n  border-radius: 18px;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style/article/article.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/style/header/header.less":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/style/header/header.less ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".header {\\n  display: grid;\\n  grid-template-rows: auto;\\n  grid-template-columns: auto auto auto auto;\\n  grid-column-start: 2;\\n  grid-column-end: 3;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n  margin: auto;\\n}\\n.header .header__search-line {\\n  grid-column-start: 1;\\n  grid-column-end: 2;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n  width: 200px;\\n  height: 20px;\\n  margin: 10px 0px;\\n  padding: 5px;\\n}\\n.header .header__button-search,\\n.header .header__button-favorites {\\n  margin: 7px 10px 7px 10px;\\n  background: #009af3;\\n  color: #fff;\\n  border: none;\\n  width: 70px;\\n  height: 40px;\\n}\\n.header .header__button-search {\\n  grid-column-start: 3;\\n  grid-column-end: 4;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n}\\n.header .header__button-drop-down {\\n  grid-column-start: 2;\\n  grid-column-end: 3;\\n  grid-row-start: 1;\\n  grid-row-end: 2;\\n  position: relative;\\n  padding-left: 0px;\\n  background: #009af3;\\n  color: #fff;\\n  border: none;\\n  width: 100px;\\n  height: 34px;\\n  cursor: pointer;\\n}\\n.header .header__button-drop-down:hover,\\n.header .header__button-drop-down:focus {\\n  background-color: #2980B9;\\n}\\n.header .header__button-drop-down:after {\\n  content: \\\"\\\";\\n  width: 0;\\n  height: 0;\\n  position: absolute;\\n  right: 7px;\\n  top: 45%;\\n  border: 40px solid transparent;\\n  border-top-color: #fff;\\n  border-width: 6px 6px 0px 6px;\\n  border-style: solid;\\n}\\n.header .header__list-drop-down {\\n  position: relative;\\n  display: inline-block;\\n  margin: 10px 10px 0px 0px;\\n  height: 50px;\\n  width: 100px;\\n}\\n.header .header__list-api {\\n  display: none;\\n  position: absolute;\\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\\n  z-index: 1;\\n  background: #009af3;\\n  color: #fff;\\n}\\n.header .header__list-api a {\\n  color: #fff;\\n  margin: 0 auto;\\n  padding: 6px;\\n  display: block;\\n  text-decoration: none;\\n}\\n.header .header__list-api a:hover {\\n  background-color: #4494c9;\\n}\\n.header .header__list-api_show {\\n  display: block;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style/header/header.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/style/layout.less":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/style/layout.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body {\\n  width: 960px;\\n  margin: 0 auto;\\n}\\n.application {\\n  display: grid;\\n  grid-template-columns: 1fr 600px 1fr;\\n  grid-template-rows: 200px 1fr 200px;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/style/layout.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\nmodule.exports = function(useSourceMap) {\r\n\tvar list = [];\r\n\r\n\t// return the list of modules as css string\r\n\tlist.toString = function toString() {\r\n\t\treturn this.map(function (item) {\r\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\r\n\t\t\tif(item[2]) {\r\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\r\n\t\t\t} else {\r\n\t\t\t\treturn content;\r\n\t\t\t}\r\n\t\t}).join(\"\");\r\n\t};\r\n\r\n\t// import a list of modules into the list\r\n\tlist.i = function(modules, mediaQuery) {\r\n\t\tif(typeof modules === \"string\")\r\n\t\t\tmodules = [[null, modules, \"\"]];\r\n\t\tvar alreadyImportedModules = {};\r\n\t\tfor(var i = 0; i < this.length; i++) {\r\n\t\t\tvar id = this[i][0];\r\n\t\t\tif(typeof id === \"number\")\r\n\t\t\t\talreadyImportedModules[id] = true;\r\n\t\t}\r\n\t\tfor(i = 0; i < modules.length; i++) {\r\n\t\t\tvar item = modules[i];\r\n\t\t\t// skip already imported module\r\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\r\n\t\t\t//  when a module is imported multiple times with different media queries.\r\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\r\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\r\n\t\t\t\tif(mediaQuery && !item[2]) {\r\n\t\t\t\t\titem[2] = mediaQuery;\r\n\t\t\t\t} else if(mediaQuery) {\r\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\r\n\t\t\t\t}\r\n\t\t\t\tlist.push(item);\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n\treturn list;\r\n};\r\n\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n\tvar content = item[1] || '';\r\n\tvar cssMapping = item[3];\r\n\tif (!cssMapping) {\r\n\t\treturn content;\r\n\t}\r\n\r\n\tif (useSourceMap && typeof btoa === 'function') {\r\n\t\tvar sourceMapping = toComment(cssMapping);\r\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\r\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\r\n\t\t});\r\n\r\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n\t}\r\n\r\n\treturn [content].join('\\n');\r\n}\r\n\r\n// Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n\t// eslint-disable-next-line no-undef\r\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\r\n\r\n\treturn '/*# ' + data + ' */';\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*!\r\n * Determine if an object is a Buffer\r\n *\r\n * @author   Feross Aboukhadijeh <https://feross.org>\r\n * @license  MIT\r\n */\r\n\r\n// The _isBuffer check is for Safari 5-7 support, because it's missing\r\n// Object.prototype.constructor. Remove this eventually\r\nmodule.exports = function (obj) {\r\n  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)\r\n}\r\n\r\nfunction isBuffer (obj) {\r\n  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)\r\n}\r\n\r\n// For Node v0.10 support. Remove this eventually.\r\nfunction isSlowBuffer (obj) {\r\n  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/is-buffer/index.js?");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\r\nvar process = module.exports = {};\r\n\r\n// cached from whatever global is present so that test runners that stub it\r\n// don't break things.  But we need to wrap it in a try catch in case it is\r\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\r\n// function because try/catches deoptimize in certain engines.\r\n\r\nvar cachedSetTimeout;\r\nvar cachedClearTimeout;\r\n\r\nfunction defaultSetTimout() {\r\n    throw new Error('setTimeout has not been defined');\r\n}\r\nfunction defaultClearTimeout () {\r\n    throw new Error('clearTimeout has not been defined');\r\n}\r\n(function () {\r\n    try {\r\n        if (typeof setTimeout === 'function') {\r\n            cachedSetTimeout = setTimeout;\r\n        } else {\r\n            cachedSetTimeout = defaultSetTimout;\r\n        }\r\n    } catch (e) {\r\n        cachedSetTimeout = defaultSetTimout;\r\n    }\r\n    try {\r\n        if (typeof clearTimeout === 'function') {\r\n            cachedClearTimeout = clearTimeout;\r\n        } else {\r\n            cachedClearTimeout = defaultClearTimeout;\r\n        }\r\n    } catch (e) {\r\n        cachedClearTimeout = defaultClearTimeout;\r\n    }\r\n} ())\r\nfunction runTimeout(fun) {\r\n    if (cachedSetTimeout === setTimeout) {\r\n        //normal enviroments in sane situations\r\n        return setTimeout(fun, 0);\r\n    }\r\n    // if setTimeout wasn't available but was latter defined\r\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\r\n        cachedSetTimeout = setTimeout;\r\n        return setTimeout(fun, 0);\r\n    }\r\n    try {\r\n        // when when somebody has screwed with setTimeout but no I.E. maddness\r\n        return cachedSetTimeout(fun, 0);\r\n    } catch(e){\r\n        try {\r\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\r\n            return cachedSetTimeout.call(null, fun, 0);\r\n        } catch(e){\r\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\r\n            return cachedSetTimeout.call(this, fun, 0);\r\n        }\r\n    }\r\n\r\n\r\n}\r\nfunction runClearTimeout(marker) {\r\n    if (cachedClearTimeout === clearTimeout) {\r\n        //normal enviroments in sane situations\r\n        return clearTimeout(marker);\r\n    }\r\n    // if clearTimeout wasn't available but was latter defined\r\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\r\n        cachedClearTimeout = clearTimeout;\r\n        return clearTimeout(marker);\r\n    }\r\n    try {\r\n        // when when somebody has screwed with setTimeout but no I.E. maddness\r\n        return cachedClearTimeout(marker);\r\n    } catch (e){\r\n        try {\r\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\r\n            return cachedClearTimeout.call(null, marker);\r\n        } catch (e){\r\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\r\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\r\n            return cachedClearTimeout.call(this, marker);\r\n        }\r\n    }\r\n\r\n\r\n\r\n}\r\nvar queue = [];\r\nvar draining = false;\r\nvar currentQueue;\r\nvar queueIndex = -1;\r\n\r\nfunction cleanUpNextTick() {\r\n    if (!draining || !currentQueue) {\r\n        return;\r\n    }\r\n    draining = false;\r\n    if (currentQueue.length) {\r\n        queue = currentQueue.concat(queue);\r\n    } else {\r\n        queueIndex = -1;\r\n    }\r\n    if (queue.length) {\r\n        drainQueue();\r\n    }\r\n}\r\n\r\nfunction drainQueue() {\r\n    if (draining) {\r\n        return;\r\n    }\r\n    var timeout = runTimeout(cleanUpNextTick);\r\n    draining = true;\r\n\r\n    var len = queue.length;\r\n    while(len) {\r\n        currentQueue = queue;\r\n        queue = [];\r\n        while (++queueIndex < len) {\r\n            if (currentQueue) {\r\n                currentQueue[queueIndex].run();\r\n            }\r\n        }\r\n        queueIndex = -1;\r\n        len = queue.length;\r\n    }\r\n    currentQueue = null;\r\n    draining = false;\r\n    runClearTimeout(timeout);\r\n}\r\n\r\nprocess.nextTick = function (fun) {\r\n    var args = new Array(arguments.length - 1);\r\n    if (arguments.length > 1) {\r\n        for (var i = 1; i < arguments.length; i++) {\r\n            args[i - 1] = arguments[i];\r\n        }\r\n    }\r\n    queue.push(new Item(fun, args));\r\n    if (queue.length === 1 && !draining) {\r\n        runTimeout(drainQueue);\r\n    }\r\n};\r\n\r\n// v8 likes predictible objects\r\nfunction Item(fun, array) {\r\n    this.fun = fun;\r\n    this.array = array;\r\n}\r\nItem.prototype.run = function () {\r\n    this.fun.apply(null, this.array);\r\n};\r\nprocess.title = 'browser';\r\nprocess.browser = true;\r\nprocess.env = {};\r\nprocess.argv = [];\r\nprocess.version = ''; // empty string to avoid regexp issues\r\nprocess.versions = {};\r\n\r\nfunction noop() {}\r\n\r\nprocess.on = noop;\r\nprocess.addListener = noop;\r\nprocess.once = noop;\r\nprocess.off = noop;\r\nprocess.removeListener = noop;\r\nprocess.removeAllListeners = noop;\r\nprocess.emit = noop;\r\nprocess.prependListener = noop;\r\nprocess.prependOnceListener = noop;\r\n\r\nprocess.listeners = function (name) { return [] }\r\n\r\nprocess.binding = function (name) {\r\n    throw new Error('process.binding is not supported');\r\n};\r\n\r\nprocess.cwd = function () { return '/' };\r\nprocess.chdir = function (dir) {\r\n    throw new Error('process.chdir is not supported');\r\n};\r\nprocess.umask = function() { return 0; };\r\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Tobias Koppers @sokra\r\n*/\r\n\r\nvar stylesInDom = {};\r\n\r\nvar\tmemoize = function (fn) {\r\n\tvar memo;\r\n\r\n\treturn function () {\r\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\r\n\t\treturn memo;\r\n\t};\r\n};\r\n\r\nvar isOldIE = memoize(function () {\r\n\t// Test for IE <= 9 as proposed by Browserhacks\r\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\r\n\t// Tests for existence of standard globals is to allow style-loader\r\n\t// to operate correctly into non-standard environments\r\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\r\n\treturn window && document && document.all && !window.atob;\r\n});\r\n\r\nvar getTarget = function (target) {\r\n  return document.querySelector(target);\r\n};\r\n\r\nvar getElement = (function (fn) {\r\n\tvar memo = {};\r\n\r\n\treturn function(target) {\r\n                // If passing function in options, then use it for resolve \"head\" element.\r\n                // Useful for Shadow Root style i.e\r\n                // {\r\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\r\n                // }\r\n                if (typeof target === 'function') {\r\n                        return target();\r\n                }\r\n                if (typeof memo[target] === \"undefined\") {\r\n\t\t\tvar styleTarget = getTarget.call(this, target);\r\n\t\t\t// Special case to return head of iframe instead of iframe itself\r\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n\t\t\t\ttry {\r\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\r\n\t\t\t\t\t// due to cross-origin restrictions\r\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\r\n\t\t\t\t} catch(e) {\r\n\t\t\t\t\tstyleTarget = null;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tmemo[target] = styleTarget;\r\n\t\t}\r\n\t\treturn memo[target]\r\n\t};\r\n})();\r\n\r\nvar singleton = null;\r\nvar\tsingletonCounter = 0;\r\nvar\tstylesInsertedAtTop = [];\r\n\r\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\r\n\r\nmodule.exports = function(list, options) {\r\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\r\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\r\n\t}\r\n\r\n\toptions = options || {};\r\n\r\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\r\n\r\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\r\n\t// tags it will allow on a page\r\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\r\n\r\n\t// By default, add <style> tags to the <head> element\r\n        if (!options.insertInto) options.insertInto = \"head\";\r\n\r\n\t// By default, add <style> tags to the bottom of the target\r\n\tif (!options.insertAt) options.insertAt = \"bottom\";\r\n\r\n\tvar styles = listToStyles(list, options);\r\n\r\n\taddStylesToDom(styles, options);\r\n\r\n\treturn function update (newList) {\r\n\t\tvar mayRemove = [];\r\n\r\n\t\tfor (var i = 0; i < styles.length; i++) {\r\n\t\t\tvar item = styles[i];\r\n\t\t\tvar domStyle = stylesInDom[item.id];\r\n\r\n\t\t\tdomStyle.refs--;\r\n\t\t\tmayRemove.push(domStyle);\r\n\t\t}\r\n\r\n\t\tif(newList) {\r\n\t\t\tvar newStyles = listToStyles(newList, options);\r\n\t\t\taddStylesToDom(newStyles, options);\r\n\t\t}\r\n\r\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\r\n\t\t\tvar domStyle = mayRemove[i];\r\n\r\n\t\t\tif(domStyle.refs === 0) {\r\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\r\n\r\n\t\t\t\tdelete stylesInDom[domStyle.id];\r\n\t\t\t}\r\n\t\t}\r\n\t};\r\n};\r\n\r\nfunction addStylesToDom (styles, options) {\r\n\tfor (var i = 0; i < styles.length; i++) {\r\n\t\tvar item = styles[i];\r\n\t\tvar domStyle = stylesInDom[item.id];\r\n\r\n\t\tif(domStyle) {\r\n\t\t\tdomStyle.refs++;\r\n\r\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\r\n\t\t\t}\r\n\r\n\t\t\tfor(; j < item.parts.length; j++) {\r\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tvar parts = [];\r\n\r\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\r\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\r\n\t\t\t}\r\n\r\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction listToStyles (list, options) {\r\n\tvar styles = [];\r\n\tvar newStyles = {};\r\n\r\n\tfor (var i = 0; i < list.length; i++) {\r\n\t\tvar item = list[i];\r\n\t\tvar id = options.base ? item[0] + options.base : item[0];\r\n\t\tvar css = item[1];\r\n\t\tvar media = item[2];\r\n\t\tvar sourceMap = item[3];\r\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\r\n\r\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\r\n\t\telse newStyles[id].parts.push(part);\r\n\t}\r\n\r\n\treturn styles;\r\n}\r\n\r\nfunction insertStyleElement (options, style) {\r\n\tvar target = getElement(options.insertInto)\r\n\r\n\tif (!target) {\r\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\r\n\t}\r\n\r\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\r\n\r\n\tif (options.insertAt === \"top\") {\r\n\t\tif (!lastStyleElementInsertedAtTop) {\r\n\t\t\ttarget.insertBefore(style, target.firstChild);\r\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\r\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\r\n\t\t} else {\r\n\t\t\ttarget.appendChild(style);\r\n\t\t}\r\n\t\tstylesInsertedAtTop.push(style);\r\n\t} else if (options.insertAt === \"bottom\") {\r\n\t\ttarget.appendChild(style);\r\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\r\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\r\n\t\ttarget.insertBefore(style, nextSibling);\r\n\t} else {\r\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\r\n\t}\r\n}\r\n\r\nfunction removeStyleElement (style) {\r\n\tif (style.parentNode === null) return false;\r\n\tstyle.parentNode.removeChild(style);\r\n\r\n\tvar idx = stylesInsertedAtTop.indexOf(style);\r\n\tif(idx >= 0) {\r\n\t\tstylesInsertedAtTop.splice(idx, 1);\r\n\t}\r\n}\r\n\r\nfunction createStyleElement (options) {\r\n\tvar style = document.createElement(\"style\");\r\n\r\n\tif(options.attrs.type === undefined) {\r\n\t\toptions.attrs.type = \"text/css\";\r\n\t}\r\n\r\n\taddAttrs(style, options.attrs);\r\n\tinsertStyleElement(options, style);\r\n\r\n\treturn style;\r\n}\r\n\r\nfunction createLinkElement (options) {\r\n\tvar link = document.createElement(\"link\");\r\n\r\n\tif(options.attrs.type === undefined) {\r\n\t\toptions.attrs.type = \"text/css\";\r\n\t}\r\n\toptions.attrs.rel = \"stylesheet\";\r\n\r\n\taddAttrs(link, options.attrs);\r\n\tinsertStyleElement(options, link);\r\n\r\n\treturn link;\r\n}\r\n\r\nfunction addAttrs (el, attrs) {\r\n\tObject.keys(attrs).forEach(function (key) {\r\n\t\tel.setAttribute(key, attrs[key]);\r\n\t});\r\n}\r\n\r\nfunction addStyle (obj, options) {\r\n\tvar style, update, remove, result;\r\n\r\n\t// If a transform function was defined, run it on the css\r\n\tif (options.transform && obj.css) {\r\n\t    result = options.transform(obj.css);\r\n\r\n\t    if (result) {\r\n\t    \t// If transform returns a value, use that instead of the original css.\r\n\t    \t// This allows running runtime transformations on the css.\r\n\t    \tobj.css = result;\r\n\t    } else {\r\n\t    \t// If the transform function returns a falsy value, don't add this css.\r\n\t    \t// This allows conditional loading of css\r\n\t    \treturn function() {\r\n\t    \t\t// noop\r\n\t    \t};\r\n\t    }\r\n\t}\r\n\r\n\tif (options.singleton) {\r\n\t\tvar styleIndex = singletonCounter++;\r\n\r\n\t\tstyle = singleton || (singleton = createStyleElement(options));\r\n\r\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\r\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\r\n\r\n\t} else if (\r\n\t\tobj.sourceMap &&\r\n\t\ttypeof URL === \"function\" &&\r\n\t\ttypeof URL.createObjectURL === \"function\" &&\r\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\r\n\t\ttypeof Blob === \"function\" &&\r\n\t\ttypeof btoa === \"function\"\r\n\t) {\r\n\t\tstyle = createLinkElement(options);\r\n\t\tupdate = updateLink.bind(null, style, options);\r\n\t\tremove = function () {\r\n\t\t\tremoveStyleElement(style);\r\n\r\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\r\n\t\t};\r\n\t} else {\r\n\t\tstyle = createStyleElement(options);\r\n\t\tupdate = applyToTag.bind(null, style);\r\n\t\tremove = function () {\r\n\t\t\tremoveStyleElement(style);\r\n\t\t};\r\n\t}\r\n\r\n\tupdate(obj);\r\n\r\n\treturn function updateStyle (newObj) {\r\n\t\tif (newObj) {\r\n\t\t\tif (\r\n\t\t\t\tnewObj.css === obj.css &&\r\n\t\t\t\tnewObj.media === obj.media &&\r\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\r\n\t\t\t) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tupdate(obj = newObj);\r\n\t\t} else {\r\n\t\t\tremove();\r\n\t\t}\r\n\t};\r\n}\r\n\r\nvar replaceText = (function () {\r\n\tvar textStore = [];\r\n\r\n\treturn function (index, replacement) {\r\n\t\ttextStore[index] = replacement;\r\n\r\n\t\treturn textStore.filter(Boolean).join('\\n');\r\n\t};\r\n})();\r\n\r\nfunction applyToSingletonTag (style, index, remove, obj) {\r\n\tvar css = remove ? \"\" : obj.css;\r\n\r\n\tif (style.styleSheet) {\r\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\r\n\t} else {\r\n\t\tvar cssNode = document.createTextNode(css);\r\n\t\tvar childNodes = style.childNodes;\r\n\r\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\r\n\r\n\t\tif (childNodes.length) {\r\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\r\n\t\t} else {\r\n\t\t\tstyle.appendChild(cssNode);\r\n\t\t}\r\n\t}\r\n}\r\n\r\nfunction applyToTag (style, obj) {\r\n\tvar css = obj.css;\r\n\tvar media = obj.media;\r\n\r\n\tif(media) {\r\n\t\tstyle.setAttribute(\"media\", media)\r\n\t}\r\n\r\n\tif(style.styleSheet) {\r\n\t\tstyle.styleSheet.cssText = css;\r\n\t} else {\r\n\t\twhile(style.firstChild) {\r\n\t\t\tstyle.removeChild(style.firstChild);\r\n\t\t}\r\n\r\n\t\tstyle.appendChild(document.createTextNode(css));\r\n\t}\r\n}\r\n\r\nfunction updateLink (link, options, obj) {\r\n\tvar css = obj.css;\r\n\tvar sourceMap = obj.sourceMap;\r\n\r\n\t/*\r\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\r\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\r\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\r\n\t\tdirectly\r\n\t*/\r\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\r\n\r\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\r\n\t\tcss = fixUrls(css);\r\n\t}\r\n\r\n\tif (sourceMap) {\r\n\t\t// http://stackoverflow.com/a/26603875\r\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\r\n\t}\r\n\r\n\tvar blob = new Blob([css], { type: \"text/css\" });\r\n\r\n\tvar oldSrc = link.href;\r\n\r\n\tlink.href = URL.createObjectURL(blob);\r\n\r\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n/**\r\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\r\n * embed the css on the page. This breaks all relative urls because now they are relative to a\r\n * bundle instead of the current page.\r\n *\r\n * One solution is to only use full urls, but that may be impossible.\r\n *\r\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\r\n *\r\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\r\n *\r\n */\r\n\r\nmodule.exports = function (css) {\r\n  // get current location\r\n  var location = typeof window !== \"undefined\" && window.location;\r\n\r\n  if (!location) {\r\n    throw new Error(\"fixUrls requires window.location\");\r\n  }\r\n\r\n\t// blank or null?\r\n\tif (!css || typeof css !== \"string\") {\r\n\t  return css;\r\n  }\r\n\r\n  var baseUrl = location.protocol + \"//\" + location.host;\r\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\r\n\r\n\t// convert each url(...)\r\n\t/*\r\n\tThis regular expression is just a way to recursively match brackets within\r\n\ta string.\r\n\r\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\r\n\t   (  = Start a capturing group\r\n\t     (?:  = Start a non-capturing group\r\n\t         [^)(]  = Match anything that isn't a parentheses\r\n\t         |  = OR\r\n\t         \\(  = Match a start parentheses\r\n\t             (?:  = Start another non-capturing groups\r\n\t                 [^)(]+  = Match anything that isn't a parentheses\r\n\t                 |  = OR\r\n\t                 \\(  = Match a start parentheses\r\n\t                     [^)(]*  = Match anything that isn't a parentheses\r\n\t                 \\)  = Match a end parentheses\r\n\t             )  = End Group\r\n              *\\) = Match anything and then a close parens\r\n          )  = Close non-capturing group\r\n          *  = Match anything\r\n       )  = Close capturing group\r\n\t \\)  = Match a close parens\r\n\r\n\t /gi  = Get all matches, not the first.  Be case insensitive.\r\n\t */\r\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\r\n\t\t// strip quotes (if they exist)\r\n\t\tvar unquotedOrigUrl = origUrl\r\n\t\t\t.trim()\r\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\r\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\r\n\r\n\t\t// already a full url? no change\r\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\r\n\t\t  return fullMatch;\r\n\t\t}\r\n\r\n\t\t// convert the url to a full url\r\n\t\tvar newUrl;\r\n\r\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\r\n\t\t  \t//TODO: should we add protocol?\r\n\t\t\tnewUrl = unquotedOrigUrl;\r\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\r\n\t\t\t// path should be relative to the base url\r\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\r\n\t\t} else {\r\n\t\t\t// path should be relative to current directory\r\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\r\n\t\t}\r\n\r\n\t\t// send back the fixed url(...)\r\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\r\n\t});\r\n\r\n\t// send back the fixed css\r\n\treturn fixedCss;\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_components_header_render_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/components/header/render-header */ \"./src/js/components/header/render-header.js\");\n/* harmony import */ var _js_components_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/components/render */ \"./src/js/components/render.js\");\n/* harmony import */ var _style_layout_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style/layout.less */ \"./src/style/layout.less\");\n/* harmony import */ var _style_layout_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_layout_less__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/components/article/article-result-search/render-ingredients-api2.js":
/*!************************************************************************************!*\
  !*** ./src/js/components/article/article-result-search/render-ingredients-api2.js ***!
  \************************************************************************************/
/*! exports provided: renderIngredientsApi2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIngredientsApi2\", function() { return renderIngredientsApi2; });\nlet renderIngredientsApi2 = (response, new_li) =>{\r\n    let ingredients = document.createElement(\"p\");\r\n      ingredients.className = \"article__ingredients\";\r\n      ingredients.innerHTML = response.ingredients;\r\n    new_li.appendChild(ingredients);\r\n  }\n\n//# sourceURL=webpack:///./src/js/components/article/article-result-search/render-ingredients-api2.js?");

/***/ }),

/***/ "./src/js/components/article/article-result-search/render-recipes-api1.js":
/*!********************************************************************************!*\
  !*** ./src/js/components/article/article-result-search/render-recipes-api1.js ***!
  \********************************************************************************/
/*! exports provided: renderRecipesApi1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderRecipesApi1\", function() { return renderRecipesApi1; });\n/* harmony import */ var _services_api_get_ingredients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/api/get-ingredients */ \"./src/js/services/api/get-ingredients.js\");\n/* harmony import */ var _article_article_button_favorites_event_button_favorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../article/article__button-favorites/event-button-favorites */ \"./src/js/components/article/article__button-favorites/event-button-favorites.js\");\n/* harmony import */ var _services_api_food2fork_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/food2fork-api */ \"./src/js/services/api/food2fork-api.js\");\n\r\n\r\n\r\n\r\nlet renderRecipesApi1 = () => {\r\n  let searchLine = document.getElementsByClassName('header__search-line')[0].value;\r\n  Object(_services_api_food2fork_api__WEBPACK_IMPORTED_MODULE_2__[\"searchRecipeApi1\"])(searchLine).then(function (arrRecipes) {\r\n    let resultSearch = document.getElementsByClassName(\"article__result-search-api\")[0];\r\n    \r\n    while (resultSearch.firstChild) {\r\n      resultSearch.removeChild(resultSearch.firstChild);\r\n    }\r\n    \r\n    for (let numberRecipe = 0; numberRecipe < arrRecipes.length; numberRecipe++) {\r\n      let imgDish = document.createElement(\"img\");\r\n      let new_li = document.createElement(\"li\");\r\n      let title = document.createElement(\"p\");\r\n      let buttonFavorites = document.createElement(\"input\");\r\n      let buttonIgredients = document.createElement(\"input\");\r\n      title.innerHTML = arrRecipes[numberRecipe].title;\r\n      imgDish.src = arrRecipes[numberRecipe].image_url;\r\n      buttonFavorites.type = \"button\";\r\n      buttonFavorites.value = \"Favorites\";\r\n      buttonIgredients.type = \"button\";\r\n      buttonIgredients.value = \"Show Ingredients\";\r\n      resultSearch.appendChild(new_li);\r\n      new_li.appendChild(title);\r\n      new_li.appendChild(imgDish);\r\n      new_li.appendChild(buttonFavorites);\r\n      new_li.appendChild(buttonIgredients);\r\n      new_li.className = \"article__recipe-dish\";\r\n      buttonFavorites.className = \"article__button-favorites\";\r\n      buttonIgredients.className = \"article__button-ingredients\";\r\n      Object(_article_article_button_favorites_event_button_favorites__WEBPACK_IMPORTED_MODULE_1__[\"addEventFavorites\"])(arrRecipes[numberRecipe], numberRecipe);\r\n      buttonIgredients.addEventListener(\"click\", _services_api_get_ingredients__WEBPACK_IMPORTED_MODULE_0__[\"getIngredients\"].bind(null, arrRecipes[numberRecipe].recipe_id, new_li));\r\n    }\r\n    console.log(arrRecipes);\r\n  })\r\n};\n\n//# sourceURL=webpack:///./src/js/components/article/article-result-search/render-recipes-api1.js?");

/***/ }),

/***/ "./src/js/components/article/article-result-search/render-recipes-api2.js":
/*!********************************************************************************!*\
  !*** ./src/js/components/article/article-result-search/render-recipes-api2.js ***!
  \********************************************************************************/
/*! exports provided: renderRecipesApi2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderRecipesApi2\", function() { return renderRecipesApi2; });\n/* harmony import */ var _render_ingredients_api2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-ingredients-api2 */ \"./src/js/components/article/article-result-search/render-ingredients-api2.js\");\n/* harmony import */ var _article_article_button_favorites_event_button_favorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../article/article__button-favorites/event-button-favorites */ \"./src/js/components/article/article__button-favorites/event-button-favorites.js\");\n/* harmony import */ var _services_api_recipe_puppy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api/recipe-puppy */ \"./src/js/services/api/recipe-puppy.js\");\n\r\n\r\n\r\n\r\nlet renderRecipesApi2 = () => {\r\n  let searchLine = document.getElementsByClassName('header__search-line')[0].value;\r\n  Object(_services_api_recipe_puppy__WEBPACK_IMPORTED_MODULE_2__[\"searchRecipeApi2\"])(searchLine).then(function (arrRecipes) {\r\n    let resultSearch = document.getElementsByClassName(\"article__result-search-api\")[0];\r\n    while (resultSearch.firstChild) {\r\n      resultSearch.removeChild(resultSearch.firstChild);\r\n    }\r\n    for (let numberRecipe = 0; numberRecipe < arrRecipes.length; numberRecipe++) {\r\n      let imgDish = document.createElement(\"img\");\r\n      let new_li = document.createElement(\"li\");\r\n      let title = document.createElement(\"p\");\r\n      let buttonFavorites = document.createElement(\"input\");\r\n      let buttonIgredients = document.createElement(\"input\");\r\n      title.innerHTML = arrRecipes[numberRecipe].title;\r\n      imgDish.src = arrRecipes[numberRecipe].thumbnail;\r\n      buttonFavorites.type = \"button\";\r\n      buttonFavorites.value = \"Favorites\";\r\n      buttonIgredients.type = \"button\";\r\n      buttonIgredients.value = \"Show Ingredients\";\r\n      resultSearch.appendChild(new_li);\r\n      new_li.appendChild(title);\r\n      new_li.appendChild(imgDish);\r\n      new_li.appendChild(buttonFavorites);\r\n      new_li.appendChild(buttonIgredients);\r\n      new_li.className = \"article__recipe-dish\";\r\n      buttonFavorites.className = \"article__button-favorites\";\r\n      buttonIgredients.className = \"article__button-ingredients\";\r\n      Object(_article_article_button_favorites_event_button_favorites__WEBPACK_IMPORTED_MODULE_1__[\"addEventFavorites\"])(arrRecipes[numberRecipe], numberRecipe);\r\n      buttonIgredients.addEventListener(\"click\", _render_ingredients_api2__WEBPACK_IMPORTED_MODULE_0__[\"renderIngredientsApi2\"].bind(null, arrRecipes[numberRecipe], new_li));\r\n    }\r\n    console.log(arrRecipes);\r\n  })\r\n};\n\n//# sourceURL=webpack:///./src/js/components/article/article-result-search/render-recipes-api2.js?");

/***/ }),

/***/ "./src/js/components/article/article__button-favorites/article__button-favorites.js":
/*!******************************************************************************************!*\
  !*** ./src/js/components/article/article__button-favorites/article__button-favorites.js ***!
  \******************************************************************************************/
/*! exports provided: Favorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Favorites\", function() { return Favorites; });\nclass Favorites {\n    constructor(recipe) {\n        this.recipe = recipe;\n    }\n    addFavorites() {\n        localStorage.setItem(this.recipe.title, JSON.stringify(this.recipe));\n        console.log(localStorage.getItem(this.recipe.title));\n    }\n    renderFavorites() {\n        let resultSearch = document.getElementsByClassName(\"article__result-search-api\")[0];\n\n        while (resultSearch.firstChild) {\n            resultSearch.removeChild(resultSearch.firstChild);\n        }\n\n        for (let i = 0; i < localStorage.length; i++) {\n            let favoriteRecipe = JSON.parse(localStorage.getItem(localStorage.key(i)));\n            let imgDish = document.createElement(\"img\");\n            let new_li = document.createElement(\"li\");\n            let title = document.createElement(\"p\");\n            console.log(favoriteRecipe);\n            title.innerHTML = favoriteRecipe.title;\n            if(favoriteRecipe.thumbnail){\n                imgDish.src = favoriteRecipe.thumbnail;\n            }\n            else{\n            imgDish.src = favoriteRecipe.image_url;\n            }\n            resultSearch.appendChild(new_li);\n            new_li.appendChild(title);\n            new_li.appendChild(imgDish);\n            new_li.className = \"article__recipe-dish\";\n        }\n\n    }\n}\n\n//# sourceURL=webpack:///./src/js/components/article/article__button-favorites/article__button-favorites.js?");

/***/ }),

/***/ "./src/js/components/article/article__button-favorites/event-button-favorites.js":
/*!***************************************************************************************!*\
  !*** ./src/js/components/article/article__button-favorites/event-button-favorites.js ***!
  \***************************************************************************************/
/*! exports provided: addEventFavorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventFavorites\", function() { return addEventFavorites; });\n/* harmony import */ var _article_button_favorites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article__button-favorites */ \"./src/js/components/article/article__button-favorites/article__button-favorites.js\");\n\n\nlet addEventFavorites = (recipe, numberRecipe) => {\n    if (document.getElementsByClassName('article__button-favorites')) {\n        let buttonAddFavorites = document.getElementsByClassName('article__button-favorites')[numberRecipe];\n\n\n        let createFavoriteDish = (recipe) => {\n            let favoritesDish = new _article_button_favorites__WEBPACK_IMPORTED_MODULE_0__[\"Favorites\"](recipe);\n            favoritesDish.addFavorites();\n        };\n\n        buttonAddFavorites.addEventListener('click', createFavoriteDish.bind(undefined, recipe), false);\n    }\n}\n\n//# sourceURL=webpack:///./src/js/components/article/article__button-favorites/event-button-favorites.js?");

/***/ }),

/***/ "./src/js/components/article/render-article.js":
/*!*****************************************************!*\
  !*** ./src/js/components/article/render-article.js ***!
  \*****************************************************/
/*! exports provided: renderArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderArticle\", function() { return renderArticle; });\n/* harmony import */ var _style_article_article_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/article/article.less */ \"./src/style/article/article.less\");\n/* harmony import */ var _style_article_article_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_article_article_less__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet renderArticle = () => {\r\nlet application = document.getElementsByClassName(\"application\")[0];\r\nlet article = document.createElement(\"article\");\r\narticle.className = \"article\";\r\narticle.innerHTML =\r\n  '<ul class = \"article__result-search-api\"></ul>';\r\napplication.appendChild(article);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/article/render-article.js?");

/***/ }),

/***/ "./src/js/components/header/header__button-favorites/header__button-favorites.js":
/*!***************************************************************************************!*\
  !*** ./src/js/components/header/header__button-favorites/header__button-favorites.js ***!
  \***************************************************************************************/
/*! exports provided: addEventButtonShowFavorites */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventButtonShowFavorites\", function() { return addEventButtonShowFavorites; });\n/* harmony import */ var _article_article_button_favorites_article_button_favorites__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../article/article__button-favorites/article__button-favorites */ \"./src/js/components/article/article__button-favorites/article__button-favorites.js\");\n\n\nconst addEventButtonShowFavorites = () => {\n    console.log('12324');\n    let buttonShowFavorites = document.getElementsByClassName('header__button-favorites')[0];\n    let showFavoriteDish = () => {\n        let favoriteDish = new _article_article_button_favorites_article_button_favorites__WEBPACK_IMPORTED_MODULE_0__[\"Favorites\"]();\n        favoriteDish.renderFavorites();\n    }\n    buttonShowFavorites.addEventListener('click', showFavoriteDish, false);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/components/header/header__button-favorites/header__button-favorites.js?");

/***/ }),

/***/ "./src/js/components/header/header__button-search/header__button-search.js":
/*!*********************************************************************************!*\
  !*** ./src/js/components/header/header__button-search/header__button-search.js ***!
  \*********************************************************************************/
/*! exports provided: addEventButtonSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addEventButtonSearch\", function() { return addEventButtonSearch; });\nfunction addEventButtonSearch(funHandler, funcRemove){\nlet buttonSearch = document.getElementsByClassName('header__button-search')[0];\nbuttonSearch.removeEventListener('click', funcRemove, false);\nbuttonSearch.addEventListener('click',funHandler, false);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/components/header/header__button-search/header__button-search.js?");

/***/ }),

/***/ "./src/js/components/header/header__button-select-api/header__button-select-api.js":
/*!*****************************************************************************************!*\
  !*** ./src/js/components/header/header__button-select-api/header__button-select-api.js ***!
  \*****************************************************************************************/
/*! exports provided: selectApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectApi\", function() { return selectApi; });\n/* harmony import */ var _header_button_search_header_button_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header__button-search/header__button-search */ \"./src/js/components/header/header__button-search/header__button-search.js\");\n/* harmony import */ var _article_article_result_search_render_recipes_api1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../article/article-result-search/render-recipes-api1 */ \"./src/js/components/article/article-result-search/render-recipes-api1.js\");\n/* harmony import */ var _article_article_result_search_render_recipes_api2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../article/article-result-search/render-recipes-api2 */ \"./src/js/components/article/article-result-search/render-recipes-api2.js\");\n\n\n\n\nfunction selectApi(){\n    let food2ForkApi = document.getElementById('header__a-food2fork-api');\n    let recipePuppyApi = document.getElementById('header__a-recipe-puppy-api');\n    food2ForkApi.addEventListener(\"click\",() => {\n        Object(_header_button_search_header_button_search__WEBPACK_IMPORTED_MODULE_0__[\"addEventButtonSearch\"])(_article_article_result_search_render_recipes_api1__WEBPACK_IMPORTED_MODULE_1__[\"renderRecipesApi1\"], _article_article_result_search_render_recipes_api2__WEBPACK_IMPORTED_MODULE_2__[\"renderRecipesApi2\"]);\n    }, false)\n    recipePuppyApi.addEventListener(\"click\", () => {\n        Object(_header_button_search_header_button_search__WEBPACK_IMPORTED_MODULE_0__[\"addEventButtonSearch\"])(_article_article_result_search_render_recipes_api2__WEBPACK_IMPORTED_MODULE_2__[\"renderRecipesApi2\"], _article_article_result_search_render_recipes_api1__WEBPACK_IMPORTED_MODULE_1__[\"renderRecipesApi1\"]);\n    }, false);\n}\n\n\n\n//# sourceURL=webpack:///./src/js/components/header/header__button-select-api/header__button-select-api.js?");

/***/ }),

/***/ "./src/js/components/header/header__button-select-api/header__button-show-api.js":
/*!***************************************************************************************!*\
  !*** ./src/js/components/header/header__button-select-api/header__button-show-api.js ***!
  \***************************************************************************************/
/*! exports provided: showApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showApi\", function() { return showApi; });\n/* harmony import */ var _header_button_select_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header__button-select-api */ \"./src/js/components/header/header__button-select-api/header__button-select-api.js\");\n\n\nfunction showApi(){\n    document.getElementsByClassName(\"header__list-api\")[0].classList.toggle(\"header__list-api_show\");\n    window.onclick = function(event) {\n        if (!event.target.matches('.header__button-drop-down')) {\n      \n          let dropdowns = document.getElementsByClassName(\"header__list-api\");\n          let i;\n          for (i = 0; i < dropdowns.length; i++) {\n            var openDropdown = dropdowns[i];\n            if (openDropdown.classList.contains('show')) {\n              openDropdown.classList.remove('show');\n            }\n          }\n        }\n      }\n      Object(_header_button_select_api__WEBPACK_IMPORTED_MODULE_0__[\"selectApi\"])();\n}\n\n\n\n//# sourceURL=webpack:///./src/js/components/header/header__button-select-api/header__button-show-api.js?");

/***/ }),

/***/ "./src/js/components/header/render-header.js":
/*!***************************************************!*\
  !*** ./src/js/components/header/render-header.js ***!
  \***************************************************/
/*! exports provided: renderHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHeader\", function() { return renderHeader; });\n/* harmony import */ var _style_header_header_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../style/header/header.less */ \"./src/style/header/header.less\");\n/* harmony import */ var _style_header_header_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_header_header_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_button_select_api_header_button_show_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header__button-select-api/header__button-show-api */ \"./src/js/components/header/header__button-select-api/header__button-show-api.js\");\n\r\n\r\n\r\nlet renderHeader= () => {\r\nlet application = document.getElementsByClassName(\"application\")[0];\r\nlet header = document.createElement('header');\r\nheader.className = 'header';\r\nheader.innerHTML = `\r\n<input type=\"text\" class=\"header__search-line\" placeholder = \"Enter the name of the dish\">\r\n<div class=\"header__list-drop-down\">\r\n        <button class=\"header__button-drop-down\">select api</button>\r\n        <div class = \"header__list-api\">\r\n        <a id = \"header__a-food2fork-api\" href=\"#\">Food2Fork</a>\r\n        <a id = \"header__a-recipe-puppy-api\" href=\"#\">Recipe Puppy</a>\r\n        </div>\r\n    </div>\r\n<input type=\"button\" class=\"header__button-search\" value = \"Search\">\r\n<input type=\"button\" class=\"header__button-favorites\" value = \"Favorites\">`;\r\napplication.appendChild(header);\r\nlet buttonDropDown = document.getElementsByClassName(\"header__button-drop-down\")[0];\r\nbuttonDropDown.addEventListener(\"click\", _header_button_select_api_header_button_show_api__WEBPACK_IMPORTED_MODULE_1__[\"showApi\"], false);\r\n}\n\n//# sourceURL=webpack:///./src/js/components/header/render-header.js?");

/***/ }),

/***/ "./src/js/components/render.js":
/*!*************************************!*\
  !*** ./src/js/components/render.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_render_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/render-header */ \"./src/js/components/header/render-header.js\");\n/* harmony import */ var _article_render_article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article/render-article */ \"./src/js/components/article/render-article.js\");\n/* harmony import */ var _header_header_button_select_api_header_button_select_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header__button-select-api/header__button-select-api */ \"./src/js/components/header/header__button-select-api/header__button-select-api.js\");\n/* harmony import */ var _header_header_button_favorites_header_button_favorites__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header__button-favorites/header__button-favorites */ \"./src/js/components/header/header__button-favorites/header__button-favorites.js\");\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n    Object(_header_render_header__WEBPACK_IMPORTED_MODULE_0__[\"renderHeader\"])();\r\n    Object(_article_render_article__WEBPACK_IMPORTED_MODULE_1__[\"renderArticle\"])();\r\n    Object(_header_header_button_favorites_header_button_favorites__WEBPACK_IMPORTED_MODULE_3__[\"addEventButtonShowFavorites\"])();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/components/render.js?");

/***/ }),

/***/ "./src/js/constants/api-const.js":
/*!***************************************!*\
  !*** ./src/js/constants/api-const.js ***!
  \***************************************/
/*! exports provided: URL_FOOD2FORK, URL_RECIPEPUPPY, KEY_FOR_FOOD2FORK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL_FOOD2FORK\", function() { return URL_FOOD2FORK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL_RECIPEPUPPY\", function() { return URL_RECIPEPUPPY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_FOR_FOOD2FORK\", function() { return KEY_FOR_FOOD2FORK; });\nconst URL_FOOD2FORK = 'https://cors.io/?http://food2fork.com/api/search?';\r\nconst URL_RECIPEPUPPY = 'https://cors.io/?http://www.recipepuppy.com/api/?';\r\nconst KEY_FOR_FOOD2FORK = '14d4f957bf943fe0ae9172647a0f4d1f';\n\n//# sourceURL=webpack:///./src/js/constants/api-const.js?");

/***/ }),

/***/ "./src/js/services/api/food2fork-api.js":
/*!**********************************************!*\
  !*** ./src/js/services/api/food2fork-api.js ***!
  \**********************************************/
/*! exports provided: searchRecipeApi1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchRecipeApi1\", function() { return searchRecipeApi1; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_api_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/api-const */ \"./src/js/constants/api-const.js\");\n\r\n\r\n\r\nconst searchRecipeApi1 = (searchLine) => {\r\n        return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_constants_api_const__WEBPACK_IMPORTED_MODULE_1__[\"URL_FOOD2FORK\"], {\r\n        params: {\r\n            key: _constants_api_const__WEBPACK_IMPORTED_MODULE_1__[\"KEY_FOR_FOOD2FORK\"],\r\n            q: searchLine\r\n        }\r\n    })\r\n        .then(function (response) {\r\n            return response.data.recipes;        \r\n        })\r\n        .catch(function (error) {\r\n            console.log(error);\r\n        });\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/services/api/food2fork-api.js?");

/***/ }),

/***/ "./src/js/services/api/get-ingredients.js":
/*!************************************************!*\
  !*** ./src/js/services/api/get-ingredients.js ***!
  \************************************************/
/*! exports provided: getIngredients, renderIngredients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIngredients\", function() { return getIngredients; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderIngredients\", function() { return renderIngredients; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nlet getIngredients = (recipe_id, new_li) => {\r\n  axios__WEBPACK_IMPORTED_MODULE_0___default.a\r\n    .get(\"https://cors.io/?http://food2fork.com/api/get?\", {\r\n      params: {\r\n        key: \"14d4f957bf943fe0ae9172647a0f4d1f\",\r\n        rId: recipe_id\r\n      }\r\n    })\r\n    .then(function(response) {\r\n      renderIngredients(response.data.recipe, new_li);\r\n    })\r\n    .catch(function(error) {\r\n      console.log(error);\r\n    });\r\n};\r\nlet renderIngredients = (response, new_li) =>{\r\n  let ingredients = document.createElement(\"p\");\r\n    ingredients.className = \"article__ingredients\";\r\n  for (\r\n    let lengthIngredients = 0;\r\n    lengthIngredients < response.ingredients.length;\r\n    lengthIngredients++\r\n  ) {\r\n    ingredients.innerHTML =\r\n      ingredients.innerHTML + response.ingredients[lengthIngredients] + \", \";\r\n  }\r\n  new_li.appendChild(ingredients);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/js/services/api/get-ingredients.js?");

/***/ }),

/***/ "./src/js/services/api/recipe-puppy.js":
/*!*********************************************!*\
  !*** ./src/js/services/api/recipe-puppy.js ***!
  \*********************************************/
/*! exports provided: searchRecipeApi2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchRecipeApi2\", function() { return searchRecipeApi2; });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_api_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/api-const */ \"./src/js/constants/api-const.js\");\n\r\n\r\n\r\nconst searchRecipeApi2 = (searchLine) => {\r\n    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(_constants_api_const__WEBPACK_IMPORTED_MODULE_1__[\"URL_RECIPEPUPPY\"], {\r\n        params: {\r\n            i: searchLine\r\n        }\r\n    })\r\n        .then(function (response) {\r\n           return response.data.results;\r\n        })\r\n        .catch(function (error) {\r\n            console.log(error);\r\n        });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/services/api/recipe-puppy.js?");

/***/ }),

/***/ "./src/style/article/article.less":
/*!****************************************!*\
  !*** ./src/style/article/article.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./article.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/style/article/article.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/article/article.less?");

/***/ }),

/***/ "./src/style/header/header.less":
/*!**************************************!*\
  !*** ./src/style/header/header.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/less-loader/dist/cjs.js!./header.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/style/header/header.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/header/header.less?");

/***/ }),

/***/ "./src/style/layout.less":
/*!*******************************!*\
  !*** ./src/style/layout.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./layout.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/style/layout.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/style/layout.less?");

/***/ })

/******/ });