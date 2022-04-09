module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[abc]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/erictse/Downloads/React-nuxt-lecture-23/code/06-onwards-to-a-bigger-project-starting-project/components/meetups/MeetupDetail.js\";\n\n\n\nfunction MeetupDetail(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.img\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1nIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDNUIsc0JBQ0M7QUFBUyxhQUFTLEVBQUVDLCtEQUFPLENBQUNDLE1BQTVCO0FBQUEsNEJBQ0M7QUFBSyxTQUFHLEVBQUVGLEtBQUssQ0FBQ0c7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBQSxnQkFBS0gsS0FBSyxDQUFDSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUdDO0FBQUEsZ0JBQVVKLEtBQUssQ0FBQ0s7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELGVBSUM7QUFBQSxnQkFBSUwsS0FBSyxDQUFDTTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVFBOztBQUVjUCwyRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnO1xuXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWwocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsfT5cblx0XHRcdDxpbWcgc3JjPXtwcm9wcy5pbWd9PjwvaW1nPlxuXHRcdFx0PGgxPntwcm9wcy50aXRsZX08L2gxPlxuXHRcdFx0PGFkZHJlc3M+e3Byb3BzLmFkZHJlc3N9PC9hZGRyZXNzPlxuXHRcdFx0PHA+e3Byb3BzLmRlc2NyaXB0aW9ufTwvcD5cblx0XHQ8L3NlY3Rpb24+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[abc]/index.js":
/*!******************************!*\
  !*** ./pages/[abc]/index.js ***!
  \******************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/erictse/Downloads/React-nuxt-lecture-23/code/06-onwards-to-a-bigger-project-starting-project/pages/[abc]/index.js\";\n\n\n\nfunction def(props) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    img: props.Name2.image,\n    title: props.Name2.title,\n    address: props.Name2.address,\n    description: props.Name2.description\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (def); // for dynamic route[abc]\n\nasync function getStaticPaths() {\n  const getDatabase = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb+srv://Eric:123@cluster0.m95pz.mongodb.net/changehere?retryWrites=true&w=majority'); //return a promise\n\n  const db = getDatabase.db();\n  const databasename = db.collection('changehere');\n  const documentsofArray = await databasename.find({}, {\n    _id: 1\n  }).toArray(); // const meetups = await meetupsCollection.find({}, {}).toArray(); //find --> get all docs, find({},{}),first {} for filter, second, for {}item\n  //1 include only 1//toArray convert object to array\n\n  return {\n    fallback: false,\n    paths: documentsofArray.map(a => ({\n      params: {\n        abc: a._id.toString()\n      }\n    })) // paths: [{ params: { abc: 'm1' } }, { params: { abc: 'm2' } }]\n\n  };\n}\nasync function getStaticProps(context) {\n  const getDatabase = await mongodb__WEBPACK_IMPORTED_MODULE_2__[\"MongoClient\"].connect('mongodb+srv://Eric:123@cluster0.m95pz.mongodb.net/changehere?retryWrites=true&w=majority'); //return a promise\n\n  const db = getDatabase.db();\n  const databasename = db.collection('changehere');\n  const theParams = context.params.abc;\n  const theData = await databasename.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_2__[\"ObjectId\"])(theParams) //theParams aldy string from link\n\n  });\n  getDatabase.close();\n  return {\n    props: {\n      Name2: {\n        id: theData.toString(),\n        title: theData.title,\n        address: theData.address,\n        image: theData.image,\n        description: theData.description\n      }\n    },\n    revalidate: 1\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bYWJjXS9pbmRleC5qcz8wN2I5Il0sIm5hbWVzIjpbImRlZiIsInByb3BzIiwiTmFtZTIiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiZ2V0U3RhdGljUGF0aHMiLCJnZXREYXRhYmFzZSIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRiIiwiZGF0YWJhc2VuYW1lIiwiY29sbGVjdGlvbiIsImRvY3VtZW50c29mQXJyYXkiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJhIiwicGFyYW1zIiwiYWJjIiwidG9TdHJpbmciLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJ0aGVQYXJhbXMiLCJ0aGVEYXRhIiwiZmluZE9uZSIsIk9iamVjdElkIiwiY2xvc2UiLCJpZCIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsQ0FBYUMsS0FBYixFQUFvQjtBQUNuQixzQkFDQyxxRUFBQyx3RUFBRDtBQUNDLE9BQUcsRUFBRUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEtBRGxCO0FBRUMsU0FBSyxFQUFFRixLQUFLLENBQUNDLEtBQU4sQ0FBWUUsS0FGcEI7QUFHQyxXQUFPLEVBQUVILEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxPQUh0QjtBQUlDLGVBQVcsRUFBRUosS0FBSyxDQUFDQyxLQUFOLENBQVlJO0FBSjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVFBOztBQUVjTixrRUFBZixFLENBRUE7O0FBQ08sZUFBZU8sY0FBZixHQUFnQztBQUN0QyxRQUFNQyxXQUFXLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUN6QiwwRkFEeUIsQ0FBMUIsQ0FEc0MsQ0FHbkM7O0FBRUgsUUFBTUMsRUFBRSxHQUFHSCxXQUFXLENBQUNHLEVBQVosRUFBWDtBQUVBLFFBQU1DLFlBQVksR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsWUFBZCxDQUFyQjtBQUNBLFFBQU1DLGdCQUFnQixHQUFHLE1BQU1GLFlBQVksQ0FBQ0csSUFBYixDQUFrQixFQUFsQixFQUFzQjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUF0QixFQUFrQ0MsT0FBbEMsRUFBL0IsQ0FSc0MsQ0FTdEM7QUFDQTs7QUFFQSxTQUFPO0FBQ05DLFlBQVEsRUFBRSxLQURKO0FBRU5DLFNBQUssRUFBRUwsZ0JBQWdCLENBQUNNLEdBQWpCLENBQXNCQyxDQUFELEtBQVE7QUFBRUMsWUFBTSxFQUFFO0FBQUVDLFdBQUcsRUFBRUYsQ0FBQyxDQUFDTCxHQUFGLENBQU1RLFFBQU47QUFBUDtBQUFWLEtBQVIsQ0FBckIsQ0FGRCxDQUlOOztBQUpNLEdBQVA7QUFNQTtBQUNNLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzdDLFFBQU1sQixXQUFXLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUN6QiwwRkFEeUIsQ0FBMUIsQ0FENkMsQ0FHMUM7O0FBRUgsUUFBTUMsRUFBRSxHQUFHSCxXQUFXLENBQUNHLEVBQVosRUFBWDtBQUVBLFFBQU1DLFlBQVksR0FBR0QsRUFBRSxDQUFDRSxVQUFILENBQWMsWUFBZCxDQUFyQjtBQUVBLFFBQU1jLFNBQVMsR0FBR0QsT0FBTyxDQUFDSixNQUFSLENBQWVDLEdBQWpDO0FBRUEsUUFBTUssT0FBTyxHQUFHLE1BQU1oQixZQUFZLENBQUNpQixPQUFiLENBQXFCO0FBQzFDYixPQUFHLEVBQUVjLHdEQUFRLENBQUNILFNBQUQsQ0FENkIsQ0FDakI7O0FBRGlCLEdBQXJCLENBQXRCO0FBSUFuQixhQUFXLENBQUN1QixLQUFaO0FBRUEsU0FBTztBQUNOOUIsU0FBSyxFQUFFO0FBQ05DLFdBQUssRUFBRTtBQUNOOEIsVUFBRSxFQUFFSixPQUFPLENBQUNKLFFBQVIsRUFERTtBQUVOcEIsYUFBSyxFQUFFd0IsT0FBTyxDQUFDeEIsS0FGVDtBQUdOQyxlQUFPLEVBQUV1QixPQUFPLENBQUN2QixPQUhYO0FBSU5GLGFBQUssRUFBRXlCLE9BQU8sQ0FBQ3pCLEtBSlQ7QUFLTkcsbUJBQVcsRUFBRXNCLE9BQU8sQ0FBQ3RCO0FBTGY7QUFERCxLQUREO0FBVU4yQixjQUFVLEVBQUU7QUFWTixHQUFQO0FBWUEiLCJmaWxlIjoiLi9wYWdlcy9bYWJjXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNZWV0dXBEZXRhaWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbCc7XG5pbXBvcnQgeyBNb25nb0NsaWVudCwgT2JqZWN0SWQgfSBmcm9tICdtb25nb2RiJztcblxuZnVuY3Rpb24gZGVmKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PE1lZXR1cERldGFpbFxuXHRcdFx0aW1nPXtwcm9wcy5OYW1lMi5pbWFnZX1cblx0XHRcdHRpdGxlPXtwcm9wcy5OYW1lMi50aXRsZX1cblx0XHRcdGFkZHJlc3M9e3Byb3BzLk5hbWUyLmFkZHJlc3N9XG5cdFx0XHRkZXNjcmlwdGlvbj17cHJvcHMuTmFtZTIuZGVzY3JpcHRpb259XG5cdFx0Lz5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmO1xuXG4vLyBmb3IgZHluYW1pYyByb3V0ZVthYmNdXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG5cdGNvbnN0IGdldERhdGFiYXNlID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcblx0XHQnbW9uZ29kYitzcnY6Ly9FcmljOjEyM0BjbHVzdGVyMC5tOTVwei5tb25nb2RiLm5ldC9jaGFuZ2VoZXJlP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcblx0KTsgLy9yZXR1cm4gYSBwcm9taXNlXG5cblx0Y29uc3QgZGIgPSBnZXREYXRhYmFzZS5kYigpO1xuXG5cdGNvbnN0IGRhdGFiYXNlbmFtZSA9IGRiLmNvbGxlY3Rpb24oJ2NoYW5nZWhlcmUnKTtcblx0Y29uc3QgZG9jdW1lbnRzb2ZBcnJheSA9IGF3YWl0IGRhdGFiYXNlbmFtZS5maW5kKHt9LCB7IF9pZDogMSB9KS50b0FycmF5KCk7XG5cdC8vIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7fSkudG9BcnJheSgpOyAvL2ZpbmQgLS0+IGdldCBhbGwgZG9jcywgZmluZCh7fSx7fSksZmlyc3Qge30gZm9yIGZpbHRlciwgc2Vjb25kLCBmb3Ige31pdGVtXG5cdC8vMSBpbmNsdWRlIG9ubHkgMS8vdG9BcnJheSBjb252ZXJ0IG9iamVjdCB0byBhcnJheVxuXG5cdHJldHVybiB7XG5cdFx0ZmFsbGJhY2s6IGZhbHNlLFxuXHRcdHBhdGhzOiBkb2N1bWVudHNvZkFycmF5Lm1hcCgoYSkgPT4gKHsgcGFyYW1zOiB7IGFiYzogYS5faWQudG9TdHJpbmcoKSB9IH0pKVxuXG5cdFx0Ly8gcGF0aHM6IFt7IHBhcmFtczogeyBhYmM6ICdtMScgfSB9LCB7IHBhcmFtczogeyBhYmM6ICdtMicgfSB9XVxuXHR9O1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcblx0Y29uc3QgZ2V0RGF0YWJhc2UgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KFxuXHRcdCdtb25nb2RiK3NydjovL0VyaWM6MTIzQGNsdXN0ZXIwLm05NXB6Lm1vbmdvZGIubmV0L2NoYW5nZWhlcmU/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuXHQpOyAvL3JldHVybiBhIHByb21pc2VcblxuXHRjb25zdCBkYiA9IGdldERhdGFiYXNlLmRiKCk7XG5cblx0Y29uc3QgZGF0YWJhc2VuYW1lID0gZGIuY29sbGVjdGlvbignY2hhbmdlaGVyZScpO1xuXG5cdGNvbnN0IHRoZVBhcmFtcyA9IGNvbnRleHQucGFyYW1zLmFiYztcblxuXHRjb25zdCB0aGVEYXRhID0gYXdhaXQgZGF0YWJhc2VuYW1lLmZpbmRPbmUoe1xuXHRcdF9pZDogT2JqZWN0SWQodGhlUGFyYW1zKSAvL3RoZVBhcmFtcyBhbGR5IHN0cmluZyBmcm9tIGxpbmtcblx0fSk7XG5cblx0Z2V0RGF0YWJhc2UuY2xvc2UoKTtcblxuXHRyZXR1cm4ge1xuXHRcdHByb3BzOiB7XG5cdFx0XHROYW1lMjoge1xuXHRcdFx0XHRpZDogdGhlRGF0YS50b1N0cmluZygpLFxuXHRcdFx0XHR0aXRsZTogdGhlRGF0YS50aXRsZSxcblx0XHRcdFx0YWRkcmVzczogdGhlRGF0YS5hZGRyZXNzLFxuXHRcdFx0XHRpbWFnZTogdGhlRGF0YS5pbWFnZSxcblx0XHRcdFx0ZGVzY3JpcHRpb246IHRoZURhdGEuZGVzY3JpcHRpb25cblx0XHRcdH1cblx0XHR9LFxuXHRcdHJldmFsaWRhdGU6IDFcblx0fTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[abc]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });