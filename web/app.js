/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./web/js/app.js":
/*!***********************!*\
  !*** ./web/js/app.js ***!
  \***********************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener('DOMContentLoaded', function (event) {
  //========DOM ELEMENTS======================================================================================
  var buttons = document.querySelectorAll('.btn-group');
  var oddBoxes = document.querySelectorAll('.odd');
  var evenBoxes = document.querySelectorAll('.even');
  var even = document.querySelectorAll('.show-even');
  var odd = document.querySelectorAll('.show-odd');
  var all = document.querySelectorAll('.show-all');
  var homeAway = document.querySelectorAll('.nav-links');
  var cards = document.querySelectorAll('.card');
  var btns = document.querySelectorAll('.but');
  var checkedButton = document.querySelector('.checked'); // elements to add event listeners to

  var arrayButtons = _toConsumableArray(buttons[0].children);

  var navArray = _toConsumableArray(homeAway[0].children); //========FUNCTIONS======================================================================================
  // Click function to be added to the boxes buttons to decide which action to take


  var clickButton = function clickButton(e) {
    console.log(e.target); // if the target does not have an id, find the element with 'checked' id and remove it

    if (e.target["class"]) {
      document.querySelector('.checked').classList.remove('checked'); // give the new element the class 'checked

      e.target.classList = 'checked';
    }
  }; // Simple function to flip the colors of the nav bar links


  var nav = function nav(e) {}; //========EVENT LISTENERS===================================================================================


  arrayButtons.forEach(function (btn) {
    btn.addEventListener('click', clickButton);
  });
  navArray.forEach(function (link) {
    link.addEventListener('click', nav);
  }); //==============================================================================

  btns.forEach(function (button) {
    button.addEventListener('mouseover', function () {
      gsap.to(button, {
        backgroundColor: "rgb(72, 69, 83)",
        duration: .1
      });
    });
  });
  btns.forEach(function (button) {
    button.addEventListener('mouseout', function () {
      gsap.to(button, {
        backgroundColor: "#646072",
        duration: .1
      });
    });
  });
  checkedButton.addEventListener('mouseout', function () {
    gsap.to(checkedButton, {
      backgroundColor: "rgb(253, 236, 202)",
      duration: .1
    });
  }); // =======================================================================================
  // event listeners for boxes
  // work on .play() and .reverse() after it is all working

  cards.forEach(function (card) {
    // defining this inside of the function limits it to only elements within that element
    var title = card.querySelector(".card-title");
    var subtext = card.querySelector("h4");
    var cardButton = card.querySelector(".card-btn");
    var cardHover = gsap.timeline({
      paused: true
    }).to(card, {
      y: -15,
      duration: .05,
      boxShadow: '0px 2px 18px 0px rgba(11, 11, 11, 0.56)'
    }).to(title, {
      color: 'black',
      duration: .05
    }).from(subtext, {
      opacity: 0,
      ease: Power4.easeOut,
      duration: .5
    }, ">").to(cardButton, {
      opacity: 1,
      ease: Power4.easeOut,
      duration: .01
    }, ">");
    card.addEventListener('mouseover', function () {
      cardHover.play();
    });
    card.addEventListener('mouseleave', function () {
      cardHover.reverse();
    });
  }); // =======================================================================================
  // SCROLL TRIGGER
  // Not completely finished -- other scrollTrigger is causing the hover animation to not work

  gsap.registerPlugin(ScrollTrigger); // Only plays once but works with all animations

  ScrollTrigger.batch(cards, {
    start: "top 95%",
    onEnter: function onEnter(card) {
      return gsap.to(card, {
        autoAlpha: 1,
        stagger: 0.1
      });
    }
  }); // ScrollTrigger.batch(cards, {
  //   // interval: .5,
  //   // start: "top, 85%",
  //   onEnter: card => gsap.to(card,
  //     {
  //       opacity: 1,
  //       stagger: .2,
  //       duration: .2,
  //       overwrite: true,
  //     }),
  //     onLeave: card => gsap.to(card, {
  //       opacity: 0,
  //       stagger: .2,
  //       duration: .1,
  //       overwrite: true,
  //     }),
  //     onEnterBack: card => gsap.to(card, {
  //       opacity: 1,
  //       stagger: .2,
  //       duration: .2,
  //       overwrite: true,
  //     }),
  //     onLeaveBack: card => gsap.to(card, {
  //       opacity: 0,
  //       stagger: .2,
  //       duration: .2,
  //       overwrite: true,
  //     })
  // })
});

/***/ }),

/***/ "./web/styles/variables.scss":
/*!***********************************!*\
  !*** ./web/styles/variables.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./web/styles/styles.scss":
/*!********************************!*\
  !*** ./web/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"styles": 0,
/******/ 			"variables": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["styles","variables"], () => (__webpack_require__("./web/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["styles","variables"], () => (__webpack_require__("./web/styles/variables.scss")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles","variables"], () => (__webpack_require__("./web/styles/styles.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;