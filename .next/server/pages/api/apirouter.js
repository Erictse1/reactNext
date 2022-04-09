module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/apirouter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/apirouter.js":
/*!********************************!*\
  !*** ./pages/api/apirouter.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nasync function handler(req, res) {\n  if (req.method === 'POST') {\n    const data = req.body;\n    console.log(data); // const { id, title, address, description } = data;\n\n    const getClient = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://Eric:123@cluster0.m95pz.mongodb.net/changehere?retryWrites=true&w=majority'); //return a promise\n\n    const db = getClient.db();\n    const thedatabase = db.collection('changehere');\n    const result = await thedatabase.insertOne(data);\n    console.log(result);\n    client.close(); //return promise\n    // const selectedMeetup = await meetupsCollection.findOne({\n    // \t_id: ObjectId(databasename)\n    // });\n    // client.close();\n    //upperpart for connect database\n\n    res.status(201).json({\n      message: 'message'\n    });\n  } // return {\n  // \tprops: {}\n  // };\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXBpcm91dGVyLmpzPzEwOWQiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImdldENsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwidGhlZGF0YWJhc2UiLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY2xpZW50IiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQ2hDLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQzFCLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWixFQUYwQixDQUkxQjs7QUFFQSxVQUFNSSxTQUFTLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUN2QiwwRkFEdUIsQ0FBeEIsQ0FOMEIsQ0FRdkI7O0FBRUgsVUFBTUMsRUFBRSxHQUFHSCxTQUFTLENBQUNHLEVBQVYsRUFBWDtBQUVBLFVBQU1DLFdBQVcsR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsWUFBZCxDQUFwQjtBQUVBLFVBQU1DLE1BQU0sR0FBRyxNQUFNRixXQUFXLENBQUNHLFNBQVosQ0FBc0JYLElBQXRCLENBQXJCO0FBQ0FFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTyxNQUFaO0FBQ0FFLFVBQU0sQ0FBQ0MsS0FBUCxHQWhCMEIsQ0FpQjFCO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQWYsT0FBRyxDQUFDZ0IsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0EsR0EzQitCLENBNkJoQztBQUNBO0FBQ0E7O0FBQ0E7O0FBRWNwQixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9hcGlyb3V0ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG5cdGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcblx0XHRjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cdFx0Y29uc29sZS5sb2coZGF0YSk7XG5cblx0XHQvLyBjb25zdCB7IGlkLCB0aXRsZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSA9IGRhdGE7XG5cblx0XHRjb25zdCBnZXRDbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuXHRcdFx0J21vbmdvZGIrc3J2Oi8vRXJpYzoxMjNAY2x1c3RlcjAubTk1cHoubW9uZ29kYi5uZXQvY2hhbmdlaGVyZT9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknXG5cdFx0KTsgLy9yZXR1cm4gYSBwcm9taXNlXG5cblx0XHRjb25zdCBkYiA9IGdldENsaWVudC5kYigpO1xuXG5cdFx0Y29uc3QgdGhlZGF0YWJhc2UgPSBkYi5jb2xsZWN0aW9uKCdjaGFuZ2VoZXJlJyk7XG5cblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGVkYXRhYmFzZS5pbnNlcnRPbmUoZGF0YSk7XG5cdFx0Y29uc29sZS5sb2cocmVzdWx0KTtcblx0XHRjbGllbnQuY2xvc2UoKTtcblx0XHQvL3JldHVybiBwcm9taXNlXG5cblx0XHQvLyBjb25zdCBzZWxlY3RlZE1lZXR1cCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmRPbmUoe1xuXHRcdC8vIFx0X2lkOiBPYmplY3RJZChkYXRhYmFzZW5hbWUpXG5cdFx0Ly8gfSk7XG5cblx0XHQvLyBjbGllbnQuY2xvc2UoKTtcblx0XHQvL3VwcGVycGFydCBmb3IgY29ubmVjdCBkYXRhYmFzZVxuXHRcdHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgbWVzc2FnZTogJ21lc3NhZ2UnIH0pO1xuXHR9XG5cblx0Ly8gcmV0dXJuIHtcblx0Ly8gXHRwcm9wczoge31cblx0Ly8gfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/apirouter.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });