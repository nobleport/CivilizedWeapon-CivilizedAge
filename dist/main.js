/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/welcome-page */ \"./src/pages/welcome-page.js\");\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  console.log('Dom Fully loaded and parsed'); // let element = document.getElementById('welcome');\n\n  new _pages_welcome_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUdBQyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFNO0FBQzlDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUQ4QyxDQUU5Qzs7QUFDQSxNQUFJSiwyREFBSjtBQUNILENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbGl6ZWR3ZWFwb24tY2l2aWxpemVkYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vcGFnZXMvd2VsY29tZS1wYWdlXCJcblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnRG9tIEZ1bGx5IGxvYWRlZCBhbmQgcGFyc2VkJyk7XG4gICAgLy8gbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZScpO1xuICAgIG5ldyBXZWxjb21lKCk7XG59KVxuXG5cblxuIl0sIm5hbWVzIjpbIldlbGNvbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pages/welcome-page.js":
/*!***********************************!*\
  !*** ./src/pages/welcome-page.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Welcome; }\n/* harmony export */ });\n/* harmony import */ var _workbench_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workbench-page */ \"./src/pages/workbench-page.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// const Workbench = require(\"./workbench-page\");\n\n\nvar Welcome = /*#__PURE__*/function () {\n  function Welcome() {\n    _classCallCheck(this, Welcome);\n\n    this.welcomeStructure();\n  }\n\n  _createClass(Welcome, [{\n    key: \"welcomeStructure\",\n    value: function welcomeStructure() {\n      var welcomePageFigure = document.createElement(\"figure\");\n      welcomePageFigure.id = 'welcome';\n      document.body.appendChild(welcomePageFigure);\n      var ul = document.createElement(\"ul\");\n      ul.id = \"welcome-text-box\";\n      console.log(welcomePageFigure);\n      welcomePageFigure.appendChild(ul);\n      var li1 = document.createElement(\"li\");\n      li1.className = \"welcome-1\";\n      ul.appendChild(li1);\n      var li2 = document.createElement(\"li\");\n      li2.className = \"welcome-2\";\n      ul.appendChild(li2);\n      var li3 = document.createElement(\"li\");\n      li3.className = \"welcome-3\";\n      ul.appendChild(li3);\n      var li4 = document.createElement(\"a\");\n      li4.className = \"launch-button\";\n      li4.href = \"#\"; //this should link us to generating the workbench page//\n\n      ul.appendChild(li4);\n      li4.addEventListener(\"click\", this.switchScreens.bind(this));\n      this.welcomeContent(li1, li2, li3, li4);\n    }\n  }, {\n    key: \"welcomeContent\",\n    value: function welcomeContent(li1, li2, li3, li4) {\n      li1.innerHTML = 'Welcome, Padawan';\n      li2.innerHTML = 'These are your first steps... -Ben Kenobi';\n      li3.innerHTML = 'Before you can be fully accepted into the Jedi Order, you must construct your first lightsaber prototype';\n      li3.innerHTML += '. Think carefully about your design. Remember, there are consequences to every choice, and the choices ';\n      li3.innerHTML += 'you make now will help determine your focus as a Jedi. May the Force be with you.';\n      li4.innerHTML = \"Launch\";\n    } // addEventListener(\"click\",)\n\n  }, {\n    key: \"switchScreens\",\n    value: function switchScreens(e) {\n      var welcomeBox = document.getElementById('welcome');\n      document.body.removeChild(welcomeBox);\n      new _workbench_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); //this is where we are switching pages\n    }\n  }]);\n\n  return Welcome;\n}(); // module.exports = Welcome;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd2VsY29tZS1wYWdlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJDO0FBQ2pCLHFCQUFhO0FBQUE7O0FBQ1QsU0FBS0MsZ0JBQUw7QUFDSDs7OztXQUNELDRCQUFrQjtBQUNkLFVBQUlDLGlCQUFpQixHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBeEI7QUFDQUYsTUFBQUEsaUJBQWlCLENBQUNHLEVBQWxCLEdBQXVCLFNBQXZCO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxpQkFBMUI7QUFDQSxVQUFJTSxFQUFFLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFUO0FBQ0FJLE1BQUFBLEVBQUUsQ0FBQ0gsRUFBSCxHQUFRLGtCQUFSO0FBQ0FJLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUixpQkFBWjtBQUNBQSxNQUFBQSxpQkFBaUIsQ0FBQ0ssV0FBbEIsQ0FBOEJDLEVBQTlCO0FBQ0EsVUFBSUcsR0FBRyxHQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVjtBQUNJTyxNQUFBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsV0FBaEI7QUFDQUosTUFBQUEsRUFBRSxDQUFDRCxXQUFILENBQWVJLEdBQWY7QUFDSixVQUFJRSxHQUFHLEdBQUdWLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFWO0FBQ0lTLE1BQUFBLEdBQUcsQ0FBQ0QsU0FBSixHQUFnQixXQUFoQjtBQUNBSixNQUFBQSxFQUFFLENBQUNELFdBQUgsQ0FBZU0sR0FBZjtBQUNKLFVBQUlDLEdBQUcsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLElBQXZCLENBQVY7QUFDSVUsTUFBQUEsR0FBRyxDQUFDRixTQUFKLEdBQWdCLFdBQWhCO0FBQ0FKLE1BQUFBLEVBQUUsQ0FBQ0QsV0FBSCxDQUFlTyxHQUFmO0FBQ0osVUFBSUMsR0FBRyxHQUFHWixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBVjtBQUNJVyxNQUFBQSxHQUFHLENBQUNILFNBQUosR0FBZ0IsZUFBaEI7QUFDQUcsTUFBQUEsR0FBRyxDQUFDQyxJQUFKLEdBQVcsR0FBWCxDQW5CVSxDQW9CVjs7QUFDQVIsTUFBQUEsRUFBRSxDQUFDRCxXQUFILENBQWVRLEdBQWY7QUFDSkEsTUFBQUEsR0FBRyxDQUFDRSxnQkFBSixDQUFxQixPQUFyQixFQUE4QixLQUFLQyxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUE5QjtBQUNBLFdBQUtDLGNBQUwsQ0FBb0JULEdBQXBCLEVBQXlCRSxHQUF6QixFQUE4QkMsR0FBOUIsRUFBbUNDLEdBQW5DO0FBQ0g7OztXQUVELHdCQUFlSixHQUFmLEVBQW9CRSxHQUFwQixFQUF5QkMsR0FBekIsRUFBOEJDLEdBQTlCLEVBQWtDO0FBQzlCSixNQUFBQSxHQUFHLENBQUNVLFNBQUosR0FBZ0Isa0JBQWhCO0FBQ0FSLE1BQUFBLEdBQUcsQ0FBQ1EsU0FBSixHQUFnQiwyQ0FBaEI7QUFDQVAsTUFBQUEsR0FBRyxDQUFDTyxTQUFKLEdBQWdCLDBHQUFoQjtBQUNBUCxNQUFBQSxHQUFHLENBQUNPLFNBQUosSUFBaUIseUdBQWpCO0FBQ0FQLE1BQUFBLEdBQUcsQ0FBQ08sU0FBSixJQUFpQixtRkFBakI7QUFDQU4sTUFBQUEsR0FBRyxDQUFDTSxTQUFKLEdBQWdCLFFBQWhCO0FBQ0gsTUFFRDs7OztXQUNBLHVCQUFjQyxDQUFkLEVBQWlCO0FBQ2IsVUFBSUMsVUFBVSxHQUFHcEIsUUFBUSxDQUFDcUIsY0FBVCxDQUF3QixTQUF4QixDQUFqQjtBQUNBckIsTUFBQUEsUUFBUSxDQUFDRyxJQUFULENBQWNtQixXQUFkLENBQTBCRixVQUExQjtBQUNBLFVBQUl4Qix1REFBSixHQUhhLENBSWI7QUFDSDs7OztLQUlMIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2l2aWxpemVkd2VhcG9uLWNpdmlsaXplZGFnZS8uL3NyYy9wYWdlcy93ZWxjb21lLXBhZ2UuanM/MDc3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBXb3JrYmVuY2ggPSByZXF1aXJlKFwiLi93b3JrYmVuY2gtcGFnZVwiKTtcbmltcG9ydCBXb3JrYmVuY2ggZnJvbSBcIi4vd29ya2JlbmNoLXBhZ2VcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWxjb21lIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLndlbGNvbWVTdHJ1Y3R1cmUoKTtcbiAgICB9XG4gICAgd2VsY29tZVN0cnVjdHVyZSgpe1xuICAgICAgICBsZXQgd2VsY29tZVBhZ2VGaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpXG4gICAgICAgIHdlbGNvbWVQYWdlRmlndXJlLmlkID0gJ3dlbGNvbWUnXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2VsY29tZVBhZ2VGaWd1cmUpXG4gICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgICAgICB1bC5pZCA9IFwid2VsY29tZS10ZXh0LWJveFwiXG4gICAgICAgIGNvbnNvbGUubG9nKHdlbGNvbWVQYWdlRmlndXJlKVxuICAgICAgICB3ZWxjb21lUGFnZUZpZ3VyZS5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICAgIGxldCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsaTEuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLTFcIjtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpMSk7XG4gICAgICAgIGxldCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsaTIuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLTJcIjtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpMik7XG4gICAgICAgIGxldCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsaTMuY2xhc3NOYW1lID0gXCJ3ZWxjb21lLTNcIjtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpMyk7XG4gICAgICAgIGxldCBsaTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgICAgIGxpNC5jbGFzc05hbWUgPSBcImxhdW5jaC1idXR0b25cIjtcbiAgICAgICAgICAgIGxpNC5ocmVmID0gXCIjXCI7XG4gICAgICAgICAgICAvL3RoaXMgc2hvdWxkIGxpbmsgdXMgdG8gZ2VuZXJhdGluZyB0aGUgd29ya2JlbmNoIHBhZ2UvL1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGk0KVxuICAgICAgICBsaTQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc3dpdGNoU2NyZWVucy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy53ZWxjb21lQ29udGVudChsaTEsIGxpMiwgbGkzLCBsaTQpO1xuICAgIH1cblxuICAgIHdlbGNvbWVDb250ZW50KGxpMSwgbGkyLCBsaTMsIGxpNCl7XG4gICAgICAgIGxpMS5pbm5lckhUTUwgPSAnV2VsY29tZSwgUGFkYXdhbidcbiAgICAgICAgbGkyLmlubmVySFRNTCA9ICdUaGVzZSBhcmUgeW91ciBmaXJzdCBzdGVwcy4uLiAtQmVuIEtlbm9iaSdcbiAgICAgICAgbGkzLmlubmVySFRNTCA9ICdCZWZvcmUgeW91IGNhbiBiZSBmdWxseSBhY2NlcHRlZCBpbnRvIHRoZSBKZWRpIE9yZGVyLCB5b3UgbXVzdCBjb25zdHJ1Y3QgeW91ciBmaXJzdCBsaWdodHNhYmVyIHByb3RvdHlwZSdcbiAgICAgICAgbGkzLmlubmVySFRNTCArPSAnLiBUaGluayBjYXJlZnVsbHkgYWJvdXQgeW91ciBkZXNpZ24uIFJlbWVtYmVyLCB0aGVyZSBhcmUgY29uc2VxdWVuY2VzIHRvIGV2ZXJ5IGNob2ljZSwgYW5kIHRoZSBjaG9pY2VzICdcbiAgICAgICAgbGkzLmlubmVySFRNTCArPSAneW91IG1ha2Ugbm93IHdpbGwgaGVscCBkZXRlcm1pbmUgeW91ciBmb2N1cyBhcyBhIEplZGkuIE1heSB0aGUgRm9yY2UgYmUgd2l0aCB5b3UuJ1xuICAgICAgICBsaTQuaW5uZXJIVE1MID0gXCJMYXVuY2hcIlxuICAgIH1cblxuICAgIC8vIGFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLClcbiAgICBzd2l0Y2hTY3JlZW5zKGUpIHtcbiAgICAgICAgbGV0IHdlbGNvbWVCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VsY29tZScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHdlbGNvbWVCb3gpXG4gICAgICAgIG5ldyBXb3JrYmVuY2goKTtcbiAgICAgICAgLy90aGlzIGlzIHdoZXJlIHdlIGFyZSBzd2l0Y2hpbmcgcGFnZXNcbiAgICB9XG4gICAgXG59XG5cbi8vIG1vZHVsZS5leHBvcnRzID0gV2VsY29tZTtcblxuXG4iXSwibmFtZXMiOlsiV29ya2JlbmNoIiwiV2VsY29tZSIsIndlbGNvbWVTdHJ1Y3R1cmUiLCJ3ZWxjb21lUGFnZUZpZ3VyZSIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiYm9keSIsImFwcGVuZENoaWxkIiwidWwiLCJjb25zb2xlIiwibG9nIiwibGkxIiwiY2xhc3NOYW1lIiwibGkyIiwibGkzIiwibGk0IiwiaHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzd2l0Y2hTY3JlZW5zIiwiYmluZCIsIndlbGNvbWVDb250ZW50IiwiaW5uZXJIVE1MIiwiZSIsIndlbGNvbWVCb3giLCJnZXRFbGVtZW50QnlJZCIsInJlbW92ZUNoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/welcome-page.js\n");

