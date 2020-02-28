function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./user/user.module": ["./src/app/user/user.module.ts", "user-user-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/create-event.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/create-event.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsCreateEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1>New Event</h1>\r\n<hr>\r\n<div class=\"col-md-6\">\r\n  <form #newEventForm=\"ngForm\" (ngSubmit)=\"saveEvent(newEventForm.value)\" autocomplete=\"off\" novalidate>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.name?.invalid && newEventForm.controls.name?.touched}\">\r\n      <label for=\"eventName\">Event Name:</label>\r\n      <em *ngIf=\"newEventForm.controls.name?.invalid && (newEventForm.controls.name?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.name\" name=\"name\" required id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Name of your event...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.date?.invalid && newEventForm.controls.date?.touched}\">\r\n      <label for=\"eventDate\">Event Date:</label>\r\n      <em *ngIf=\"newEventForm.controls.date?.invalid && (newEventForm.controls.date?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.date\" name=\"date\" required id=\"eventDate\" type=\"text\" class=\"form-control\" placeholder=\"format (mm/dd/yyyy)...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.time?.invalid && newEventForm.controls.time?.touched}\">\r\n      <label for=\"eventTime\">Event Time:</label>\r\n      <em *ngIf=\"newEventForm.controls.time?.invalid && (newEventForm.controls.time?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.time\" name=\"time\" required id=\"eventTime\" type=\"text\" class=\"form-control\" placeholder=\"start and end time...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.price?.invalid && newEventForm.controls.price?.touched}\">\r\n      <label for=\"eventPrice\">Event Price:</label>\r\n      <em *ngIf=\"newEventForm.controls.price?.invalid && (newEventForm.controls.price?.touched)\">Required</em>\r\n      <input (ngModel)=\"newEvent.price\" name=\"price\" required id=\"eventPrice\" type=\"text\" type=\"number\" class=\"form-control\" placeholder=\"event price...\" />\r\n    </div>\r\n    <div ngModelGroup=\"location\" #locationGroup=\"ngModelGroup\" validateLocation>\r\n      <em *ngIf=\"locationGroup?.invalid &&\r\n      locationGroup?.touched\">\r\n    You must enter either the full location OR \r\n  an Online Url</em>\r\n        <div class=\"form-group\">\r\n        <label for=\"address\">Event Location:</label>\r\n        <input (ngModel)=\"newEvent.address\" name=\"address\" id=\"address\" type=\"text\" class=\"form-control\" placeholder=\"Address of event...\" />\r\n        </div>\r\n        <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <input (ngModel)=\"newEvent.city\" name=\"city\" id=\"city\" type=\"text\" class=\"form-control\" placeholder=\"City...\" />\r\n        </div>\r\n        <div class=\"col-md-6\" >\r\n            <input (ngModel)=\"newEvent.country\" name=\"country\" id=\"country\" type=\"text\" class=\"form-control\" placeholder=\"Country...\" />\r\n        </div>\r\n            </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"onlineUrl\">Online Url:</label>\r\n      <input (ngModel)=\"newEvent.onlineUrl\"\r\n       name=\"onlineUrl\" \r\n       id=\"onlineUrl\" \r\n       type=\"text\" \r\n       class=\"form-control\" (change)\r\n       =\"locationGroup.control.controls.address.\r\n       updateValueAndValidity()\" placeholder=\"Online Url...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched}\">\r\n      <label for=\"imageUrl\">Image:</label>\r\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched && newEventForm.controls.imageUrl?.errors.required\">Required</em>\r\n      <em *ngIf=\"newEventForm.controls.imageUrl?.invalid && newEventForm.controls.imageUrl?.touched  && newEventForm.controls.imageUrl?.errors.pattern\">Must be a png or jpg url</em>\r\n      <input (ngModel)=\"newEvent.imageUrl\" name=\"imageUrl\" required pattern=\".*\\/.*.(png|jpg)\" id=\"imageUrl\" type=\"text\" class=\"form-control\" placeholder=\"url of image...\" />\r\n      <img [src]=\"newEventForm.controls.imageUrl.value\"\r\n      *ngIf=\"newEventForm.controls.imageUrl?.valid\" />\r\n    </div>\r\n    \r\n    <button type=\"submit\" [disabled]=\"newEventForm.invalid\"  class=\"btn btn-primary\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\">Cancel</button>\r\n  </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/create-session.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/create-session.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventDetailsCreateSessionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-12\">\r\n  <h3>Create Session</h3>\r\n</div>\r\n<div class=\"col-md-6\">\r\n  <form [formGroup]=\"newSessionForm\" (ngSubmit)=\"saveSession(newSessionForm.value)\" autocomplete=\"off\">\r\n    <div class=\"form-group\" [ngClass]=\"{'error': name.invalid && name.dirty }\">\r\n      <label for=\"sessionName\">Session Name:</label>\r\n      <em *ngIf=\"name.invalid && name.dirty\">Required</em>\r\n      <input formControlName=\"name\" id=\"sessionName\" type=\"text\" class=\"form-control\" placeholder=\"session name...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': presenter.invalid && presenter.dirty }\">\r\n      <label for=\"eventDate\">Presenter:</label>\r\n      <em *ngIf=\"presenter.invalid && presenter.dirty\">Required</em>\r\n      <input formControlName=\"presenter\" id=\"presenter\" type=\"text\" class=\"form-control\" placeholder=\"presenter...\" />\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': duration.invalid && duration.dirty }\">\r\n      <label for=\"duration\">Duration:</label>\r\n      <em *ngIf=\"duration.invalid && duration.dirty\">Required</em>\r\n      <select formControlName=\"duration\" class=\"form-control\">\r\n        <option value=\"\">select duration...</option>\r\n        <option value=\"1\">Half Hour</option>\r\n        <option value=\"2\">1 Hour</option>\r\n        <option value=\"3\">Half Day</option>\r\n        <option value=\"4\">Full Day</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': level.invalid && level.dirty }\">\r\n      <label for=\"level\">Level:</label>\r\n      <em *ngIf=\"level.invalid && level.dirty\">Required</em>\r\n      <select formControlName=\"level\" class=\"form-control\">\r\n        <option value=\"\">select level...</option>\r\n        <option value=\"Beginner\">Beginner</option>\r\n        <option value=\"Intermediate\">Intermediate</option>\r\n        <option value=\"Advanced\">Advanced</option>\r\n      </select>\r\n    </div>\r\n    <div class=\"form-group\" [ngClass]=\"{'error': abstract.invalid && abstract.dirty }\">\r\n      <label for=\"abstract\">Abstract:</label>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.required\">Required</em>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.maxLength\">Cannot exceed 400 characters</em>\r\n      <em *ngIf=\"abstract.invalid && abstract.dirty && abstract?.errors.restrictedWords\">Restricted words found: {{abstract.errors.restrictedWords}}</em>\r\n      <textarea formControlName=\"abstract\" id=\"abstract\" rows=3 class=\"form-control\" placeholder=\"abstract...\"></textarea>\r\n    </div>\r\n    <button type=\"submit\" [disabled]=\"newSessionForm.invalid\"  class=\"btn btn-primary\">Save</button>\r\n    <button type=\"button\" class=\"btn btn-default\">Cancel</button>\r\n  </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/event-details.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/event-details.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventDetailsEventDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <img [src]=\"event?.imageUrl\" [alt]=\"event?.name\" class=\"event-image\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-11\">\r\n      <h2>{{event?.name | uppercase}} </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <div><strong>Date:</strong> {{event?.date | date:'shortDate'}}</div>\r\n      <div><strong>Time:</strong> {{event?.time}}</div>\r\n      <div><strong>Price:</strong> {{event?.price | currency:'USD'}}</div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <address>\r\n        <strong>Address:</strong><br />\r\n        {{event?.location?.address}}<br />\r\n        {{event?.location?.city}}, {{event?.location?.country}}\r\n      </address>\r\n    </div>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n\r\n\r\n  <div class=\"row\" style=\"margin-bottom:10px\">\r\n    <div class=\"col-md-2\">\r\n      <h3 style=\"margin:0\">Sessions</h3>\r\n    </div>\r\n    <div class=\"col-md-7\">\r\n      <div class=\"btn-group btn-group-sm\" style=\"margin-right:20px;margin-left:20px\">\r\n        <button class=\"btn btn-default\" [class.active]=\"sortBy==='name'\" (click)=\"sortBy='name'\">By Name</button>\r\n        <button class=\"btn btn-default\" [class.active]=\"sortBy==='votes'\" (click)=\"sortBy='votes'\">By Votes</button>\r\n      </div>\r\n\r\n      <div class=\"btn-group btn-group-sm\">\r\n        <button class=\"btn btn-default\" [class.active]=\"filterBy==='all'\" (click)=\"filterBy='all'\">All</button>\r\n        <button class=\"btn btn-default\" [class.active]=\"filterBy==='beginner'\" (click)=\"filterBy='beginner'\">Beginner</button>\r\n        <button class=\"btn btn-default\" [class.active]=\"filterBy==='intermediate'\" (click)=\"filterBy='intermediate'\">Intermediate</button>\r\n        <button class=\"btn btn-default\" [class.active]=\"filterBy==='advanced'\" (click)=\"filterBy='advanced'\">Advanced</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2\">\r\n      <a (click)=\"addSession()\">Add Session</a>\r\n    </div>\r\n  </div>\r\n\r\n  <session-list [eventId]=\"event?.id\" [filterBy]=\"filterBy\" [sortBy]=\"sortBy\" *ngIf=\"!addMode\" [sessions]=\"event?.sessions\"></session-list>\r\n  <create-session *ngIf=\"addMode\" (saveNewSession)=\"saveNewSession($event)\" (cancelAddSession)=\"cancelAddSession()\"></create-session>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/session-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/session-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventDetailsSessionListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\" *ngFor=\"let session of visibleSessions\">\r\n    <div class=\"col-md-1\">\r\n      <div *ngIf=\"auth.isAuthenticated()\">\r\n      <upvote (vote)=\"toggleVote(session)\" [count]\r\n      =\"session.voters.length\" [voted]=\"userHasVoted(session)\">\r\n    </upvote>\r\n    </div>\r\n    </div>\r\n        <div class=\"col-md-10\">\r\n          <collapsible-well >\r\n            <div well-title>\r\n              {{session.name}}\r\n              <i *ngIf=\"session.voters.length > 3\" class=\"glyphicon\r\n                glyphicon-fire\" style=\"color:red\"></i>\r\n              </div>\r\n            <div well-body>\r\n              <h6>{{session.presenter}}</h6>\r\n              <span>Duration: {{session.duration}}</span><br />\r\n              <span>Level: {{session.level}}</span>\r\n              <p>{{session.abstract}}</p>\r\n            </div>\r\n            </collapsible-well>\r\n          </div>\r\n        </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/navbar.component.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/navbar.component.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navbar navbar-default\">\r\n        <div class=\"container-fluid\">\r\n          <div class=\"navbar-header\">\r\n            <a class=\"navbar-brand\" >ngEvents</a>\r\n          </div>\r\n\r\n          <div class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n              <li>\r\n                <a [routerLink]=\"['events/']\"\r\n                routerLinkActive=\"active\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\" >All Events</a>\r\n              </li>\r\n              <li><a [routerLink]=\"['events/new']\"\r\n                routerLinkActive=\"active\">Create Event</a></li>\r\n              <li class=\"dropdown\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" >\r\n                  Events\r\n                  <span class=\"caret\"></span>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                  <li >\r\n                    <a href=\"\">Angular Connect</a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n            <div class=\"navbar-header navbar-right\">\r\n              <ul class=\"nav navbar-nav\">\r\n                <li>\r\n                  <a *ngIf=\"!auth.isAuthenticated()\" [routerLink]=\"['user/login']\">Login</a>\r\n                  <a *ngIf=\"auth.isAuthenticated()\" [routerLink]=\"['user/profile']\">Welcome {{auth.currentUser.firstName}}</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <form id=\"searchForm\" (ngSubmit)=\"searchSessions(searchTerm)\" class=\"navbar-form navbar-right\"  >\r\n              <div class=\"form-group\">\r\n                <input type=\"text\"\r\n                [(ngModel)]=\"searchTerm\"\r\n                class=\"form-control\" name=\"searchTerm\" placeholder=\"Search Sessions\" >\r\n              </div>\r\n              <button class=\"btn btn-default\" modal-trigger=\"searchResults\" >\r\n              Search\r\n              </button>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <simple-modal closeOnBodyClick=\"true\" elementId=\"searchResults\" title=\"Matching Sessions\">\r\n        <div class=\"list-group\">\r\n          <a class=\"list-group-item\" *ngFor=\"let session of\r\n          foundSessions\" [routerLink]=\"['/events', session.eventId]\">\r\n        {{session.name}}</a>\r\n        </div>\r\n      </simple-modal>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./node_modules/zone.js/dist/zone-evergreen.js":
  /*!*****************************************************!*\
    !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesZoneJsDistZoneEvergreenJs(module, exports) {
    /**
    * @license
    * Copyright Google Inc. All Rights Reserved.
    *
    * Use of this source code is governed by an MIT-style license that can be
    * found in the LICENSE file at https://angular.io/license
    */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var Zone$1 = function (global) {
      var performance = global['performance'];

      function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
      }

      function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
      }

      mark('Zone');
      var checkDuplicate = global['__zone_symbol__forceDuplicateZoneCheck'] === true;

      if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
          throw new Error('Zone already loaded.');
        } else {
          return global['Zone'];
        }
      }

      var Zone =
      /*#__PURE__*/
      function () {
        function Zone(parent, zoneSpec) {
          _classCallCheck(this, Zone);

          this._parent = parent;
          this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
          this._properties = zoneSpec && zoneSpec.properties || {};
          this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }

        _createClass(Zone, [{
          key: "get",
          value: function get(key) {
            var zone = this.getZoneWith(key);
            if (zone) return zone._properties[key];
          }
        }, {
          key: "getZoneWith",
          value: function getZoneWith(key) {
            var current = this;

            while (current) {
              if (current._properties.hasOwnProperty(key)) {
                return current;
              }

              current = current._parent;
            }

            return null;
          }
        }, {
          key: "fork",
          value: function fork(zoneSpec) {
            if (!zoneSpec) throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
          }
        }, {
          key: "wrap",
          value: function wrap(callback, source) {
            if (typeof callback !== 'function') {
              throw new Error('Expecting function got: ' + callback);
            }

            var _callback = this._zoneDelegate.intercept(this, callback, source);

            var zone = this;
            return function () {
              return zone.runGuarded(_callback, this, arguments, source);
            };
          }
        }, {
          key: "run",
          value: function run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            } finally {
              _currentZoneFrame = _currentZoneFrame.parent;
            }
          }
        }, {
          key: "runGuarded",
          value: function runGuarded(callback) {
            var applyThis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var applyArgs = arguments.length > 2 ? arguments[2] : undefined;
            var source = arguments.length > 3 ? arguments[3] : undefined;
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
              } catch (error) {
                if (this._zoneDelegate.handleError(this, error)) {
                  throw error;
                }
              }
            } finally {
              _currentZoneFrame = _currentZoneFrame.parent;
            }
          }
        }, {
          key: "runTask",
          value: function runTask(task, applyThis, applyArgs) {
            if (task.zone != this) {
              throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return


            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
              return;
            }

            var reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            var previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = {
              parent: _currentZoneFrame,
              zone: this
            };

            try {
              if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                task.cancelFn = undefined;
              }

              try {
                return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
              } catch (error) {
                if (this._zoneDelegate.handleError(this, error)) {
                  throw error;
                }
              }
            } finally {
              // if the task's state is notScheduled or unknown, then it has already been cancelled
              // we should not reset the state to scheduled
              if (task.state !== notScheduled && task.state !== unknown) {
                if (task.type == eventTask || task.data && task.data.isPeriodic) {
                  reEntryGuard && task._transitionTo(scheduled, running);
                } else {
                  task.runCount = 0;

                  this._updateTaskCount(task, -1);

                  reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
                }
              }

              _currentZoneFrame = _currentZoneFrame.parent;
              _currentTask = previousTask;
            }
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(task) {
            if (task.zone && task.zone !== this) {
              // check if the task was rescheduled, the newZone
              // should not be the children of the original zone
              var newZone = this;

              while (newZone) {
                if (newZone === task.zone) {
                  throw Error("can not reschedule task to ".concat(this.name, " which is descendants of the original zone ").concat(task.zone.name));
                }

                newZone = newZone.parent;
              }
            }

            task._transitionTo(scheduling, notScheduled);

            var zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;

            try {
              task = this._zoneDelegate.scheduleTask(this, task);
            } catch (err) {
              // should set task's state to unknown when scheduleTask throw error
              // because the err may from reschedule, so the fromState maybe notScheduled
              task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


              this._zoneDelegate.handleError(this, err);

              throw err;
            }

            if (task._zoneDelegates === zoneDelegates) {
              // we have to check because internally the delegate can reschedule the task.
              this._updateTaskCount(task, 1);
            }

            if (task.state == scheduling) {
              task._transitionTo(scheduled, scheduling);
            }

            return task;
          }
        }, {
          key: "scheduleMicroTask",
          value: function scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
          }
        }, {
          key: "scheduleMacroTask",
          value: function scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
          }
        }, {
          key: "scheduleEventTask",
          value: function scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(task) {
            if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

            task._transitionTo(canceling, scheduled, running);

            try {
              this._zoneDelegate.cancelTask(this, task);
            } catch (err) {
              // if error occurs when cancelTask, transit the state to unknown
              task._transitionTo(unknown, canceling);

              this._zoneDelegate.handleError(this, err);

              throw err;
            }

            this._updateTaskCount(task, -1);

            task._transitionTo(notScheduled, canceling);

            task.runCount = 0;
            return task;
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(task, count) {
            var zoneDelegates = task._zoneDelegates;

            if (count == -1) {
              task._zoneDelegates = null;
            }

            for (var i = 0; i < zoneDelegates.length; i++) {
              zoneDelegates[i]._updateTaskCount(task.type, count);
            }
          }
        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
        }, {
          key: "name",
          get: function get() {
            return this._name;
          }
        }], [{
          key: "assertZonePatched",
          value: function assertZonePatched() {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
              throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
            }
          }
        }, {
          key: "__load_patch",
          value: function __load_patch(name, fn) {
            if (patches.hasOwnProperty(name)) {
              if (checkDuplicate) {
                throw Error('Already loaded patch: ' + name);
              }
            } else if (!global['__Zone_disable_' + name]) {
              var perfName = 'Zone:' + name;
              mark(perfName);
              patches[name] = fn(global, Zone, _api);
              performanceMeasure(perfName, perfName);
            }
          }
        }, {
          key: "root",
          get: function get() {
            var zone = Zone.current;

            while (zone.parent) {
              zone = zone.parent;
            }

            return zone;
          }
        }, {
          key: "current",
          get: function get() {
            return _currentZoneFrame.zone;
          }
        }, {
          key: "currentTask",
          get: function get() {
            return _currentTask;
          }
        }]);

        return Zone;
      }();

      Zone.__symbol__ = __symbol__;
      var DELEGATE_ZS = {
        name: '',
        onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
          return delegate.hasTask(target, hasTaskState);
        },
        onScheduleTask: function onScheduleTask(delegate, _, target, task) {
          return delegate.scheduleTask(target, task);
        },
        onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
          return delegate.invokeTask(target, task, applyThis, applyArgs);
        },
        onCancelTask: function onCancelTask(delegate, _, target, task) {
          return delegate.cancelTask(target, task);
        }
      };

      var ZoneDelegate =
      /*#__PURE__*/
      function () {
        function ZoneDelegate(zone, parentDelegate, zoneSpec) {
          _classCallCheck(this, ZoneDelegate);

          this._taskCounts = {
            'microTask': 0,
            'macroTask': 0,
            'eventTask': 0
          };
          this.zone = zone;
          this._parentDelegate = parentDelegate;
          this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
          this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
          this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
          this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
          this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
          this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
          this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
          this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
          this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
          this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
          this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
          this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
          this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
          this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
          this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
          this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
          this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
          this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
          this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
          this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
          this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
          this._hasTaskZS = null;
          this._hasTaskDlgt = null;
          this._hasTaskDlgtOwner = null;
          this._hasTaskCurrZone = null;
          var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
          var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

          if (zoneSpecHasTask || parentHasTask) {
            // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
            // a case all task related interceptors must go through this ZD. We can't short circuit it.
            this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
            this._hasTaskDlgt = parentDelegate;
            this._hasTaskDlgtOwner = this;
            this._hasTaskCurrZone = zone;

            if (!zoneSpec.onScheduleTask) {
              this._scheduleTaskZS = DELEGATE_ZS;
              this._scheduleTaskDlgt = parentDelegate;
              this._scheduleTaskCurrZone = this.zone;
            }

            if (!zoneSpec.onInvokeTask) {
              this._invokeTaskZS = DELEGATE_ZS;
              this._invokeTaskDlgt = parentDelegate;
              this._invokeTaskCurrZone = this.zone;
            }

            if (!zoneSpec.onCancelTask) {
              this._cancelTaskZS = DELEGATE_ZS;
              this._cancelTaskDlgt = parentDelegate;
              this._cancelTaskCurrZone = this.zone;
            }
          }
        }

        _createClass(ZoneDelegate, [{
          key: "fork",
          value: function fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
          }
        }, {
          key: "intercept",
          value: function intercept(targetZone, callback, source) {
            return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
          }
        }, {
          key: "invoke",
          value: function invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "handleError",
          value: function handleError(targetZone, error) {
            return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
          }
        }, {
          key: "scheduleTask",
          value: function scheduleTask(targetZone, task) {
            var returnTask = task;

            if (this._scheduleTaskZS) {
              if (this._hasTaskZS) {
                returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
              }

              returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
              if (!returnTask) returnTask = task;
            } else {
              if (task.scheduleFn) {
                task.scheduleFn(task);
              } else if (task.type == microTask) {
                scheduleMicroTask(task);
              } else {
                throw new Error('Task is missing scheduleFn.');
              }
            }

            return returnTask;
          }
        }, {
          key: "invokeTask",
          value: function invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
          }
        }, {
          key: "cancelTask",
          value: function cancelTask(targetZone, task) {
            var value;

            if (this._cancelTaskZS) {
              value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            } else {
              if (!task.cancelFn) {
                throw Error('Task is not cancelable');
              }

              value = task.cancelFn(task);
            }

            return value;
          }
        }, {
          key: "hasTask",
          value: function hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
              this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            } catch (err) {
              this.handleError(targetZone, err);
            }
          }
        }, {
          key: "_updateTaskCount",
          value: function _updateTaskCount(type, count) {
            var counts = this._taskCounts;
            var prev = counts[type];
            var next = counts[type] = prev + count;

            if (next < 0) {
              throw new Error('More tasks executed then were scheduled.');
            }

            if (prev == 0 || next == 0) {
              var isEmpty = {
                microTask: counts['microTask'] > 0,
                macroTask: counts['macroTask'] > 0,
                eventTask: counts['eventTask'] > 0,
                change: type
              };
              this.hasTask(this.zone, isEmpty);
            }
          }
        }]);

        return ZoneDelegate;
      }();

      var ZoneTask =
      /*#__PURE__*/
      function () {
        function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
          _classCallCheck(this, ZoneTask);

          this._zone = null;
          this.runCount = 0;
          this._zoneDelegates = null;
          this._state = 'notScheduled';
          this.type = type;
          this.source = source;
          this.data = options;
          this.scheduleFn = scheduleFn;
          this.cancelFn = cancelFn;
          this.callback = callback;
          var self = this; // TODO: @JiaLiPassion options should have interface

          if (type === eventTask && options && options.useG) {
            this.invoke = ZoneTask.invokeTask;
          } else {
            this.invoke = function () {
              return ZoneTask.invokeTask.call(global, self, this, arguments);
            };
          }
        }

        _createClass(ZoneTask, [{
          key: "cancelScheduleRequest",
          value: function cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
          }
        }, {
          key: "_transitionTo",
          value: function _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
              this._state = toState;

              if (toState == notScheduled) {
                this._zoneDelegates = null;
              }
            } else {
              throw new Error("".concat(this.type, " '").concat(this.source, "': can not transition to '").concat(toState, "', expecting state '").concat(fromState1, "'").concat(fromState2 ? ' or \'' + fromState2 + '\'' : '', ", was '").concat(this._state, "'."));
            }
          }
        }, {
          key: "toString",
          value: function toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
              return this.data.handleId.toString();
            } else {
              return Object.prototype.toString.call(this);
            }
          } // add toJSON method to prevent cyclic error when
          // call JSON.stringify(zoneTask)

        }, {
          key: "toJSON",
          value: function toJSON() {
            return {
              type: this.type,
              state: this.state,
              source: this.source,
              zone: this.zone.name,
              runCount: this.runCount
            };
          }
        }, {
          key: "zone",
          get: function get() {
            return this._zone;
          }
        }, {
          key: "state",
          get: function get() {
            return this._state;
          }
        }], [{
          key: "invokeTask",
          value: function invokeTask(task, target, args) {
            if (!task) {
              task = this;
            }

            _numberOfNestedTaskFrames++;

            try {
              task.runCount++;
              return task.zone.runTask(task, target, args);
            } finally {
              if (_numberOfNestedTaskFrames == 1) {
                drainMicroTaskQueue();
              }

              _numberOfNestedTaskFrames--;
            }
          }
        }]);

        return ZoneTask;
      }(); //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      ///  MICROTASK QUEUE
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


      var symbolSetTimeout = __symbol__('setTimeout');

      var symbolPromise = __symbol__('Promise');

      var symbolThen = __symbol__('then');

      var _microTaskQueue = [];
      var _isDrainingMicrotaskQueue = false;
      var nativeMicroTaskQueuePromise;

      function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
          // We are not running in Task, so we need to kickstart the microtask queue.
          if (!nativeMicroTaskQueuePromise) {
            if (global[symbolPromise]) {
              nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
            }
          }

          if (nativeMicroTaskQueuePromise) {
            var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

            if (!nativeThen) {
              // native Promise is not patchable, we need to use `then` directly
              // issue 1078
              nativeThen = nativeMicroTaskQueuePromise['then'];
            }

            nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
          } else {
            global[symbolSetTimeout](drainMicroTaskQueue, 0);
          }
        }

        task && _microTaskQueue.push(task);
      }

      function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
          _isDrainingMicrotaskQueue = true;

          while (_microTaskQueue.length) {
            var queue = _microTaskQueue;
            _microTaskQueue = [];

            for (var i = 0; i < queue.length; i++) {
              var task = queue[i];

              try {
                task.zone.runTask(task, null, null);
              } catch (error) {
                _api.onUnhandledError(error);
              }
            }
          }

          _api.microtaskDrainDone();

          _isDrainingMicrotaskQueue = false;
        }
      } //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////
      ///  BOOTSTRAP
      //////////////////////////////////////////////////////
      //////////////////////////////////////////////////////


      var NO_ZONE = {
        name: 'NO ZONE'
      };
      var notScheduled = 'notScheduled',
          scheduling = 'scheduling',
          scheduled = 'scheduled',
          running = 'running',
          canceling = 'canceling',
          unknown = 'unknown';
      var microTask = 'microTask',
          macroTask = 'macroTask',
          eventTask = 'eventTask';
      var patches = {};
      var _api = {
        symbol: __symbol__,
        currentZoneFrame: function currentZoneFrame() {
          return _currentZoneFrame;
        },
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: function showUncaughtError() {
          return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
        },
        patchEventTarget: function patchEventTarget() {
          return [];
        },
        patchOnProperties: noop,
        patchMethod: function patchMethod() {
          return noop;
        },
        bindArguments: function bindArguments() {
          return [];
        },
        patchThen: function patchThen() {
          return noop;
        },
        patchMacroTask: function patchMacroTask() {
          return noop;
        },
        setNativePromise: function setNativePromise(NativePromise) {
          // sometimes NativePromise.resolve static function
          // is not ready yet, (such as core-js/es6.promise)
          // so we need to check here.
          if (NativePromise && typeof NativePromise.resolve === 'function') {
            nativeMicroTaskQueuePromise = NativePromise.resolve(0);
          }
        },
        patchEventPrototype: function patchEventPrototype() {
          return noop;
        },
        isIEOrEdge: function isIEOrEdge() {
          return false;
        },
        getGlobalObjects: function getGlobalObjects() {
          return undefined;
        },
        ObjectDefineProperty: function ObjectDefineProperty() {
          return noop;
        },
        ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
          return undefined;
        },
        ObjectCreate: function ObjectCreate() {
          return undefined;
        },
        ArraySlice: function ArraySlice() {
          return [];
        },
        patchClass: function patchClass() {
          return noop;
        },
        wrapWithCurrentZone: function wrapWithCurrentZone() {
          return noop;
        },
        filterProperties: function filterProperties() {
          return [];
        },
        attachOriginToPatched: function attachOriginToPatched() {
          return noop;
        },
        _redefineProperty: function _redefineProperty() {
          return noop;
        },
        patchCallbacks: function patchCallbacks() {
          return noop;
        }
      };
      var _currentZoneFrame = {
        parent: null,
        zone: new Zone(null, null)
      };
      var _currentTask = null;
      var _numberOfNestedTaskFrames = 0;

      function noop() {}

      function __symbol__(name) {
        return '__zone_symbol__' + name;
      }

      performanceMeasure('Zone', 'Zone');
      return global['Zone'] = Zone;
    }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
      var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
      var ObjectDefineProperty = Object.defineProperty;

      function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
          var className = obj.constructor && obj.constructor.name;
          return (className ? className : '') + ': ' + JSON.stringify(obj);
        }

        return obj ? obj.toString() : Object.prototype.toString.call(obj);
      }

      var __symbol__ = api.symbol;
      var _uncaughtPromiseErrors = [];

      var symbolPromise = __symbol__('Promise');

      var symbolThen = __symbol__('then');

      var creationTrace = '__creationTrace__';

      api.onUnhandledError = function (e) {
        if (api.showUncaughtError()) {
          var rejection = e && e.rejection;

          if (rejection) {
            console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
          } else {
            console.error(e);
          }
        }
      };

      api.microtaskDrainDone = function () {
        while (_uncaughtPromiseErrors.length) {
          var _loop = function _loop() {
            var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

            try {
              uncaughtPromiseError.zone.runGuarded(function () {
                throw uncaughtPromiseError;
              });
            } catch (error) {
              handleUnhandledRejection(error);
            }
          };

          while (_uncaughtPromiseErrors.length) {
            _loop();
          }
        }
      };

      var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

      function handleUnhandledRejection(e) {
        api.onUnhandledError(e);

        try {
          var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

          if (handler && typeof handler === 'function') {
            handler.call(this, e);
          }
        } catch (err) {}
      }

      function isThenable(value) {
        return value && value.then;
      }

      function forwardResolution(value) {
        return value;
      }

      function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
      }

      var symbolState = __symbol__('state');

      var symbolValue = __symbol__('value');

      var symbolFinally = __symbol__('finally');

      var symbolParentPromiseValue = __symbol__('parentPromiseValue');

      var symbolParentPromiseState = __symbol__('parentPromiseState');

      var source = 'Promise.then';
      var UNRESOLVED = null;
      var RESOLVED = true;
      var REJECTED = false;
      var REJECTED_NO_CATCH = 0;

      function makeResolver(promise, state) {
        return function (v) {
          try {
            resolvePromise(promise, state, v);
          } catch (err) {
            resolvePromise(promise, false, err);
          } // Do not return value or you will break the Promise spec.

        };
      }

      var once = function once() {
        var wasCalled = false;
        return function wrapper(wrappedFunction) {
          return function () {
            if (wasCalled) {
              return;
            }

            wasCalled = true;
            wrappedFunction.apply(null, arguments);
          };
        };
      };

      var TYPE_ERROR = 'Promise resolved with itself';

      var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


      function resolvePromise(promise, state, value) {
        var onceWrapper = once();

        if (promise === value) {
          throw new TypeError(TYPE_ERROR);
        }

        if (promise[symbolState] === UNRESOLVED) {
          // should only get value.then once based on promise spec.
          var then = null;

          try {
            if (typeof value === 'object' || typeof value === 'function') {
              then = value && value.then;
            }
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
            return promise;
          } // if (value instanceof ZoneAwarePromise) {


          if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
            clearRejectedNoCatch(value);
            resolvePromise(promise, value[symbolState], value[symbolValue]);
          } else if (state !== REJECTED && typeof then === 'function') {
            try {
              then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
            } catch (err) {
              onceWrapper(function () {
                resolvePromise(promise, false, err);
              })();
            }
          } else {
            promise[symbolState] = state;
            var queue = promise[symbolValue];
            promise[symbolValue] = value;

            if (promise[symbolFinally] === symbolFinally) {
              // the promise is generated by Promise.prototype.finally
              if (state === RESOLVED) {
                // the state is resolved, should ignore the value
                // and use parent promise value
                promise[symbolState] = promise[symbolParentPromiseState];
                promise[symbolValue] = promise[symbolParentPromiseValue];
              }
            } // record task information in value when error occurs, so we can
            // do some additional work such as render longStackTrace


            if (state === REJECTED && value instanceof Error) {
              // check if longStackTraceZone is here
              var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

              if (trace) {
                // only keep the long stack trace into error when in longStackTraceZone
                ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                  configurable: true,
                  enumerable: false,
                  writable: true,
                  value: trace
                });
              }
            }

            for (var i = 0; i < queue.length;) {
              scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
            }

            if (queue.length == 0 && state == REJECTED) {
              promise[symbolState] = REJECTED_NO_CATCH;

              try {
                // try to print more readable error log
                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
              } catch (err) {
                var error = err;
                error.rejection = value;
                error.promise = promise;
                error.zone = Zone.current;
                error.task = Zone.currentTask;

                _uncaughtPromiseErrors.push(error);

                api.scheduleMicroTask(); // to make sure that it is running
              }
            }
          }
        } // Resolving an already resolved promise is a noop.


        return promise;
      }

      var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

      function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
          // if the promise is rejected no catch status
          // and queue.length > 0, means there is a error handler
          // here to handle the rejected promise, we should trigger
          // windows.rejectionhandled eventHandler or nodejs rejectionHandled
          // eventHandler
          try {
            var handler = Zone[REJECTION_HANDLED_HANDLER];

            if (handler && typeof handler === 'function') {
              handler.call(this, {
                rejection: promise[symbolValue],
                promise: promise
              });
            }
          } catch (err) {}

          promise[symbolState] = REJECTED;

          for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
            if (promise === _uncaughtPromiseErrors[i].promise) {
              _uncaughtPromiseErrors.splice(i, 1);
            }
          }
        }
      }

      function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        var promiseState = promise[symbolState];
        var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, function () {
          try {
            var parentPromiseValue = promise[symbolValue];
            var isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];

            if (isFinallyPromise) {
              // if the promise is generated from finally call, keep parent promise's state and value
              chainPromise[symbolParentPromiseValue] = parentPromiseValue;
              chainPromise[symbolParentPromiseState] = promiseState;
            } // should not pass value to finally callback


            var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
            resolvePromise(chainPromise, true, value);
          } catch (error) {
            // if error occurs, should always return this error
            resolvePromise(chainPromise, false, error);
          }
        }, chainPromise);
      }

      var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

      var ZoneAwarePromise =
      /*#__PURE__*/
      function () {
        function ZoneAwarePromise(executor) {
          _classCallCheck(this, ZoneAwarePromise);

          var promise = this;

          if (!(promise instanceof ZoneAwarePromise)) {
            throw new Error('Must be an instanceof Promise.');
          }

          promise[symbolState] = UNRESOLVED;
          promise[symbolValue] = []; // queue;

          try {
            executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
          } catch (error) {
            resolvePromise(promise, false, error);
          }
        }

        _createClass(ZoneAwarePromise, [{
          key: "then",
          value: function then(onFulfilled, onRejected) {
            var chainPromise = new this.constructor(null);
            var zone = Zone.current;

            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }

            return chainPromise;
          }
        }, {
          key: "catch",
          value: function _catch(onRejected) {
            return this.then(null, onRejected);
          }
        }, {
          key: "finally",
          value: function _finally(onFinally) {
            var chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            var zone = Zone.current;

            if (this[symbolState] == UNRESOLVED) {
              this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            } else {
              scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }

            return chainPromise;
          }
        }, {
          key: Symbol.toStringTag,
          get: function get() {
            return 'Promise';
          }
        }], [{
          key: "toString",
          value: function toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
          }
        }, {
          key: "resolve",
          value: function resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
          }
        }, {
          key: "reject",
          value: function reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
          }
        }, {
          key: "race",
          value: function race(values) {
            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            });

            function onResolve(value) {
              resolve(value);
            }

            function onReject(error) {
              reject(error);
            }

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var value = _step.value;

                if (!isThenable(value)) {
                  value = this.resolve(value);
                }

                value.then(onResolve, onReject);
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }

            return promise;
          }
        }, {
          key: "all",
          value: function all(values) {
            var _this = this;

            var resolve;
            var reject;
            var promise = new this(function (res, rej) {
              resolve = res;
              reject = rej;
            }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

            var unresolvedCount = 2;
            var valueIndex = 0;
            var resolvedValues = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              var _loop2 = function _loop2() {
                var value = _step2.value;

                if (!isThenable(value)) {
                  value = _this.resolve(value);
                }

                var curValueIndex = valueIndex;
                value.then(function (value) {
                  resolvedValues[curValueIndex] = value;
                  unresolvedCount--;

                  if (unresolvedCount === 0) {
                    resolve(resolvedValues);
                  }
                }, reject);
                unresolvedCount++;
                valueIndex++;
              };

              for (var _iterator2 = values[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                _loop2();
              } // Make the unresolvedCount zero-based again.

            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            unresolvedCount -= 2;

            if (unresolvedCount === 0) {
              resolve(resolvedValues);
            }

            return promise;
          }
        }]);

        return ZoneAwarePromise;
      }(); // Protect against aggressive optimizers dropping seemingly unused properties.
      // E.g. Closure Compiler in advanced mode.


      ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
      ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
      ZoneAwarePromise['race'] = ZoneAwarePromise.race;
      ZoneAwarePromise['all'] = ZoneAwarePromise.all;
      var NativePromise = global[symbolPromise] = global['Promise'];

      var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

      var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

      if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;

        if (!desc) {
          desc = {
            configurable: true,
            enumerable: true
          };
        }

        desc.get = function () {
          // if we already set ZoneAwarePromise, use patched one
          // otherwise return native one.
          return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };

        desc.set = function (NewNativePromise) {
          if (NewNativePromise === ZoneAwarePromise) {
            // if the NewNativePromise is ZoneAwarePromise
            // save to global
            global[ZONE_AWARE_PROMISE] = NewNativePromise;
          } else {
            // if the NewNativePromise is not ZoneAwarePromise
            // for example: after load zone.js, some library just
            // set es6-promise to global, if we set it to global
            // directly, assertZonePatched will fail and angular
            // will not loaded, so we just set the NewNativePromise
            // to global[symbolPromise], so the result is just like
            // we load ES6 Promise before zone.js
            global[symbolPromise] = NewNativePromise;

            if (!NewNativePromise.prototype[symbolThen]) {
              patchThen(NewNativePromise);
            }

            api.setNativePromise(NewNativePromise);
          }
        };

        ObjectDefineProperty(global, 'Promise', desc);
      }

      global['Promise'] = ZoneAwarePromise;

      var symbolThenPatched = __symbol__('thenPatched');

      function patchThen(Ctor) {
        var proto = Ctor.prototype;
        var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

        if (prop && (prop.writable === false || !prop.configurable)) {
          // check Ctor.prototype.then propertyDescriptor is writable or not
          // in meteor env, writable is false, we should ignore such case
          return;
        }

        var originalThen = proto.then; // Keep a reference to the original method.

        proto[symbolThen] = originalThen;

        Ctor.prototype.then = function (onResolve, onReject) {
          var _this2 = this;

          var wrapped = new ZoneAwarePromise(function (resolve, reject) {
            originalThen.call(_this2, resolve, reject);
          });
          return wrapped.then(onResolve, onReject);
        };

        Ctor[symbolThenPatched] = true;
      }

      api.patchThen = patchThen;

      function zoneify(fn) {
        return function () {
          var resultPromise = fn.apply(this, arguments);

          if (resultPromise instanceof ZoneAwarePromise) {
            return resultPromise;
          }

          var ctor = resultPromise.constructor;

          if (!ctor[symbolThenPatched]) {
            patchThen(ctor);
          }

          return resultPromise;
        };
      }

      if (NativePromise) {
        patchThen(NativePromise);
        var fetch = global['fetch'];

        if (typeof fetch == 'function') {
          global[api.symbol('fetch')] = fetch;
          global['fetch'] = zoneify(fetch);
        }
      } // This is not part of public API, but it is useful for tests, so we expose it.


      Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
      return ZoneAwarePromise;
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Suppress closure compiler errors about unknown 'Zone' variable
     * @fileoverview
     * @suppress {undefinedVars,globalThis,missingRequire}
     */
    // issue #989, to reduce bundle size, use short name

    /** Object.getOwnPropertyDescriptor */


    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    /** Object.defineProperty */

    var ObjectDefineProperty = Object.defineProperty;
    /** Object.getPrototypeOf */

    var ObjectGetPrototypeOf = Object.getPrototypeOf;
    /** Object.create */

    var ObjectCreate = Object.create;
    /** Array.prototype.slice */

    var ArraySlice = Array.prototype.slice;
    /** addEventListener string const */

    var ADD_EVENT_LISTENER_STR = 'addEventListener';
    /** removeEventListener string const */

    var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
    /** zoneSymbol addEventListener */

    var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
    /** zoneSymbol removeEventListener */


    var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
    /** true string const */


    var TRUE_STR = 'true';
    /** false string const */

    var FALSE_STR = 'false';
    /** __zone_symbol__ string const */

    var ZONE_SYMBOL_PREFIX = '__zone_symbol__';

    function wrapWithCurrentZone(callback, source) {
      return Zone.current.wrap(callback, source);
    }

    function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
      return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
    }

    var zoneSymbol = Zone.__symbol__;
    var isWindowExists = typeof window !== 'undefined';
    var internalWindow = isWindowExists ? window : undefined;

    var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

    var REMOVE_ATTRIBUTE = 'removeAttribute';
    var NULL_ON_PROP_VALUE = [null];

    function bindArguments(args, source) {
      for (var i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
          args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
      }

      return args;
    }

    function patchPrototype(prototype, fnNames) {
      var source = prototype.constructor['name'];

      var _loop3 = function _loop3(i) {
        var name = fnNames[i];
        var delegate = prototype[name];

        if (delegate) {
          var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);

          if (!isPropertyWritable(prototypeDesc)) {
            return "continue";
          }

          prototype[name] = function (delegate) {
            var patched = function patched() {
              return delegate.apply(this, bindArguments(arguments, source + '.' + name));
            };

            attachOriginToPatched(patched, delegate);
            return patched;
          }(delegate);
        }
      };

      for (var i = 0; i < fnNames.length; i++) {
        var _ret = _loop3(i);

        if (_ret === "continue") continue;
      }
    }

    function isPropertyWritable(propertyDesc) {
      if (!propertyDesc) {
        return true;
      }

      if (propertyDesc.writable === false) {
        return false;
      }

      return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
    }

    var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.

    var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
    var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
    // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
    // this code.

    var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
    var zoneSymbolEventNames = {};

    var wrapFn = function wrapFn(event) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      }

      var eventNameSymbol = zoneSymbolEventNames[event.type];

      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
      }

      var target = this || event.target || _global;
      var listener = target[eventNameSymbol];
      var result;

      if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        var errorEvent = event;
        result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

        if (result === true) {
          event.preventDefault();
        }
      } else {
        result = listener && listener.apply(this, arguments);

        if (result != undefined && !result) {
          event.preventDefault();
        }
      }

      return result;
    };

    function patchProperty(obj, prop, prototype) {
      var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

      if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

        if (prototypeDesc) {
          desc = {
            enumerable: true,
            configurable: true
          };
        }
      } // if the descriptor not exists or is not configurable
      // just return


      if (!desc || !desc.configurable) {
        return;
      }

      var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

      if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
      } // A property descriptor cannot have getter/setter and be writable
      // deleting the writable and value properties avoids this error:
      //
      // TypeError: property descriptors must not specify a value or be writable when a
      // getter or setter has been specified


      delete desc.writable;
      delete desc.value;
      var originalDescGet = desc.get;
      var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

      var eventName = prop.substr(2);
      var eventNameSymbol = zoneSymbolEventNames[eventName];

      if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
      }

      desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;

        if (!target && obj === _global) {
          target = _global;
        }

        if (!target) {
          return;
        }

        var previousValue = target[eventNameSymbol];

        if (previousValue) {
          target.removeEventListener(eventName, wrapFn);
        } // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet


        if (originalDescSet) {
          originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }

        if (typeof newValue === 'function') {
          target[eventNameSymbol] = newValue;
          target.addEventListener(eventName, wrapFn, false);
        } else {
          target[eventNameSymbol] = null;
        }
      }; // The getter would return undefined for unassigned properties but the default value of an
      // unassigned property is null


      desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        var target = this;

        if (!target && obj === _global) {
          target = _global;
        }

        if (!target) {
          return null;
        }

        var listener = target[eventNameSymbol];

        if (listener) {
          return listener;
        } else if (originalDescGet) {
          // result will be null when use inline event attribute,
          // such as <button onclick="func();">OK</button>
          // because the onclick function is internal raw uncompiled handler
          // the onclick will be evaluated when first time event was triggered or
          // the property is accessed, https://github.com/angular/zone.js/issues/525
          // so we should use original native get to retrieve the handler
          var value = originalDescGet && originalDescGet.call(this);

          if (value) {
            desc.set.call(this, value);

            if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
              target.removeAttribute(prop);
            }

            return value;
          }
        }

        return null;
      };

      ObjectDefineProperty(obj, prop, desc);
      obj[onPropPatchedSymbol] = true;
    }

    function patchOnProperties(obj, properties, prototype) {
      if (properties) {
        for (var i = 0; i < properties.length; i++) {
          patchProperty(obj, 'on' + properties[i], prototype);
        }
      } else {
        var onProperties = [];

        for (var prop in obj) {
          if (prop.substr(0, 2) == 'on') {
            onProperties.push(prop);
          }
        }

        for (var j = 0; j < onProperties.length; j++) {
          patchProperty(obj, onProperties[j], prototype);
        }
      }
    }

    var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

    function patchClass(className) {
      var OriginalClass = _global[className];
      if (!OriginalClass) return; // keep original class in global

      _global[zoneSymbol(className)] = OriginalClass;

      _global[className] = function () {
        var a = bindArguments(arguments, className);

        switch (a.length) {
          case 0:
            this[originalInstanceKey] = new OriginalClass();
            break;

          case 1:
            this[originalInstanceKey] = new OriginalClass(a[0]);
            break;

          case 2:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
            break;

          case 3:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
            break;

          case 4:
            this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
            break;

          default:
            throw new Error('Arg list too long.');
        }
      }; // attach original delegate to patched function


      attachOriginToPatched(_global[className], OriginalClass);
      var instance = new OriginalClass(function () {});
      var prop;

      for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

        (function (prop) {
          if (typeof instance[prop] === 'function') {
            _global[className].prototype[prop] = function () {
              return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
            };
          } else {
            ObjectDefineProperty(_global[className].prototype, prop, {
              set: function set(fn) {
                if (typeof fn === 'function') {
                  this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                  // use it in Function.prototype.toString to return
                  // the native one.

                  attachOriginToPatched(this[originalInstanceKey][prop], fn);
                } else {
                  this[originalInstanceKey][prop] = fn;
                }
              },
              get: function get() {
                return this[originalInstanceKey][prop];
              }
            });
          }
        })(prop);
      }

      for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
          _global[className][prop] = OriginalClass[prop];
        }
      }
    }

    function copySymbolProperties(src, dest) {
      if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
      }

      var symbols = Object.getOwnPropertySymbols(src);
      symbols.forEach(function (symbol) {
        var desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
          get: function get() {
            return src[symbol];
          },
          set: function set(value) {
            if (desc && (!desc.writable || typeof desc.set !== 'function')) {
              // if src[symbol] is not writable or not have a setter, just return
              return;
            }

            src[symbol] = value;
          },
          enumerable: desc ? desc.enumerable : true,
          configurable: desc ? desc.configurable : true
        });
      });
    }

    var shouldCopySymbolProperties = false;

    function patchMethod(target, name, patchFn) {
      var proto = target;

      while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
      }

      var delegateName = zoneSymbol(name);
      var delegate = null;

      if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

        var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

        if (isPropertyWritable(desc)) {
          var patchDelegate = patchFn(delegate, delegateName, name);

          proto[name] = function () {
            return patchDelegate(this, arguments);
          };

          attachOriginToPatched(proto[name], delegate);

          if (shouldCopySymbolProperties) {
            copySymbolProperties(delegate, proto[name]);
          }
        }
      }

      return delegate;
    } // TODO: @JiaLiPassion, support cancel task later if necessary


    function patchMacroTask(obj, funcName, metaCreator) {
      var setNative = null;

      function scheduleTask(task) {
        var data = task.data;

        data.args[data.cbIdx] = function () {
          task.invoke.apply(this, arguments);
        };

        setNative.apply(data.target, data.args);
        return task;
      }

      setNative = patchMethod(obj, funcName, function (delegate) {
        return function (self, args) {
          var meta = metaCreator(self, args);

          if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
          } else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
          }
        };
      });
    }

    function attachOriginToPatched(patched, original) {
      patched[zoneSymbol('OriginalDelegate')] = original;
    }

    var isDetectedIEOrEdge = false;
    var ieOrEdge = false;

    function isIE() {
      try {
        var ua = internalWindow.navigator.userAgent;

        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
          return true;
        }
      } catch (error) {}

      return false;
    }

    function isIEOrEdge() {
      if (isDetectedIEOrEdge) {
        return ieOrEdge;
      }

      isDetectedIEOrEdge = true;

      try {
        var ua = internalWindow.navigator.userAgent;

        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
          ieOrEdge = true;
        }
      } catch (error) {}

      return ieOrEdge;
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // override Function.prototype.toString to make zone.js patched function
    // look like native function


    Zone.__load_patch('toString', function (global) {
      // patch Func.prototype.toString to let them look like native
      var originalFunctionToString = Function.prototype.toString;
      var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
      var PROMISE_SYMBOL = zoneSymbol('Promise');
      var ERROR_SYMBOL = zoneSymbol('Error');

      var newFunctionToString = function toString() {
        if (typeof this === 'function') {
          var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

          if (originalDelegate) {
            if (typeof originalDelegate === 'function') {
              return originalFunctionToString.call(originalDelegate);
            } else {
              return Object.prototype.toString.call(originalDelegate);
            }
          }

          if (this === Promise) {
            var nativePromise = global[PROMISE_SYMBOL];

            if (nativePromise) {
              return originalFunctionToString.call(nativePromise);
            }
          }

          if (this === Error) {
            var nativeError = global[ERROR_SYMBOL];

            if (nativeError) {
              return originalFunctionToString.call(nativeError);
            }
          }
        }

        return originalFunctionToString.call(this);
      };

      newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
      Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

      var originalObjectToString = Object.prototype.toString;
      var PROMISE_OBJECT_TO_STRING = '[object Promise]';

      Object.prototype.toString = function () {
        if (this instanceof Promise) {
          return PROMISE_OBJECT_TO_STRING;
        }

        return originalObjectToString.call(this);
      };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    var passiveSupported = false;

    if (typeof window !== 'undefined') {
      try {
        var options = Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
          }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
      } catch (err) {
        passiveSupported = false;
      }
    } // an identifier to tell ZoneTask do not create a new invoke closure


    var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
      useG: true
    };
    var zoneSymbolEventNames$1 = {};
    var globalSources = {};
    var EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
    var IMMEDIATE_PROPAGATION_SYMBOL = '__zone_symbol__propagationStopped';

    function patchEventTarget(_global, apis, patchOptions) {
      var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
      var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
      var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
      var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
      var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
      var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
      var PREPEND_EVENT_LISTENER = 'prependListener';
      var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

      var invokeTask = function invokeTask(task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
          return;
        }

        var delegate = task.callback;

        if (typeof delegate === 'object' && delegate.handleEvent) {
          // create the bind version of handleEvent when invoke
          task.callback = function (event) {
            return delegate.handleEvent(event);
          };

          task.originalDelegate = delegate;
        } // invoke static task.invoke


        task.invoke(task, target, [event]);
        var options = task.options;

        if (options && typeof options === 'object' && options.once) {
          // if options.once is true, after invoke once remove listener here
          // only browser need to do this, nodejs eventEmitter will cal removeListener
          // inside EventEmitter.once
          var _delegate = task.originalDelegate ? task.originalDelegate : task.callback;

          target[REMOVE_EVENT_LISTENER].call(target, event.type, _delegate, options);
        }
      }; // global shared zoneAwareCallback to handle all event callback with capture = false


      var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        } // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190


        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

        if (tasks) {
          // invoke all tasks which attached to current target with given event.type and capture = false
          // for performance concern, if task.length === 1, just invoke
          if (tasks.length === 1) {
            invokeTask(tasks[0], target, event);
          } else {
            // https://github.com/angular/zone.js/issues/836
            // copy the tasks array before invoke, to avoid
            // the callback will remove itself or other listener
            var copyTasks = tasks.slice();

            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }

              invokeTask(copyTasks[i], target, event);
            }
          }
        }
      }; // global shared zoneAwareCallback to handle all event callback with capture = true


      var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;

        if (!event) {
          return;
        } // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190


        var target = this || event.target || _global;
        var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

        if (tasks) {
          // invoke all tasks which attached to current target with given event.type and capture = false
          // for performance concern, if task.length === 1, just invoke
          if (tasks.length === 1) {
            invokeTask(tasks[0], target, event);
          } else {
            // https://github.com/angular/zone.js/issues/836
            // copy the tasks array before invoke, to avoid
            // the callback will remove itself or other listener
            var copyTasks = tasks.slice();

            for (var i = 0; i < copyTasks.length; i++) {
              if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                break;
              }

              invokeTask(copyTasks[i], target, event);
            }
          }
        }
      };

      function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
          return false;
        }

        var useGlobalCallback = true;

        if (patchOptions && patchOptions.useG !== undefined) {
          useGlobalCallback = patchOptions.useG;
        }

        var validateHandler = patchOptions && patchOptions.vh;
        var checkDuplicate = true;

        if (patchOptions && patchOptions.chkDup !== undefined) {
          checkDuplicate = patchOptions.chkDup;
        }

        var returnTarget = false;

        if (patchOptions && patchOptions.rt !== undefined) {
          returnTarget = patchOptions.rt;
        }

        var proto = obj;

        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
          proto = ObjectGetPrototypeOf(proto);
        }

        if (!proto && obj[ADD_EVENT_LISTENER]) {
          // somehow we did not find it, but we can see it. This happens on IE for Window properties.
          proto = obj;
        }

        if (!proto) {
          return false;
        }

        if (proto[zoneSymbolAddEventListener]) {
          return false;
        }

        var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data

        var taskData = {};
        var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
        var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
        var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        var nativePrependEventListener;

        if (patchOptions && patchOptions.prepend) {
          nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
        }

        function checkIsPassive(task) {
          if (!passiveSupported && typeof taskData.options !== 'boolean' && typeof taskData.options !== 'undefined' && taskData.options !== null) {
            // options is a non-null non-undefined object
            // passive is not supported
            // don't pass options as object
            // just pass capture as a boolean
            task.options = !!taskData.options.capture;
            taskData.options = task.options;
          }
        }

        var customScheduleGlobal = function customScheduleGlobal(task) {
          // if there is already a task for the eventName + capture,
          // just return, because we use the shared globalZoneAwareCallback here.
          if (taskData.isExisting) {
            return;
          }

          checkIsPassive(task);
          return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };

        var customCancelGlobal = function customCancelGlobal(task) {
          // if task is not marked as isRemoved, this call is directly
          // from Zone.prototype.cancelTask, we should remove the task
          // from tasksList of target first
          if (!task.isRemoved) {
            var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
            var symbolEventName;

            if (symbolEventNames) {
              symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = symbolEventName && task.target[symbolEventName];

            if (existingTasks) {
              for (var i = 0; i < existingTasks.length; i++) {
                var existingTask = existingTasks[i];

                if (existingTask === task) {
                  existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                  task.isRemoved = true;

                  if (existingTasks.length === 0) {
                    // all tasks for the eventName + capture have gone,
                    // remove globalZoneAwareCallback and remove the task cache from target
                    task.allRemoved = true;
                    task.target[symbolEventName] = null;
                  }

                  break;
                }
              }
            }
          } // if all tasks for the eventName + capture have gone,
          // we will really remove the global event callback,
          // if not, return


          if (!task.allRemoved) {
            return;
          }

          return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };

        var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
          checkIsPassive(task);
          return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };

        var customSchedulePrepend = function customSchedulePrepend(task) {
          return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };

        var customCancelNonGlobal = function customCancelNonGlobal(task) {
          return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };

        var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

        var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
          var typeOfDelegate = typeof delegate;
          return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
        };

        var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;

        var blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];

        var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn) {
          var returnTarget = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
          var prepend = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
          return function () {
            var target = this || _global;
            var eventName = arguments[0];
            var delegate = arguments[1];

            if (!delegate) {
              return nativeListener.apply(this, arguments);
            }

            if (isNode && eventName === 'uncaughtException') {
              // don't patch uncaughtException of nodejs to prevent endless loop
              return nativeListener.apply(this, arguments);
            } // don't create the bind delegate function for handleEvent
            // case here to improve addEventListener performance
            // we will create the bind delegate when invoke


            var isHandleEvent = false;

            if (typeof delegate !== 'function') {
              if (!delegate.handleEvent) {
                return nativeListener.apply(this, arguments);
              }

              isHandleEvent = true;
            }

            if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
              return;
            }

            var options = arguments[2];

            if (blackListedEvents) {
              // check black list
              for (var i = 0; i < blackListedEvents.length; i++) {
                if (eventName === blackListedEvents[i]) {
                  return nativeListener.apply(this, arguments);
                }
              }
            }

            var capture;
            var once = false;

            if (options === undefined) {
              capture = false;
            } else if (options === true) {
              capture = true;
            } else if (options === false) {
              capture = false;
            } else {
              capture = options ? !!options.capture : false;
              once = options ? !!options.once : false;
            }

            var zone = Zone.current;
            var symbolEventNames = zoneSymbolEventNames$1[eventName];
            var symbolEventName;

            if (!symbolEventNames) {
              // the code is duplicate, but I just want to get some better performance
              var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
              var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
              var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
              var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
              zoneSymbolEventNames$1[eventName] = {};
              zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
              zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
              symbolEventName = capture ? symbolCapture : symbol;
            } else {
              symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }

            var existingTasks = target[symbolEventName];
            var isExisting = false;

            if (existingTasks) {
              // already have task registered
              isExisting = true;

              if (checkDuplicate) {
                for (var _i = 0; _i < existingTasks.length; _i++) {
                  if (compare(existingTasks[_i], delegate)) {
                    // same callback, same capture, same event name, just return
                    return;
                  }
                }
              }
            } else {
              existingTasks = target[symbolEventName] = [];
            }

            var source;
            var constructorName = target.constructor['name'];
            var targetSource = globalSources[constructorName];

            if (targetSource) {
              source = targetSource[eventName];
            }

            if (!source) {
              source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
            } // do not create a new object as task.data to pass those things
            // just use the global shared one


            taskData.options = options;

            if (once) {
              // if addEventListener with once options, we don't pass it to
              // native addEventListener, instead we keep the once setting
              // and handle ourselves.
              taskData.options.once = false;
            }

            taskData.target = target;
            taskData.capture = capture;
            taskData.eventName = eventName;
            taskData.isExisting = isExisting;
            var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

            if (data) {
              data.taskData = taskData;
            }

            var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
            // issue, https://github.com/angular/angular/issues/20442

            taskData.target = null; // need to clear up taskData because it is a global object

            if (data) {
              data.taskData = null;
            } // have to save those information to task in case
            // application may call task.zone.cancelTask() directly


            if (once) {
              options.once = true;
            }

            if (!(!passiveSupported && typeof task.options === 'boolean')) {
              // if not support passive, and we pass an option object
              // to addEventListener, we should save the options to task
              task.options = options;
            }

            task.target = target;
            task.capture = capture;
            task.eventName = eventName;

            if (isHandleEvent) {
              // save original delegate for compare to check duplicate
              task.originalDelegate = delegate;
            }

            if (!prepend) {
              existingTasks.push(task);
            } else {
              existingTasks.unshift(task);
            }

            if (returnTarget) {
              return target;
            }
          };
        };

        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

        if (nativePrependEventListener) {
          proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }

        proto[REMOVE_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          var options = arguments[2];
          var capture;

          if (options === undefined) {
            capture = false;
          } else if (options === true) {
            capture = true;
          } else if (options === false) {
            capture = false;
          } else {
            capture = options ? !!options.capture : false;
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeRemoveEventListener.apply(this, arguments);
          }

          if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
            return;
          }

          var symbolEventNames = zoneSymbolEventNames$1[eventName];
          var symbolEventName;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (compare(existingTask, delegate)) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                existingTask.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  existingTask.allRemoved = true;
                  target[symbolEventName] = null;
                }

                existingTask.zone.cancelTask(existingTask);

                if (returnTarget) {
                  return target;
                }

                return;
              }
            }
          } // issue 930, didn't find the event name or callback
          // from zone kept existingTasks, the callback maybe
          // added outside of zone, we need to call native removeEventListener
          // to try to remove it.


          return nativeRemoveEventListener.apply(this, arguments);
        };

        proto[LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];
          var listeners = [];
          var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

          for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            listeners.push(delegate);
          }

          return listeners;
        };

        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (!eventName) {
            var keys = Object.keys(target);

            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
              var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
              // used for monitoring the removeListener call,
              // so just keep removeListener eventListener until
              // all other eventListeners are removed

              if (evtName && evtName !== 'removeListener') {
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
              }
            } // remove removeListener listener finally


            this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
          } else {
            var symbolEventNames = zoneSymbolEventNames$1[eventName];

            if (symbolEventNames) {
              var symbolEventName = symbolEventNames[FALSE_STR];
              var symbolCaptureEventName = symbolEventNames[TRUE_STR];
              var tasks = target[symbolEventName];
              var captureTasks = target[symbolCaptureEventName];

              if (tasks) {
                var removeTasks = tasks.slice();

                for (var _i2 = 0; _i2 < removeTasks.length; _i2++) {
                  var task = removeTasks[_i2];
                  var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                  this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                }
              }

              if (captureTasks) {
                var _removeTasks = captureTasks.slice();

                for (var _i3 = 0; _i3 < _removeTasks.length; _i3++) {
                  var _task = _removeTasks[_i3];

                  var _delegate2 = _task.originalDelegate ? _task.originalDelegate : _task.callback;

                  this[REMOVE_EVENT_LISTENER].call(this, eventName, _delegate2, _task.options);
                }
              }
            }
          }

          if (returnTarget) {
            return this;
          }
        }; // for native toString patch


        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

        if (nativeRemoveAllListeners) {
          attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }

        if (nativeListeners) {
          attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }

        return true;
      }

      var results = [];

      for (var i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
      }

      return results;
    }

    function findEventTasks(target, eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    function patchEventPrototype(global, api) {
      var Event = global['Event'];

      if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
          return function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not

            delegate && delegate.apply(self, args);
          };
        });
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function patchCallbacks(api, target, targetName, method, callbacks) {
      var symbol = Zone.__symbol__(method);

      if (target[symbol]) {
        return;
      }

      var nativeDelegate = target[symbol] = target[method];

      target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
          callbacks.forEach(function (callback) {
            var source = "".concat(targetName, ".").concat(method, "::") + callback;
            var prototype = opts.prototype;

            if (prototype.hasOwnProperty(callback)) {
              var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

              if (descriptor && descriptor.value) {
                descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

                api._redefineProperty(opts.prototype, callback, descriptor);
              } else if (prototype[callback]) {
                prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
              }
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          });
        }

        return nativeDelegate.call(target, name, opts, options);
      };

      api.attachOriginToPatched(target[method], nativeDelegate);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /*
     * This is necessary for Chrome and Chrome mobile, to enable
     * things like redefining `createdCallback` on an element.
     */


    var zoneSymbol$1 = Zone.__symbol__;

    var _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;

    var _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;

    var _create = Object.create;
    var unconfigurablesKey = zoneSymbol$1('unconfigurables');

    function propertyPatch() {
      Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
          throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }

        var originalConfigurableFlag = desc.configurable;

        if (prop !== 'prototype') {
          desc = rewriteDescriptor(obj, prop, desc);
        }

        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
      };

      Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
          Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
      };

      Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
          Object.keys(proto).forEach(function (prop) {
            proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
          });
        }

        return _create(obj, proto);
      };

      Object.getOwnPropertyDescriptor = function (obj, prop) {
        var desc = _getOwnPropertyDescriptor(obj, prop);

        if (desc && isUnconfigurable(obj, prop)) {
          desc.configurable = false;
        }

        return desc;
      };
    }

    function _redefineProperty(obj, prop, desc) {
      var originalConfigurableFlag = desc.configurable;
      desc = rewriteDescriptor(obj, prop, desc);
      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    }

    function isUnconfigurable(obj, prop) {
      return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
    }

    function rewriteDescriptor(obj, prop, desc) {
      // issue-927, if the desc is frozen, don't try to change the desc
      if (!Object.isFrozen(desc)) {
        desc.configurable = true;
      }

      if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
          _defineProperty(obj, unconfigurablesKey, {
            writable: true,
            value: {}
          });
        }

        if (obj[unconfigurablesKey]) {
          obj[unconfigurablesKey][prop] = true;
        }
      }

      return desc;
    }

    function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
      try {
        return _defineProperty(obj, prop, desc);
      } catch (error) {
        if (desc.configurable) {
          // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
          // retry with the original flag value
          if (typeof originalConfigurableFlag == 'undefined') {
            delete desc.configurable;
          } else {
            desc.configurable = originalConfigurableFlag;
          }

          try {
            return _defineProperty(obj, prop, desc);
          } catch (error) {
            var descJson = null;

            try {
              descJson = JSON.stringify(desc);
            } catch (error) {
              descJson = desc.toString();
            }

            console.log("Attempting to configure '".concat(prop, "' with descriptor '").concat(descJson, "' on object '").concat(obj, "' and got error, giving up: ").concat(error));
          }
        } else {
          throw error;
        }
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {globalThis}
     */


    var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
    var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
    var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplyconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
    var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
    var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
    var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
    var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
    var formEventNames = ['autocomplete', 'autocompleteerror'];
    var detailEventNames = ['toggle'];
    var frameEventNames = ['load'];
    var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
    var marqueeEventNames = ['bounce', 'finish', 'start'];
    var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
    var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
    var websocketEventNames = ['close', 'error', 'open', 'message'];
    var workerEventNames = ['error', 'message'];
    var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

    function filterProperties(target, onProperties, ignoreProperties) {
      if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
      }

      var tip = ignoreProperties.filter(function (ip) {
        return ip.target === target;
      });

      if (!tip || tip.length === 0) {
        return onProperties;
      }

      var targetIgnoreProperties = tip[0].ignoreProperties;
      return onProperties.filter(function (op) {
        return targetIgnoreProperties.indexOf(op) === -1;
      });
    }

    function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
      // check whether target is available, sometimes target will be undefined
      // because different browser or some 3rd party plugin.
      if (!target) {
        return;
      }

      var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
      patchOnProperties(target, filteredProperties, prototype);
    }

    function propertyDescriptorPatch(api, _global) {
      if (isNode && !isMix) {
        return;
      }

      if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
      }

      var supportsWebSocket = typeof WebSocket !== 'undefined';
      var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

      if (isBrowser) {
        var _internalWindow = window;
        var ignoreErrorProperties = isIE ? [{
          target: _internalWindow,
          ignoreProperties: ['error']
        }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not

        patchFilteredProperties(_internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(_internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

        if (typeof _internalWindow['SVGElement'] !== 'undefined') {
          patchFilteredProperties(_internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }

        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        var HTMLMarqueeElement = _internalWindow['HTMLMarqueeElement'];

        if (HTMLMarqueeElement) {
          patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
        }

        var Worker = _internalWindow['Worker'];

        if (Worker) {
          patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
        }
      }

      var XMLHttpRequest = _global['XMLHttpRequest'];

      if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
      }

      var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
      }

      if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
      }

      if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
      }
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    Zone.__load_patch('util', function (global, Zone, api) {
      api.patchOnProperties = patchOnProperties;
      api.patchMethod = patchMethod;
      api.bindArguments = bindArguments;
      api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
      // define which events will not be patched by `Zone.js`.
      // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
      // the name consistent with angular repo.
      // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
      // backwards compatibility.

      var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

      var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

      if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
      }

      if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
      }

      api.patchEventPrototype = patchEventPrototype;
      api.patchEventTarget = patchEventTarget;
      api.isIEOrEdge = isIEOrEdge;
      api.ObjectDefineProperty = ObjectDefineProperty;
      api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
      api.ObjectCreate = ObjectCreate;
      api.ArraySlice = ArraySlice;
      api.patchClass = patchClass;
      api.wrapWithCurrentZone = wrapWithCurrentZone;
      api.filterProperties = filterProperties;
      api.attachOriginToPatched = attachOriginToPatched;
      api._redefineProperty = _redefineProperty;
      api.patchCallbacks = patchCallbacks;

      api.getGlobalObjects = function () {
        return {
          globalSources: globalSources,
          zoneSymbolEventNames: zoneSymbolEventNames$1,
          eventNames: eventNames,
          isBrowser: isBrowser,
          isMix: isMix,
          isNode: isNode,
          TRUE_STR: TRUE_STR,
          FALSE_STR: FALSE_STR,
          ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
          ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
          REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
        };
      };
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    var taskSymbol = zoneSymbol('zoneTask');

    function patchTimer(window, setName, cancelName, nameSuffix) {
      var setNative = null;
      var clearNative = null;
      setName += nameSuffix;
      cancelName += nameSuffix;
      var tasksByHandleId = {};

      function scheduleTask(task) {
        var data = task.data;

        function timer() {
          try {
            task.invoke.apply(this, arguments);
          } finally {
            // issue-934, task will be cancelled
            // even it is a periodic task such as
            // setInterval
            if (!(task.data && task.data.isPeriodic)) {
              if (typeof data.handleId === 'number') {
                // in non-nodejs env, we remove timerId
                // from local cache
                delete tasksByHandleId[data.handleId];
              } else if (data.handleId) {
                // Node returns complex objects as handleIds
                // we remove task reference from timer object
                data.handleId[taskSymbol] = null;
              }
            }
          }
        }

        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
      }

      function clearTask(task) {
        return clearNative(task.data.handleId);
      }

      setNative = patchMethod(window, setName, function (delegate) {
        return function (self, args) {
          if (typeof args[0] === 'function') {
            var _options = {
              isPeriodic: nameSuffix === 'Interval',
              delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
              args: args
            };
            var task = scheduleMacroTaskWithCurrentZone(setName, args[0], _options, scheduleTask, clearTask);

            if (!task) {
              return task;
            } // Node.js must additionally support the ref and unref functions.


            var handle = task.data.handleId;

            if (typeof handle === 'number') {
              // for non nodejs env, we save handleId: task
              // mapping in local cache for clearTimeout
              tasksByHandleId[handle] = task;
            } else if (handle) {
              // for nodejs env, we save task
              // reference in timerId Object for clearTimeout
              handle[taskSymbol] = task;
            } // check whether handle is null, because some polyfill or browser
            // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


            if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
              task.ref = handle.ref.bind(handle);
              task.unref = handle.unref.bind(handle);
            }

            if (typeof handle === 'number' || handle) {
              return handle;
            }

            return task;
          } else {
            // cause an error by calling it directly.
            return delegate.apply(window, args);
          }
        };
      });
      clearNative = patchMethod(window, cancelName, function (delegate) {
        return function (self, args) {
          var id = args[0];
          var task;

          if (typeof id === 'number') {
            // non nodejs env.
            task = tasksByHandleId[id];
          } else {
            // nodejs env.
            task = id && id[taskSymbol]; // other environments.

            if (!task) {
              task = id;
            }
          }

          if (task && typeof task.type === 'string') {
            if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
              if (typeof id === 'number') {
                delete tasksByHandleId[id];
              } else if (id) {
                id[taskSymbol] = null;
              } // Do not cancel already canceled functions


              task.zone.cancelTask(task);
            }
          } else {
            // cause an error by calling it directly.
            delegate.apply(window, args);
          }
        };
      });
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function patchCustomElements(_global, api) {
      var _api$getGlobalObjects = api.getGlobalObjects(),
          isBrowser = _api$getGlobalObjects.isBrowser,
          isMix = _api$getGlobalObjects.isMix;

      if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
        return;
      }

      var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
      api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function eventTargetPatch(_global, api) {
      if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
      }

      var _api$getGlobalObjects2 = api.getGlobalObjects(),
          eventNames = _api$getGlobalObjects2.eventNames,
          zoneSymbolEventNames = _api$getGlobalObjects2.zoneSymbolEventNames,
          TRUE_STR = _api$getGlobalObjects2.TRUE_STR,
          FALSE_STR = _api$getGlobalObjects2.FALSE_STR,
          ZONE_SYMBOL_PREFIX = _api$getGlobalObjects2.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


      for (var i = 0; i < eventNames.length; i++) {
        var eventName = eventNames[i];
        var falseEventName = eventName + FALSE_STR;
        var trueEventName = eventName + TRUE_STR;
        var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
      }

      var EVENT_TARGET = _global['EventTarget'];

      if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
      }

      api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
      return true;
    }

    function patchEvent(global, api) {
      api.patchEventPrototype(global, api);
    }
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview
     * @suppress {missingRequire}
     */


    Zone.__load_patch('legacy', function (global) {
      var legacyPatch = global[Zone.__symbol__('legacyPatch')];

      if (legacyPatch) {
        legacyPatch();
      }
    });

    Zone.__load_patch('timers', function (global) {
      var set = 'set';
      var clear = 'clear';
      patchTimer(global, set, clear, 'Timeout');
      patchTimer(global, set, clear, 'Interval');
      patchTimer(global, set, clear, 'Immediate');
    });

    Zone.__load_patch('requestAnimationFrame', function (global) {
      patchTimer(global, 'request', 'cancel', 'AnimationFrame');
      patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
      patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
    });

    Zone.__load_patch('blocking', function (global, Zone) {
      var blockingMethods = ['alert', 'prompt', 'confirm'];

      for (var i = 0; i < blockingMethods.length; i++) {
        var name = blockingMethods[i];
        patchMethod(global, name, function (delegate, symbol, name) {
          return function (s, args) {
            return Zone.current.run(delegate, global, args, name);
          };
        });
      }
    });

    Zone.__load_patch('EventTarget', function (global, Zone, api) {
      patchEvent(global, api);
      eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

      var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

      if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
      }

      patchClass('MutationObserver');
      patchClass('WebKitMutationObserver');
      patchClass('IntersectionObserver');
      patchClass('FileReader');
    });

    Zone.__load_patch('on_property', function (global, Zone, api) {
      propertyDescriptorPatch(api, global);
      propertyPatch();
    });

    Zone.__load_patch('customElements', function (global, Zone, api) {
      patchCustomElements(global, api);
    });

    Zone.__load_patch('XHR', function (global, Zone) {
      // Treat XMLHttpRequest as a macrotask.
      patchXHR(global);
      var XHR_TASK = zoneSymbol('xhrTask');
      var XHR_SYNC = zoneSymbol('xhrSync');
      var XHR_LISTENER = zoneSymbol('xhrListener');
      var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
      var XHR_URL = zoneSymbol('xhrURL');
      var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

      function patchXHR(window) {
        var XMLHttpRequest = window['XMLHttpRequest'];

        if (!XMLHttpRequest) {
          // XMLHttpRequest is not available in service worker
          return;
        }

        var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

        function findPendingTask(target) {
          return target[XHR_TASK];
        }

        var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

        if (!oriAddListener) {
          var XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];

          if (XMLHttpRequestEventTarget) {
            var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
            oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }
        }

        var READY_STATE_CHANGE = 'readystatechange';
        var SCHEDULED = 'scheduled';

        function scheduleTask(task) {
          var data = task.data;
          var target = data.target;
          target[XHR_SCHEDULED] = false;
          target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

          var listener = target[XHR_LISTENER];

          if (!oriAddListener) {
            oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
            oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
          }

          if (listener) {
            oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
          }

          var newListener = target[XHR_LISTENER] = function () {
            if (target.readyState === target.DONE) {
              // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
              // readyState=4 multiple times, so we need to check task state here
              if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                // check whether the xhr has registered onload listener
                // if that is the case, the task should invoke after all
                // onload listeners finish.
                var loadTasks = target['__zone_symbol__loadfalse'];

                if (loadTasks && loadTasks.length > 0) {
                  var oriInvoke = task.invoke;

                  task.invoke = function () {
                    // need to load the tasks again, because in other
                    // load listener, they may remove themselves
                    var loadTasks = target['__zone_symbol__loadfalse'];

                    for (var i = 0; i < loadTasks.length; i++) {
                      if (loadTasks[i] === task) {
                        loadTasks.splice(i, 1);
                      }
                    }

                    if (!data.aborted && task.state === SCHEDULED) {
                      oriInvoke.call(task);
                    }
                  };

                  loadTasks.push(task);
                } else {
                  task.invoke();
                }
              } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                // error occurs when xhr.send()
                target[XHR_ERROR_BEFORE_SCHEDULED] = true;
              }
            }
          };

          oriAddListener.call(target, READY_STATE_CHANGE, newListener);
          var storedTask = target[XHR_TASK];

          if (!storedTask) {
            target[XHR_TASK] = task;
          }

          sendNative.apply(target, data.args);
          target[XHR_SCHEDULED] = true;
          return task;
        }

        function placeholderCallback() {}

        function clearTask(task) {
          var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
          // to prevent it from firing. So instead, we store info for the event listener.

          data.aborted = true;
          return abortNative.apply(data.target, data.args);
        }

        var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
          return function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
          };
        });
        var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
          return function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
              // a fetch is scheduling, so we are using xhr to polyfill fetch
              // and because we already schedule macroTask for fetch, we should
              // not schedule a macroTask for xhr again
              return sendNative.apply(self, args);
            }

            if (self[XHR_SYNC]) {
              // if the XHR is sync there is no task to schedule, just execute the code.
              return sendNative.apply(self, args);
            } else {
              var _options2 = {
                target: self,
                url: self[XHR_URL],
                isPeriodic: false,
                args: args,
                aborted: false
              };
              var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, _options2, scheduleTask, clearTask);

              if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !_options2.aborted && task.state === SCHEDULED) {
                // xhr request throw error when send
                // we should invoke task instead of leaving a scheduled
                // pending macroTask
                task.invoke();
              }
            }
          };
        });
        var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
          return function (self, args) {
            var task = findPendingTask(self);

            if (task && typeof task.type == 'string') {
              // If the XHR has already completed, do nothing.
              // If the XHR has already been aborted, do nothing.
              // Fix #569, call abort multiple times before done will cause
              // macroTask task count be negative number
              if (task.cancelFn == null || task.data && task.data.aborted) {
                return;
              }

              task.zone.cancelTask(task);
            } else if (Zone.current[fetchTaskAborting] === true) {
              // the abort is called from fetch polyfill, we need to call native abort of XHR.
              return abortNative.apply(self, args);
            } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.

          };
        });
      }
    });

    Zone.__load_patch('geolocation', function (global) {
      /// GEO_LOCATION
      if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
      }
    });

    Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
      // handle unhandled promise rejection
      function findPromiseRejectionHandler(evtName) {
        return function (e) {
          var eventTasks = findEventTasks(global, evtName);
          eventTasks.forEach(function (eventTask) {
            // windows has added unhandledrejection event listener
            // trigger the event listener
            var PromiseRejectionEvent = global['PromiseRejectionEvent'];

            if (PromiseRejectionEvent) {
              var evt = new PromiseRejectionEvent(evtName, {
                promise: e.promise,
                reason: e.rejection
              });
              eventTask.invoke(evt);
            }
          });
        };
      }

      if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
      }
    });
    /**
     * @license
     * Copyright Google Inc. All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, checkDirtyState */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "checkDirtyState", function () {
      return checkDirtyState;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _common_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./common/index */
    "./src/app/common/index.ts");
    /* harmony import */


    var _events_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./events/index */
    "./src/app/events/index.ts");
    /* harmony import */


    var _nav_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./nav/navbar.component */
    "./src/app/nav/navbar.component.ts");
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./routes */
    "./src/app/routes.ts");
    /* harmony import */


    var _errors_404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./errors/404.component */
    "./src/app/errors/404.component.ts");
    /* harmony import */


    var _event_app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./event-app.component */
    "./src/app/event-app.component.ts");
    /* harmony import */


    var _user_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user/auth.service */
    "./src/app/user/auth.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _events_shared_event_resolver_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./events/shared/event-resolver.service */
    "./src/app/events/shared/event-resolver.service.ts");

    var toastr = window['toastr'];
    var jQuery = window['$'];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_7__["appRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]],
      declarations: [_event_app_component__WEBPACK_IMPORTED_MODULE_9__["EventsAppComponent"], _nav_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"], _events_index__WEBPACK_IMPORTED_MODULE_5__["EventListComponent"], _events_index__WEBPACK_IMPORTED_MODULE_5__["EventThumbnailComponent"], _events_index__WEBPACK_IMPORTED_MODULE_5__["EventDetailsComponent"], _events_index__WEBPACK_IMPORTED_MODULE_5__["CreateSessionComponent"], _events_index__WEBPACK_IMPORTED_MODULE_5__["SessionListComponent"], _events_index__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"], _events_index__WEBPACK_IMPORTED_MODULE_5__["UpvoteComponent"], _errors_404_component__WEBPACK_IMPORTED_MODULE_8__["Error404Component"], _common_index__WEBPACK_IMPORTED_MODULE_4__["CollapsibleWellComponent"], _common_index__WEBPACK_IMPORTED_MODULE_4__["SimpleModalComponent"], _common_index__WEBPACK_IMPORTED_MODULE_4__["ModalTriggerDirective"], _events_index__WEBPACK_IMPORTED_MODULE_5__["LocationValidator"], _events_index__WEBPACK_IMPORTED_MODULE_5__["DurationPipe"]],
      providers: [_events_index__WEBPACK_IMPORTED_MODULE_5__["EventService"], {
        provide: _common_index__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"],
        useValue: toastr
      }, {
        provide: _common_index__WEBPACK_IMPORTED_MODULE_4__["JQ_TOKEN"],
        useValue: jQuery
      }, _events_index__WEBPACK_IMPORTED_MODULE_5__["EventListResolver"], _events_shared_event_resolver_service__WEBPACK_IMPORTED_MODULE_13__["EventResolver"], _user_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"], _events_index__WEBPACK_IMPORTED_MODULE_5__["VoterService"], {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
      }, {
        provide: "Window",
        useFactory: function useFactory() {
          return window;
        }
      }],
      bootstrap: [_event_app_component__WEBPACK_IMPORTED_MODULE_9__["EventsAppComponent"]]
    })], AppModule);

    function checkDirtyState(component) {
      if (component.isDirty) {
        return window.confirm('You have not Saved this event, do you really want to cancel?');
      }
    }
    /***/

  },

  /***/
  "./src/app/common/collapsible-well.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/common/collapsible-well.component.ts ***!
    \******************************************************/

  /*! exports provided: CollapsibleWellComponent */

  /***/
  function srcAppCommonCollapsibleWellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function () {
      return CollapsibleWellComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CollapsibleWellComponent =
    /*#__PURE__*/
    function () {
      function CollapsibleWellComponent() {
        _classCallCheck(this, CollapsibleWellComponent);

        this.visible = true;
      }

      _createClass(CollapsibleWellComponent, [{
        key: "toggleContent",
        value: function toggleContent() {
          this.visible = !this.visible;
        }
      }]);

      return CollapsibleWellComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CollapsibleWellComponent.prototype, "title", void 0);
    CollapsibleWellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'collapsible-well',
      template: "\n        <div (click)=\"toggleContent()\" class=\"well pointable\">\n        <h4>\n            <ng-content select=\"[well-title]\"></ng-content>\n        </h4>\n        <ng-content *ngIf=\"visible\" select=\"[well-body]\"></ng-content>\n        </div>\n    "
    })], CollapsibleWellComponent);
    /***/
  },

  /***/
  "./src/app/common/index.ts":
  /*!*********************************!*\
    !*** ./src/app/common/index.ts ***!
    \*********************************/

  /*! exports provided: TOASTR_TOKEN, JQ_TOKEN, CollapsibleWellComponent, SimpleModalComponent, ModalTriggerDirective */

  /***/
  function srcAppCommonIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toastr.service */
    "./src/app/common/toastr.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function () {
      return _toastr_service__WEBPACK_IMPORTED_MODULE_1__["TOASTR_TOKEN"];
    });
    /* harmony import */


    var _jQuery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jQuery.service */
    "./src/app/common/jQuery.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function () {
      return _jQuery_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"];
    });
    /* harmony import */


    var _collapsible_well_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./collapsible-well.component */
    "./src/app/common/collapsible-well.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function () {
      return _collapsible_well_component__WEBPACK_IMPORTED_MODULE_3__["CollapsibleWellComponent"];
    });
    /* harmony import */


    var _simpleModal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./simpleModal.component */
    "./src/app/common/simpleModal.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function () {
      return _simpleModal_component__WEBPACK_IMPORTED_MODULE_4__["SimpleModalComponent"];
    });
    /* harmony import */


    var _modalTrigger_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modalTrigger.directive */
    "./src/app/common/modalTrigger.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function () {
      return _modalTrigger_directive__WEBPACK_IMPORTED_MODULE_5__["ModalTriggerDirective"];
    });
    /***/

  },

  /***/
  "./src/app/common/jQuery.service.ts":
  /*!******************************************!*\
    !*** ./src/app/common/jQuery.service.ts ***!
    \******************************************/

  /*! exports provided: JQ_TOKEN */

  /***/
  function srcAppCommonJQueryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function () {
      return JQ_TOKEN;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JQ_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('jQuery');
    /***/
  },

  /***/
  "./src/app/common/modalTrigger.directive.ts":
  /*!**************************************************!*\
    !*** ./src/app/common/modalTrigger.directive.ts ***!
    \**************************************************/

  /*! exports provided: ModalTriggerDirective */

  /***/
  function srcAppCommonModalTriggerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalTriggerDirective", function () {
      return ModalTriggerDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _jQuery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jQuery.service */
    "./src/app/common/jQuery.service.ts");

    var ModalTriggerDirective =
    /*#__PURE__*/
    function () {
      function ModalTriggerDirective($, ref) {
        _classCallCheck(this, ModalTriggerDirective);

        this.$ = $;
        this.el = ref.nativeElement;
      }

      _createClass(ModalTriggerDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.el.addEventListener('click', function (e) {
            _this3.$("#".concat(_this3.modalId)).modal({});
          });
        }
      }]);

      return ModalTriggerDirective;
    }();

    ModalTriggerDirective.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_jQuery_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('modal-trigger')], ModalTriggerDirective.prototype, "modalId", void 0);
    ModalTriggerDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[modal-trigger]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_jQuery_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"]))], ModalTriggerDirective);
    /***/
  },

  /***/
  "./src/app/common/simpleModal.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/common/simpleModal.component.ts ***!
    \*************************************************/

  /*! exports provided: SimpleModalComponent */

  /***/
  function srcAppCommonSimpleModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleModalComponent", function () {
      return SimpleModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _jQuery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./jQuery.service */
    "./src/app/common/jQuery.service.ts");

    var SimpleModalComponent =
    /*#__PURE__*/
    function () {
      function SimpleModalComponent($) {
        _classCallCheck(this, SimpleModalComponent);

        this.$ = $;
      }

      _createClass(SimpleModalComponent, [{
        key: "closeModal",
        value: function closeModal() {
          if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
            console.log(this.$);
            this.$(this.containerEl.nativeElement).modal('hide');
          }
        }
      }]);

      return SimpleModalComponent;
    }();

    SimpleModalComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_jQuery_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SimpleModalComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SimpleModalComponent.prototype, "elementId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SimpleModalComponent.prototype, "closeOnBodyClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalcontainer', {
      static: false
    })], SimpleModalComponent.prototype, "containerEl", void 0);
    SimpleModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'simple-modal',
      template: "\n  <div id=\"{{elementId}}\" #modalcontainer class=\"modal fade\" tabindex=\"-1\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n          <h4 class=\"modal-title\">{{title}}</h4>\n        </div>\n        <div class=\"modal-body\" (click)=\"closeModal()\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    </div>\n  </div>\n  ",
      styles: ["\n    .modal-body { height: 250px; overflow-y: scroll; }\n  "]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_jQuery_service__WEBPACK_IMPORTED_MODULE_2__["JQ_TOKEN"]))], SimpleModalComponent);
    /***/
  },

  /***/
  "./src/app/common/toastr.service.ts":
  /*!******************************************!*\
    !*** ./src/app/common/toastr.service.ts ***!
    \******************************************/

  /*! exports provided: TOASTR_TOKEN */

  /***/
  function srcAppCommonToastrServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function () {
      return TOASTR_TOKEN;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TOASTR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('toastr');
    /***/
  },

  /***/
  "./src/app/errors/404.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/errors/404.component.ts ***!
    \*****************************************/

  /*! exports provided: Error404Component */

  /***/
  function srcAppErrors404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Error404Component", function () {
      return Error404Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Error404Component = function Error404Component() {
      _classCallCheck(this, Error404Component);
    };

    Error404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <h1 class=\"errorMessage\">404'd</h1>\n  ",
      styles: ["\n    .errorMessage {\n      margin-top:150px;\n      font-size: 170px;\n      text-align: center;\n    }"]
    })], Error404Component);
    /***/
  },

  /***/
  "./src/app/event-app.component.ts":
  /*!****************************************!*\
    !*** ./src/app/event-app.component.ts ***!
    \****************************************/

  /*! exports provided: EventsAppComponent */

  /***/
  function srcAppEventAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsAppComponent", function () {
      return EventsAppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user/auth.service */
    "./src/app/user/auth.service.ts");

    var EventsAppComponent =
    /*#__PURE__*/
    function () {
      function EventsAppComponent(auth) {
        _classCallCheck(this, EventsAppComponent);

        this.auth = auth;
      }

      _createClass(EventsAppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.auth.checkAuthenticationStatus();
        }
      }]);

      return EventsAppComponent;
    }();

    EventsAppComponent.ctorParameters = function () {
      return [{
        type: _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    EventsAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'events-app',
      template: "\n        <nav-bar></nav-bar>\n        <router-outlet></router-outlet>\n\n        "
    })], EventsAppComponent);
    /***/
  },

  /***/
  "./src/app/events/create-event.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/events/create-event.component.ts ***!
    \**************************************************/

  /*! exports provided: CreateEventComponent */

  /***/
  function srcAppEventsCreateEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function () {
      return CreateEventComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _events_shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../events/shared/index */
    "./src/app/events/shared/index.ts");

    var CreateEventComponent =
    /*#__PURE__*/
    function () {
      function CreateEventComponent(router, eventService) {
        _classCallCheck(this, CreateEventComponent);

        this.router = router;
        this.eventService = eventService;
        this.isDirty = true;
      }

      _createClass(CreateEventComponent, [{
        key: "saveEvent",
        value: function saveEvent(formValues) {
          var _this4 = this;

          this.eventService.saveEvent(formValues).subscribe(function () {
            _this4.isDirty = false;

            _this4.router.navigate(['/events']);
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.router.navigate(['/events']);
        }
      }]);

      return CreateEventComponent;
    }();

    CreateEventComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _events_shared_index__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }];
    };

    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/create-event.component.html")).default,
      styles: ["\n    em {float:right; color:#E05C65; padding-left: 10px;}\n    .error input {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder {color: #999;}\n    .error ::-moz-placeholder { color: #999;}\n    .error ::-moz-placeholder {color: #999;}\n    .error ::-ms-input-placeholder {color: #999;}\n  "]
    })], CreateEventComponent);
    /***/
  },

  /***/
  "./src/app/events/event-details/create-session.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/events/event-details/create-session.component.ts ***!
    \******************************************************************/

  /*! exports provided: CreateSessionComponent */

  /***/
  function srcAppEventsEventDetailsCreateSessionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function () {
      return CreateSessionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/index */
    "./src/app/events/shared/index.ts");

    var CreateSessionComponent =
    /*#__PURE__*/
    function () {
      function CreateSessionComponent() {
        _classCallCheck(this, CreateSessionComponent);

        this.saveNewSession = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancelAddSession = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CreateSessionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.presenter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.duration = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.level = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
          this.abstract = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(400), Object(_shared_index__WEBPACK_IMPORTED_MODULE_3__["restrictedWords"])(['foo', 'bar'])]);
          this.newSessionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
          });
        }
      }, {
        key: "saveSession",
        value: function saveSession(formValues) {
          var session = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []
          };
          this.saveNewSession.emit(session);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.cancelAddSession.emit();
        }
      }]);

      return CreateSessionComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CreateSessionComponent.prototype, "saveNewSession", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CreateSessionComponent.prototype, "cancelAddSession", void 0);
    CreateSessionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'create-session',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-session.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/create-session.component.html")).default,
      styles: ["\n    em {float:right; color:#E05C65; padding-left: 10px;}\n    .error input, .error select, .error textarea\n    .error input {background-color:#E3C3C5;}\n    .error ::-webkit-input-placeholder {color: #999;}\n    .error ::-moz-placeholder { color: #999;}\n    .error ::-moz-placeholder {color: #999;}\n    .error ::-ms-input-placeholder {color: #999;}\n  "]
    })], CreateSessionComponent);
    /***/
  },

  /***/
  "./src/app/events/event-details/event-details.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/events/event-details/event-details.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EventDetailsComponent */

  /***/
  function srcAppEventsEventDetailsEventDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function () {
      return EventDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/event.service */
    "./src/app/events/shared/event.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EventDetailsComponent =
    /*#__PURE__*/
    function () {
      function EventDetailsComponent(eventService, route) {
        _classCallCheck(this, EventDetailsComponent);

        this.eventService = eventService;
        this.route = route;
        this.filterBy = 'all';
        this.sortBy = 'votes';
      }

      _createClass(EventDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.data.forEach(function (data) {
            _this5.event = data['event'];
            _this5.addMode = false;
          });
        }
      }, {
        key: "addSession",
        value: function addSession() {
          this.addMode = true;
        }
      }, {
        key: "saveNewSession",
        value: function saveNewSession(session) {
          var nextId = Math.max.apply(null, this.event.sessions.map(function (s) {
            return s.id;
          }));
          session.id = nextId + 1;
          this.event.sessions.push(session);
          this.eventService.saveEvent(this.event).subscribe();
          this.addMode = false;
        }
      }, {
        key: "cancelAddSession",
        value: function cancelAddSession() {
          this.addMode = false;
        }
      }]);

      return EventDetailsComponent;
    }();

    EventDetailsComponent.ctorParameters = function () {
      return [{
        type: _shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EventDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./event-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/event-details.component.html")).default,
      styles: ["\n        .container {padding-left:20px; padding-right:20px}\n        .event-image {height: 100px}\n        a {cursor:pointer}\n    "]
    })], EventDetailsComponent);
    /***/
  },

  /***/
  "./src/app/events/event-details/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/events/event-details/index.ts ***!
    \***********************************************/

  /*! exports provided: EventDetailsComponent, CreateSessionComponent, SessionListComponent, UpvoteComponent, VoterService */

  /***/
  function srcAppEventsEventDetailsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _event_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./event-details.component */
    "./src/app/events/event-details/event-details.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function () {
      return _event_details_component__WEBPACK_IMPORTED_MODULE_1__["EventDetailsComponent"];
    });
    /* harmony import */


    var _create_session_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-session.component */
    "./src/app/events/event-details/create-session.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function () {
      return _create_session_component__WEBPACK_IMPORTED_MODULE_2__["CreateSessionComponent"];
    });
    /* harmony import */


    var _session_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./session-list.component */
    "./src/app/events/event-details/session-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionListComponent", function () {
      return _session_list_component__WEBPACK_IMPORTED_MODULE_3__["SessionListComponent"];
    });
    /* harmony import */


    var _upvote_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./upvote.component */
    "./src/app/events/event-details/upvote.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function () {
      return _upvote_component__WEBPACK_IMPORTED_MODULE_4__["UpvoteComponent"];
    });
    /* harmony import */


    var _voter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./voter.service */
    "./src/app/events/event-details/voter.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VoterService", function () {
      return _voter_service__WEBPACK_IMPORTED_MODULE_5__["VoterService"];
    });
    /***/

  },

  /***/
  "./src/app/events/event-details/session-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/events/event-details/session-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: SessionListComponent */

  /***/
  function srcAppEventsEventDetailsSessionListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionListComponent", function () {
      return SessionListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _voter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./voter.service */
    "./src/app/events/event-details/voter.service.ts");
    /* harmony import */


    var _user_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../user/auth.service */
    "./src/app/user/auth.service.ts");

    var SessionListComponent =
    /*#__PURE__*/
    function () {
      function SessionListComponent(auth, voterService) {
        _classCallCheck(this, SessionListComponent);

        this.auth = auth;
        this.voterService = voterService;
        this.visibleSessions = [];
      }

      _createClass(SessionListComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(filter) {
          if (this.sessions) {
            this.filterSessions(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
          }
        }
      }, {
        key: "toggleVote",
        value: function toggleVote(session) {
          if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
          } else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
          }

          if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
          }
        }
      }, {
        key: "userHasVoted",
        value: function userHasVoted(session) {
          return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
        }
      }, {
        key: "filterSessions",
        value: function filterSessions(filter) {
          if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
          } else {
            this.visibleSessions = this.sessions.filter(function (session) {
              return session.level.toLocaleLowerCase() === filter;
            });
          }
        }
      }]);

      return SessionListComponent;
    }();

    SessionListComponent.ctorParameters = function () {
      return [{
        type: _user_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _voter_service__WEBPACK_IMPORTED_MODULE_2__["VoterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SessionListComponent.prototype, "sessions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SessionListComponent.prototype, "filterBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SessionListComponent.prototype, "sortBy", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SessionListComponent.prototype, "eventId", void 0);
    SessionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'session-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./session-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/event-details/session-list.component.html")).default
    })], SessionListComponent);

    function sortByNameAsc(s1, s2) {
      if (s1.name > s2.name) return 1;else if (s1.name === s2.name) return 0;else return -1;
    }

    function sortByVotesDesc(s1, s2) {
      return s2.voters.length - s1.voters.length;
    }
    /***/

  },

  /***/
  "./src/app/events/event-details/upvote.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/events/event-details/upvote.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsEventDetailsUpvoteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".votingWidgetContainer {\r\n  padding-left:24px;\r\n}\r\n\r\n.votingWidget {\r\n  height: 64px;\r\n  padding-top: 7px;\r\n  border-radius: 21px;\r\n}\r\n\r\n.votingButton {\r\n  margin-left: -7px;\r\n  margin-top: 1px;\r\n  cursor:pointer;\r\n}\r\n\r\n.votingButton i {\r\n  color: white;\r\n}\r\n\r\n.badge-inverse {\r\n  background-color: #fff;\r\n  color: #4e5d6c;\r\n}\r\n\r\n.votingCount {\r\n  margin-left: -11px;\r\n  margin-top: 1px;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50LWRldGFpbHMvdXB2b3RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudC1kZXRhaWxzL3Vwdm90ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZvdGluZ1dpZGdldENvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1sZWZ0OjI0cHg7XHJcbn1cclxuXHJcbi52b3RpbmdXaWRnZXQge1xyXG4gIGhlaWdodDogNjRweDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIxcHg7XHJcbn1cclxuXHJcbi52b3RpbmdCdXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAtN3B4O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLnZvdGluZ0J1dHRvbiBpIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5iYWRnZS1pbnZlcnNlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjNGU1ZDZjO1xyXG59XHJcblxyXG4udm90aW5nQ291bnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTFweDtcclxuICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/events/event-details/upvote.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/events/event-details/upvote.component.ts ***!
    \**********************************************************/

  /*! exports provided: UpvoteComponent */

  /***/
  function srcAppEventsEventDetailsUpvoteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function () {
      return UpvoteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UpvoteComponent =
    /*#__PURE__*/
    function () {
      function UpvoteComponent() {
        _classCallCheck(this, UpvoteComponent);

        this.vote = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(UpvoteComponent, [{
        key: "onClick",
        value: function onClick() {
          this.vote.emit({});
        }
      }, {
        key: "voted",
        set: function set(val) {
          this.iconColor = val ? "red" : "white";
        }
      }]);

      return UpvoteComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UpvoteComponent.prototype, "count", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], UpvoteComponent.prototype, "voted", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], UpvoteComponent.prototype, "vote", void 0);
    UpvoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "upvote",
      template: "\n    <div class=\"votingWidgetContainer pointable\" (click)=\"onClick()\">\n      <div class=\"well votingWidget\">\n        <div class=\"votingButton\">\n          <i\n            class=\"glyphicon\n            glyphicon-heart\"\n            [style.color]=\"iconColor\"\n          ></i>\n        </div>\n        <div class=\"badge badge-inverse votingCount\">\n          <div>{{ count }}</div>\n        </div>\n      </div>\n    </div>\n  ",
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upvote.component.css */
      "./src/app/events/event-details/upvote.component.css")).default]
    })], UpvoteComponent);
    /***/
  },

  /***/
  "./src/app/events/event-details/voter.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/events/event-details/voter.service.ts ***!
    \*******************************************************/

  /*! exports provided: VoterService */

  /***/
  function srcAppEventsEventDetailsVoterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoterService", function () {
      return VoterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var VoterService =
    /*#__PURE__*/
    function () {
      function VoterService(http) {
        _classCallCheck(this, VoterService);

        this.http = http;
      }

      _createClass(VoterService, [{
        key: "deleteVoter",
        value: function deleteVoter(eventId, session, voterName) {
          session.voters = session.voters.filter(function (voter) {
            return voter !== voterName;
          });
          var url = "api/events/".concat(eventId, "/sessions/").concat(session.id, "/voters/").concat(voterName);
          this.http.delete(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addVoter'))).subscribe();
        }
      }, {
        key: "addVoter",
        value: function addVoter(eventId, session, voterName) {
          session.voters.push(voterName);
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': '/application/json'
            })
          };
          var url = "api/events/".concat(eventId, "/sessions/").concat(session.id, "/voters/").concat(voterName);
          this.http.post(url, {}, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addVoter'))).subscribe();
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
          };
        }
      }, {
        key: "userHasVoted",
        value: function userHasVoted(session, voterName) {
          return session.voters.some(function (voter) {
            return voter === voterName;
          });
        }
      }]);

      return VoterService;
    }();

    VoterService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    VoterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], VoterService);
    /***/
  },

  /***/
  "./src/app/events/event-thumbnail.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/events/event-thumbnail.component.ts ***!
    \*****************************************************/

  /*! exports provided: EventThumbnailComponent */

  /***/
  function srcAppEventsEventThumbnailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function () {
      return EventThumbnailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventThumbnailComponent =
    /*#__PURE__*/
    function () {
      function EventThumbnailComponent() {
        _classCallCheck(this, EventThumbnailComponent);
      }

      _createClass(EventThumbnailComponent, [{
        key: "getStartTimeStyle",
        value: function getStartTimeStyle() {
          if (this.event && this.event.time == '8:00 am') {
            return {
              color: '#003300',
              'font-weight': 'bold'
            };
          }

          return {};
        }
      }]);

      return EventThumbnailComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EventThumbnailComponent.prototype, "event", void 0);
    EventThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'event-thumbnail',
      template: "\n    <div [routerLink]=\"['/events', event.id]\" class=\"well hoverwell thumbnail\">\n    <h2>{{event?.name | uppercase }}</h2>\n    <div>Date: {{event?.date | date: 'shortDate'}}</div>\n    <div [ngStyle]=\"getStartTimeStyle()\" [ngSwitch]=\"event?.time\">\n    Time: {{event?.time}}\n    <span *ngSwitchCase=\"'8:00 am'\">(Early Start)</span>\n        <span *ngSwitchCase=\"'10:00 am'\">(Late Start)</span>\n        <span *ngSwitchDefault>(Normal Start)</span>\n    </div>\n    <div>Price: {{event?.price | currency: 'USD'}}</div>\n    <div *ngIf=\"!event?.location\">\n    <span>Location: {{event?.location?.address}}</span>\n    <span>&nbsp;</span>\n    <span class=\"pad-left\">Location: {{event?.location?.city}}</span>\n    </div>\n\n    </div>\n    ",
      styles: ["\n            .thumbnail {min-height: 210px;}\n            .pad-left {margin-left: 10px;}\n        "]
    })], EventThumbnailComponent);
    /***/
  },

  /***/
  "./src/app/events/events-list-resolver.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/events/events-list-resolver.service.ts ***!
    \********************************************************/

  /*! exports provided: EventListResolver */

  /***/
  function srcAppEventsEventsListResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventListResolver", function () {
      return EventListResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/event.service */
    "./src/app/events/shared/event.service.ts");

    var EventListResolver =
    /*#__PURE__*/
    function () {
      function EventListResolver(eventService) {
        _classCallCheck(this, EventListResolver);

        this.eventService = eventService;
      }

      _createClass(EventListResolver, [{
        key: "resolve",
        value: function resolve() {
          return this.eventService.getEvents();
        }
      }]);

      return EventListResolver;
    }();

    EventListResolver.ctorParameters = function () {
      return [{
        type: _shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }];
    };

    EventListResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EventListResolver);
    /***/
  },

  /***/
  "./src/app/events/events-list.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/events/events-list.component.ts ***!
    \*************************************************/

  /*! exports provided: EventListComponent */

  /***/
  function srcAppEventsEventsListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventListComponent", function () {
      return EventListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared/event.service */
    "./src/app/events/shared/event.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EventListComponent =
    /*#__PURE__*/
    function () {
      function EventListComponent(eventService, route) {
        _classCallCheck(this, EventListComponent);

        this.eventService = eventService;
        this.route = route;
      }

      _createClass(EventListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.events = this.route.snapshot.data['events'];
        }
      }]);

      return EventListComponent;
    }();

    EventListComponent.ctorParameters = function () {
      return [{
        type: _shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    EventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: "\n    <div>\n    <h1>Upcoming Angular Events</h1>\n    <hr/>\n        <div class=\"row\">\n        <div *ngFor=\"let event of events\" class=\"col-md-5\">\n        <event-thumbnail\n        [event]=\"event\"></event-thumbnail>\n        </div>\n    </div>\n        </div>\n    "
    })], EventListComponent);
    /***/
  },

  /***/
  "./src/app/events/index.ts":
  /*!*********************************!*\
    !*** ./src/app/events/index.ts ***!
    \*********************************/

  /*! exports provided: CreateEventComponent, EventThumbnailComponent, EventListResolver, EventListComponent, EventService, EventResolver, LocationValidator, restrictedWords, DurationPipe, EventDetailsComponent, CreateSessionComponent, SessionListComponent, UpvoteComponent, VoterService */

  /***/
  function srcAppEventsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _create_event_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./create-event.component */
    "./src/app/events/create-event.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function () {
      return _create_event_component__WEBPACK_IMPORTED_MODULE_1__["CreateEventComponent"];
    });
    /* harmony import */


    var _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./event-thumbnail.component */
    "./src/app/events/event-thumbnail.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventThumbnailComponent", function () {
      return _event_thumbnail_component__WEBPACK_IMPORTED_MODULE_2__["EventThumbnailComponent"];
    });
    /* harmony import */


    var _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events-list-resolver.service */
    "./src/app/events/events-list-resolver.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventListResolver", function () {
      return _events_list_resolver_service__WEBPACK_IMPORTED_MODULE_3__["EventListResolver"];
    });
    /* harmony import */


    var _events_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./events-list.component */
    "./src/app/events/events-list.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventListComponent", function () {
      return _events_list_component__WEBPACK_IMPORTED_MODULE_4__["EventListComponent"];
    });
    /* harmony import */


    var _shared_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/index */
    "./src/app/events/shared/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return _shared_index__WEBPACK_IMPORTED_MODULE_5__["EventService"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventResolver", function () {
      return _shared_index__WEBPACK_IMPORTED_MODULE_5__["EventResolver"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "restrictedWords", function () {
      return _shared_index__WEBPACK_IMPORTED_MODULE_5__["restrictedWords"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DurationPipe", function () {
      return _shared_index__WEBPACK_IMPORTED_MODULE_5__["DurationPipe"];
    });
    /* harmony import */


    var _event_details_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./event-details/index */
    "./src/app/events/event-details/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function () {
      return _event_details_index__WEBPACK_IMPORTED_MODULE_6__["EventDetailsComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CreateSessionComponent", function () {
      return _event_details_index__WEBPACK_IMPORTED_MODULE_6__["CreateSessionComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SessionListComponent", function () {
      return _event_details_index__WEBPACK_IMPORTED_MODULE_6__["SessionListComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UpvoteComponent", function () {
      return _event_details_index__WEBPACK_IMPORTED_MODULE_6__["UpvoteComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "VoterService", function () {
      return _event_details_index__WEBPACK_IMPORTED_MODULE_6__["VoterService"];
    });
    /* harmony import */


    var _location_validator_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./location-validator.directive */
    "./src/app/events/location-validator.directive.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LocationValidator", function () {
      return _location_validator_directive__WEBPACK_IMPORTED_MODULE_7__["LocationValidator"];
    });
    /***/

  },

  /***/
  "./src/app/events/location-validator.directive.ts":
  /*!********************************************************!*\
    !*** ./src/app/events/location-validator.directive.ts ***!
    \********************************************************/

  /*! exports provided: LocationValidator */

  /***/
  function srcAppEventsLocationValidatorDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LocationValidator", function () {
      return LocationValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var LocationValidator_1;

    var LocationValidator = LocationValidator_1 =
    /*#__PURE__*/
    function () {
      function LocationValidator() {
        _classCallCheck(this, LocationValidator);
      }

      _createClass(LocationValidator, [{
        key: "validate",
        value: function validate(formGroup) {
          var addressControl = formGroup.controls.address;
          var cityControl = formGroup.controls.city;
          var countryControl = formGroup.controls.country;
          var onlineUrlControl = formGroup.root.controls.onlineUrl;

          if (addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value || onlineUrlControl && onlineUrlControl.value) {
            return null;
          } else {
            return {
              validateLocation: false
            };
          }
        }
      }]);

      return LocationValidator;
    }();

    LocationValidator = LocationValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[validateLocation]',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: LocationValidator_1,
        multi: true
      }]
    })], LocationValidator);
    /***/
  },

  /***/
  "./src/app/events/shared/duration.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/events/shared/duration.pipe.ts ***!
    \************************************************/

  /*! exports provided: DurationPipe */

  /***/
  function srcAppEventsSharedDurationPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DurationPipe", function () {
      return DurationPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DurationPipe =
    /*#__PURE__*/
    function () {
      function DurationPipe() {
        _classCallCheck(this, DurationPipe);
      }

      _createClass(DurationPipe, [{
        key: "transform",
        value: function transform(value) {
          switch (value) {
            case 1:
              return 'Half Hour';

            case 2:
              return 'One Hour';

            case 3:
              return 'Half Day';

            case 4:
              return 'Full Day';

            default:
              return value.toString();
          }
        }
      }]);

      return DurationPipe;
    }();

    DurationPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'duration'
    })], DurationPipe);
    /***/
  },

  /***/
  "./src/app/events/shared/event-resolver.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/events/shared/event-resolver.service.ts ***!
    \*********************************************************/

  /*! exports provided: EventResolver */

  /***/
  function srcAppEventsSharedEventResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventResolver", function () {
      return EventResolver;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./event.service */
    "./src/app/events/shared/event.service.ts");

    var EventResolver =
    /*#__PURE__*/
    function () {
      function EventResolver(eventService) {
        _classCallCheck(this, EventResolver);

        this.eventService = eventService;
      }

      _createClass(EventResolver, [{
        key: "resolve",
        value: function resolve(route) {
          return this.eventService.getEvent(route.params['id']);
        }
      }]);

      return EventResolver;
    }();

    EventResolver.ctorParameters = function () {
      return [{
        type: _event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
      }];
    };

    EventResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], EventResolver);
    /***/
  },

  /***/
  "./src/app/events/shared/event.service.ts":
  /*!************************************************!*\
    !*** ./src/app/events/shared/event.service.ts ***!
    \************************************************/

  /*! exports provided: EventService */

  /***/
  function srcAppEventsSharedEventServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return EventService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var EventService =
    /*#__PURE__*/
    function () {
      function EventService(http, window) {
        _classCallCheck(this, EventService);

        this.http = http;
        this.window = window;
        this.port = this.window.location.port ? ":" + this.window.location.port : "";
        this.baseUrl = "".concat(this.window.location.protocol, "//").concat(this.window.location.hostname).concat(this.port);
        this.eventsUrl = this.baseUrl + "/api/events/";
      }

      _createClass(EventService, [{
        key: "getEvents",
        value: function getEvents() {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.get('/api/events', options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getEvents", [])));
        }
      }, {
        key: "getEvent",
        value: function getEvent(id) {
          return this.http.get("/api/events/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getEvent")));
        }
      }, {
        key: "saveEvent",
        value: function saveEvent(event) {
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              "Content-Type": "application/json"
            })
          };
          return this.http.put("/api/events", event, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getEvent")));
        }
      }, {
        key: "searchSessions",
        value: function searchSessions(searchTerm) {
          return this.http.get("api/sessions/search?search=" + searchTerm).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("searchSessions")));
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "operation";
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
          };
        }
      }]);

      return EventService;
    }();

    EventService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: Window,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: ["Window"]
        }]
      }];
    };

    EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])("Window"))], EventService);
    /***/
  },

  /***/
  "./src/app/events/shared/index.ts":
  /*!****************************************!*\
    !*** ./src/app/events/shared/index.ts ***!
    \****************************************/

  /*! exports provided: EventService, EventResolver, restrictedWords, DurationPipe */

  /***/
  function srcAppEventsSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./event.service */
    "./src/app/events/shared/event.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventService", function () {
      return _event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"];
    });
    /* harmony import */


    var _restricted_words_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./restricted-words.validator */
    "./src/app/events/shared/restricted-words.validator.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "restrictedWords", function () {
      return _restricted_words_validator__WEBPACK_IMPORTED_MODULE_2__["restrictedWords"];
    });
    /* harmony import */


    var _duration_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./duration.pipe */
    "./src/app/events/shared/duration.pipe.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DurationPipe", function () {
      return _duration_pipe__WEBPACK_IMPORTED_MODULE_3__["DurationPipe"];
    });
    /* harmony import */


    var _event_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./event-resolver.service */
    "./src/app/events/shared/event-resolver.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "EventResolver", function () {
      return _event_resolver_service__WEBPACK_IMPORTED_MODULE_4__["EventResolver"];
    });
    /***/

  },

  /***/
  "./src/app/events/shared/restricted-words.validator.ts":
  /*!*************************************************************!*\
    !*** ./src/app/events/shared/restricted-words.validator.ts ***!
    \*************************************************************/

  /*! exports provided: restrictedWords */

  /***/
  function srcAppEventsSharedRestrictedWordsValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "restrictedWords", function () {
      return restrictedWords;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function restrictedWords(words) {
      return function (control) {
        if (!words) {
          return null;
        }

        var invalidWords = words.map(function (w) {
          return control.value.includes(w) ? w : null;
        }).filter(function (w) {
          return w != null;
        });
        return invalidWords && invalidWords.length > 0 ? {
          restrictedWords: invalidWords.join(', ')
        } : null;
      };
    }
    /***/

  },

  /***/
  "./src/app/nav/navbar.component.ts":
  /*!*****************************************!*\
    !*** ./src/app/nav/navbar.component.ts ***!
    \*****************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user/auth.service */
    "./src/app/user/auth.service.ts");
    /* harmony import */


    var _events_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../events/index */
    "./src/app/events/index.ts");

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent(auth, eventService) {
        _classCallCheck(this, NavBarComponent);

        this.auth = auth;
        this.eventService = eventService;
        this.searchTerm = '';
      }

      _createClass(NavBarComponent, [{
        key: "searchSessions",
        value: function searchSessions(searchTerm) {
          var _this6 = this;

          this.eventService.searchSessions(searchTerm).subscribe(function (sessions) {
            _this6.foundSessions = sessions;
          });
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ctorParameters = function () {
      return [{
        type: _user_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _events_index__WEBPACK_IMPORTED_MODULE_3__["EventService"]
      }];
    };

    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'nav-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/navbar.component.html")).default,
      styles: ["\n        .nav.navbar-nav {font-size: 15px;}\n        #searchForm {margin-right: 100px}\n        @media (max-width: 1200px) {#searchForm {display:none}}\n        li > a.active {color: #F97924;}\n    "]
    })], NavBarComponent);
    /***/
  },

  /***/
  "./src/app/routes.ts":
  /*!***************************!*\
    !*** ./src/app/routes.ts ***!
    \***************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _events_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./events/index */
    "./src/app/events/index.ts");
    /* harmony import */


    var _errors_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./errors/404.component */
    "./src/app/errors/404.component.ts");

    var appRoutes = [{
      path: 'events/new',
      component: _events_index__WEBPACK_IMPORTED_MODULE_1__["CreateEventComponent"],
      canDeactivate: ['canDeactivateCreateEvent']
    }, {
      path: 'events',
      component: _events_index__WEBPACK_IMPORTED_MODULE_1__["EventListComponent"],
      resolve: {
        events: _events_index__WEBPACK_IMPORTED_MODULE_1__["EventListResolver"]
      }
    }, {
      path: 'events/:id',
      component: _events_index__WEBPACK_IMPORTED_MODULE_1__["EventDetailsComponent"],
      resolve: {
        event: _events_index__WEBPACK_IMPORTED_MODULE_1__["EventResolver"]
      }
    }, {
      path: 'events/new',
      component: _events_index__WEBPACK_IMPORTED_MODULE_1__["CreateSessionComponent"]
    }, {
      path: '404',
      component: _errors_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"]
    }, {
      path: '',
      redirectTo: '/events',
      pathMatch: 'full'
    }, {
      path: 'user',
      loadChildren: './user/user.module#UserModule'
    }];
    /***/
  },

  /***/
  "./src/app/user/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppUserAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
      }

      _createClass(AuthService, [{
        key: "loginUser",
        value: function loginUser(userName, password) {
          var _this7 = this;

          var loginInfo = {
            username: userName,
            password: password
          };
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('/api/login', loginInfo, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this7.currentUser = data['user'];
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
          }));
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return !!this.currentUser;
        }
      }, {
        key: "checkAuthenticationStatus",
        value: function checkAuthenticationStatus() {
          var _this8 = this;

          this.http.get('/api/currentIdentity').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            if (data instanceof Object) {
              _this8.currentUser = data;
            }
          })).subscribe();
        }
      }, {
        key: "updateCurrentUser",
        value: function updateCurrentUser(firstName, lastName) {
          this.currentUser.firstName = firstName;
          this.currentUser.lastName = lastName;
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.put("/api/users/".concat(this.currentUser.id), this.currentUser, options);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.currentUser = undefined;
          var options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
              'Content-Type': 'application/json'
            })
          };
          return this.http.post('/api/logout', {}, options);
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./polyfills */
    "./src/polyfills.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();

      if (window) {
        window.console.log = function () {};
      }
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/polyfills.ts":
  /*!**************************!*\
    !*** ./src/polyfills.ts ***!
    \**************************/

  /*! no exports provided */

  /***/
  function srcPolyfillsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! zone.js/dist/zone */
    "./node_modules/zone.js/dist/zone-evergreen.js");
    /* harmony import */


    var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * This file includes polyfills needed by Angular and is loaded before the app.
     * You can add your own extra polyfills to this file.
     *
     * This file is divided into 2 sections:
     *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
     *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
     *      file.
     *
     * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
     * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
     * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
     *
     * Learn more in https://angular.io/guide/browser-support
     */

    /***************************************************************************************************
     * BROWSER POLYFILLS
     */

    /** IE10 and IE11 requires the following for NgClass support on SVG elements */
    // import 'classlist.js';  // Run `npm install --save classlist.js`.

    /**
     * Web Animations `@angular/platform-browser/animations`
     * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
     * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
     */
    // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

    /**
     * By default, zone.js will patch all possible macroTask and DomEvents
     * user can disable parts of macroTask/DomEvents patch by setting following flags
     * because those flags need to be set before `zone.js` being loaded, and webpack
     * will put import in the top of bundle, so user need to create a separate file
     * in this directory (for example: zone-flags.ts), and put the following flags
     * into that file, and then add the following code before importing zone.js.
     * import './zone-flags.ts';
     *
     * The flags allowed in zone-flags.ts are listed here.
     *
     * The following flags will work for all browsers.
     *
     * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
     * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
     * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
     *
     *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
     *  with the following flag, it will bypass `zone.js` patch for IE/Edge
     *
     *  (window as any).__Zone_enable_cross_context_check = true;
     *
     */

    /***************************************************************************************************
     * Zone JS is required by default for Angular itself.
     */
    // Included with Angular CLI.

    /***************************************************************************************************
     * APPLICATION IMPORTS
     */

    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\projects\techvent\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map