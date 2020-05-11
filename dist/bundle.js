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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script/entry.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/script/entry.ts":
/*!*****************************!*\
  !*** ./src/script/entry.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./mobile */ "./src/script/mobile.ts");
__webpack_require__(/*! ./popup */ "./src/script/popup.ts");
__webpack_require__(/*! ./fullscreen */ "./src/script/fullscreen.ts");


/***/ }),

/***/ "./src/script/fullscreen.ts":
/*!**********************************!*\
  !*** ./src/script/fullscreen.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById("fullscreen-btn").addEventListener("click", toggleFullscreen, true);
document.addEventListener("fullscreenchange", detectFullscreen, true);
document.addEventListener("mozfullscreenchange", detectFullscreen, true);
document.addEventListener("webkitfullscreenchange", detectFullscreen, true);
document.addEventListener("msfullscreenchange", detectFullscreen, true);
function detectFullscreen() {
    if (document.fullscreenElement) {
        console.log("Fullscreen");
    }
    else {
        console.log("Windowed");
    }
}
function toggleFullscreen() {
    if ((window.innerWidth === screen.width && window.innerHeight === screen.height)) {
        document.exitFullscreen().catch(function () { return document.documentElement.requestFullscreen(); });
    }
    else {
        document.documentElement.requestFullscreen().catch(function () { return document.exitFullscreen(); });
    }
}


/***/ }),

/***/ "./src/script/mobile.ts":
/*!******************************!*\
  !*** ./src/script/mobile.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("load", function () {
    if (isDevice()) {
        enableMobileLayout();
        detectOrientation();
        window.addEventListener("orientationchange", detectOrientation, true);
    }
}, true);
function isDevice() {
    return !!(navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i));
}
function detectOrientation() {
    if (window.innerWidth > window.innerHeight) {
    }
    else {
        // Rotation Notification Toggle
    }
}
function enableMobileLayout() {
    document.body.setAttribute("device", "true");
}


/***/ }),