/***/ }),

/***/ "./src/pages/workbench-page.js":
/*!*************************************!*\
  !*** ./src/pages/workbench-page.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Workbench; }\n/* harmony export */ });\n/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome-page */ \"./src/pages/welcome-page.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// const Welcome = require(\"./welcome-page\")\n\n\nvar Workbench = /*#__PURE__*/function () {\n  function Workbench() {\n    _classCallCheck(this, Workbench);\n\n    this.workbenchStructure();\n  }\n\n  _createClass(Workbench, [{\n    key: \"workbenchStructure\",\n    value: function workbenchStructure() {\n      var workbenchPageFigure = document.createElement(\"figure\");\n      workbenchPageFigure.id = 'workbench';\n      document.body.appendChild(workbenchPageFigure);\n      var backButton = document.createElement(\"div\");\n      backButton.id = \"back-button\";\n      workbenchPageFigure.appendChild(backButton);\n      backButton.innerHTML = \"Back\";\n      backButton.addEventListener(\"click\", this.toWelcomeScreen.bind(this));\n    }\n  }, {\n    key: \"toWelcomeScreen\",\n    value: function toWelcomeScreen() {\n      new _welcome_page__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    }\n  }]);\n\n  return Workbench;\n}(); // module.exports = Workbench;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvd29ya2JlbmNoLXBhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVxQkM7QUFFakIsdUJBQWU7QUFBQTs7QUFDWCxTQUFLQyxrQkFBTDtBQUNIOzs7O1dBRUQsOEJBQW9CO0FBQ2hCLFVBQUlDLG1CQUFtQixHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBMUI7QUFDQUYsTUFBQUEsbUJBQW1CLENBQUNHLEVBQXBCLEdBQXlCLFdBQXpCO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjQyxXQUFkLENBQTBCTCxtQkFBMUI7QUFDQSxVQUFJTSxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFqQjtBQUNBSSxNQUFBQSxVQUFVLENBQUNILEVBQVgsR0FBZ0IsYUFBaEI7QUFDQUgsTUFBQUEsbUJBQW1CLENBQUNLLFdBQXBCLENBQWdDQyxVQUFoQztBQUNBQSxNQUFBQSxVQUFVLENBQUNDLFNBQVgsR0FBdUIsTUFBdkI7QUFDQUQsTUFBQUEsVUFBVSxDQUFDRSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxLQUFLQyxlQUFMLENBQXFCQyxJQUFyQixDQUEwQixJQUExQixDQUFyQztBQUNIOzs7V0FFRCwyQkFBaUI7QUFDYixVQUFJYixxREFBSjtBQUNIOzs7O0tBRUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbGl6ZWR3ZWFwb24tY2l2aWxpemVkYWdlLy4vc3JjL3BhZ2VzL3dvcmtiZW5jaC1wYWdlLmpzPzdkOWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgV2VsY29tZSA9IHJlcXVpcmUoXCIuL3dlbGNvbWUtcGFnZVwiKVxuaW1wb3J0IFdlbGNvbWUgZnJvbSBcIi4vd2VsY29tZS1wYWdlXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29ya2JlbmNoIHtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy53b3JrYmVuY2hTdHJ1Y3R1cmUoKTtcbiAgICB9XG5cbiAgICB3b3JrYmVuY2hTdHJ1Y3R1cmUoKXtcbiAgICAgICAgbGV0IHdvcmtiZW5jaFBhZ2VGaWd1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZmlndXJlXCIpO1xuICAgICAgICB3b3JrYmVuY2hQYWdlRmlndXJlLmlkID0gJ3dvcmtiZW5jaCc7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod29ya2JlbmNoUGFnZUZpZ3VyZSk7XG4gICAgICAgIGxldCBiYWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmFja0J1dHRvbi5pZCA9IFwiYmFjay1idXR0b25cIjtcbiAgICAgICAgd29ya2JlbmNoUGFnZUZpZ3VyZS5hcHBlbmRDaGlsZChiYWNrQnV0dG9uKVxuICAgICAgICBiYWNrQnV0dG9uLmlubmVySFRNTCA9IFwiQmFja1wiO1xuICAgICAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnRvV2VsY29tZVNjcmVlbi5iaW5kKHRoaXMpKVxuICAgIH1cbiAgICBcbiAgICB0b1dlbGNvbWVTY3JlZW4oKXtcbiAgICAgICAgbmV3IFdlbGNvbWUoKTtcbiAgICB9XG59XG4vLyBtb2R1bGUuZXhwb3J0cyA9IFdvcmtiZW5jaDsiXSwibmFtZXMiOlsiV2VsY29tZSIsIldvcmtiZW5jaCIsIndvcmtiZW5jaFN0cnVjdHVyZSIsIndvcmtiZW5jaFBhZ2VGaWd1cmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImJhY2tCdXR0b24iLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwidG9XZWxjb21lU2NyZWVuIiwiYmluZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/workbench-page.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaXZpbGl6ZWR3ZWFwb24tY2l2aWxpemVkYWdlLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;