/***/ "./src/script/popup.ts":
/*!*****************************!*\
  !*** ./src/script/popup.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var triggerButtonArray = document.getElementsByClassName("popup-trigger");
var currentPopup;
var overlay = document.getElementById("overlay");
var _loop_1 = function (i) {
    triggerButtonArray[i].addEventListener("click", function () { return openPopup(triggerButtonArray[i].getAttribute("data-target")); }, true);
};
for (var i = 0; i < triggerButtonArray.length; i++) {
    _loop_1(i);
}
function openPopup(popupID) {
    currentPopup = document.getElementById(popupID);
    overlay.removeAttribute("hidden");
    currentPopup.removeAttribute("hidden");
    overlay.addEventListener("click", function (e) {
        if (!currentPopup.contains(e.target)) {
            closePopup();
        }
    }, { once: true });
    currentPopup.getElementsByClassName("popup-close-btn")[0].addEventListener("click", closePopup, { once: true });
}
function closePopup() {
    overlay.setAttribute("hidden", "");
    currentPopup.setAttribute("hidden", "");
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9lbnRyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0L2Z1bGxzY3JlZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9tb2JpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdC9wb3B1cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsOERBQWtCO0FBQ2xCLDREQUFpQjtBQUNqQixzRUFBc0I7Ozs7Ozs7Ozs7OztBQ0Z0QixRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxn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Q0FBQyxDQUFDLEVBQTVELENBQTRELEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRDlILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFO1lBQXpDLENBQUM7Q0FFVDtBQUVELFNBQVMsU0FBUyxDQUFDLE9BQU87SUFDdEIsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNsQyxZQUFZLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxVQUFVLEVBQUUsQ0FBQztTQUNoQjtJQUNMLENBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ2pCLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztBQUNsSCxDQUFDO0FBQ0QsU0FBUyxVQUFVO0lBQ2YsT0FBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbkMsWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zY3JpcHQvZW50cnkudHNcIik7XG4iLCJpbXBvcnQgXCIuL21vYmlsZVwiO1xyXG5pbXBvcnQgXCIuL3BvcHVwXCI7XHJcbmltcG9ydCBcIi4vZnVsbHNjcmVlblwiO1xyXG4iLCJkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZ1bGxzY3JlZW4tYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVGdWxsc2NyZWVuLCB0cnVlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZ1bGxzY3JlZW5jaGFuZ2VcIiwgZGV0ZWN0RnVsbHNjcmVlbiwgdHJ1ZSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIsIGRldGVjdEZ1bGxzY3JlZW4sIHRydWUpO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLCBkZXRlY3RGdWxsc2NyZWVuLCB0cnVlKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1zZnVsbHNjcmVlbmNoYW5nZVwiLCBkZXRlY3RGdWxsc2NyZWVuLCB0cnVlKTtcclxuXHJcbmZ1bmN0aW9uIGRldGVjdEZ1bGxzY3JlZW4oKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZnVsbHNjcmVlbkVsZW1lbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZ1bGxzY3JlZW5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiV2luZG93ZWRcIik7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlRnVsbHNjcmVlbigpIHtcclxuICAgIGlmKCh3aW5kb3cuaW5uZXJXaWR0aCA9PT0gc2NyZWVuLndpZHRoICYmIHdpbmRvdy5pbm5lckhlaWdodCA9PT0gc2NyZWVuLmhlaWdodCkpIHtcclxuICAgICAgICBkb2N1bWVudC5leGl0RnVsbHNjcmVlbigpLmNhdGNoKCgpID0+IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5yZXF1ZXN0RnVsbHNjcmVlbigpKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlcXVlc3RGdWxsc2NyZWVuKCkuY2F0Y2goKCkgPT4gZG9jdW1lbnQuZXhpdEZ1bGxzY3JlZW4oKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgaWYgKGlzRGV2aWNlKCkpIHtcclxuICAgICAgICBlbmFibGVNb2JpbGVMYXlvdXQoKTtcclxuICAgICAgICBkZXRlY3RPcmllbnRhdGlvbigpO1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgZGV0ZWN0T3JpZW50YXRpb24sIHRydWUpO1xyXG4gICAgfVxyXG59LCB0cnVlKTtcclxuXHJcbmZ1bmN0aW9uIGlzRGV2aWNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEhKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0FuZHJvaWQvaSlcclxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC93ZWJPUy9pKVxyXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQaG9uZS9pKVxyXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL2lQYWQvaSlcclxuICAgICAgICB8fCBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUG9kL2kpXHJcbiAgICAgICAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQmxhY2tCZXJyeS9pKVxyXG4gICAgICAgIHx8IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1dpbmRvd3MgUGhvbmUvaSkpO1xyXG59XHJcbmZ1bmN0aW9uIGRldGVjdE9yaWVudGF0aW9uKCkge1xyXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSb3RhdGlvbiBOb3RpZmljYXRpb24gVG9nZ2xlXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZW5hYmxlTW9iaWxlTGF5b3V0KCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoXCJkZXZpY2VcIiwgXCJ0cnVlXCIpO1xyXG59XHJcbiIsImNvbnN0IHRyaWdnZXJCdXR0b25BcnJheSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwb3B1cC10cmlnZ2VyXCIpO1xyXG5sZXQgY3VycmVudFBvcHVwO1xyXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpO1xyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0cmlnZ2VyQnV0dG9uQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIHRyaWdnZXJCdXR0b25BcnJheVtpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gb3BlblBvcHVwKHRyaWdnZXJCdXR0b25BcnJheVtpXS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRhcmdldFwiKSksIHRydWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcGVuUG9wdXAocG9wdXBJRCkge1xyXG4gICAgY3VycmVudFBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocG9wdXBJRCk7XHJcblxyXG4gICAgb3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XHJcbiAgICBjdXJyZW50UG9wdXAucmVtb3ZlQXR0cmlidXRlKFwiaGlkZGVuXCIpO1xyXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgICBpZiAoIWN1cnJlbnRQb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgICAgICAgY2xvc2VQb3B1cCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIHtvbmNlOiB0cnVlfSk7XHJcbiAgICBjdXJyZW50UG9wdXAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBvcHVwLWNsb3NlLWJ0blwiKVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VQb3B1cCwge29uY2U6IHRydWV9KTtcclxufVxyXG5mdW5jdGlvbiBjbG9zZVBvcHVwKCkge1xyXG4gICAgb3ZlcmxheS5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJcIik7XHJcbiAgICBjdXJyZW50UG9wdXAuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiXCIpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=