module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1Li1":
/***/ (function(module, exports) {

// Exports
module.exports = {};


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("HBdU");


/***/ }),

/***/ "HBdU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/styles/addProject.module.scss
var addProject_module = __webpack_require__("1Li1");
var addProject_module_default = /*#__PURE__*/__webpack_require__.n(addProject_module);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "cookie"
var external_cookie_ = __webpack_require__("rlPI");
var external_cookie_default = /*#__PURE__*/__webpack_require__.n(external_cookie_);

// CONCATENATED MODULE: ./components/Auth.js
var __jsx = external_react_default.a.createElement;



function withAuthServerSideProps(getServerSidePropsFunc) {
  return async context => {
    const user = await getUser(context);

    if (getServerSidePropsFunc) {
      return {
        props: {
          user,
          data: await getServerSidePropsFunc(context, user)
        }
      };
    }

    return {
      props: {
        user,
        data: {
          props: {
            user
          }
        }
      }
    };
  };
}

async function getUser(context) {
  const {
    accessToken = ""
  } = external_cookie_default.a.parse(context.req.headers.cookie || ""); //   IF not authorized , redirect to login

  if (!accessToken) {
    context.res.writeHead(302, {
      Location: "/login"
    });
    context.res.end();
  }

  return {
    accessToken
  };
} // withAuthComponent.js


function withAuthComponent(Component) {
  return ({
    user,
    data
  }) => {
    if (!user) {
      router_default.a.push("/login");
    }

    return __jsx(Component, data.props);
  };
}
// CONCATENATED MODULE: ./pages/projects/add/index.js
var add_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const AddProject = () => {
  const {
    0: form,
    1: setForm
  } = Object(external_react_["useState"])({
    name: "",
    url: "",
    img: "",
    tags: "",
    code: ""
  });

  const handleChange = e => {
    const name = e.target.name;
    setForm(_objectSpread(_objectSpread({}, form), {}, {
      [name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const data = _objectSpread(_objectSpread({}, form), {}, {
      tags: JSON.stringify(form.tags.split(" "))
    });

    const response = await external_axios_default.a.post("/api/projects/add", {
      data
    });
    if (response.data.success) router_default.a.push("/projects");
  };

  return add_jsx("main", {
    className: addProject_module_default.a.addProject
  }, add_jsx("div", {
    className: "container py-2 pt-5"
  }, add_jsx("h1", {
    className: "display-3 text-primary text-center mt-5 mb-5",
    "data-aos": "fade-down"
  }, "Add Project"), add_jsx("form", {
    className: "row mt-5 mb-5",
    onSubmit: handleSubmit
  }, add_jsx("h2", {
    className: "text-primary col-lg-12 mt-5",
    "data-aos": "fade-right"
  }, "Details Of The Project"), add_jsx("div", {
    className: "form-group mb-5 col-lg-6",
    "data-aos": "fade-right"
  }, add_jsx("label", {
    className: "text-white"
  }, "Project Title"), add_jsx("input", {
    value: form.name,
    type: "text",
    className: "form-control",
    placeholder: "eg.Steam Store",
    name: "name",
    onChange: handleChange
  })), add_jsx("div", {
    className: "form-group mb-5 col-lg-6",
    "data-aos": "fade-right"
  }, add_jsx("label", {
    className: "text-white"
  }, "Project Link"), add_jsx("input", {
    value: form.url,
    type: "text",
    className: "form-control",
    placeholder: "eg.store.steampowerd.com",
    name: "url",
    onChange: handleChange
  })), add_jsx("div", {
    className: "form-group mb-5 col-lg-6",
    "data-aos": "fade-right"
  }, add_jsx("label", {
    className: "text-white"
  }, "Project Link Code"), add_jsx("input", {
    value: form.code,
    type: "text",
    className: "form-control",
    placeholder: "eg.github.io/steam-project",
    name: "code",
    onChange: handleChange
  })), add_jsx("div", {
    className: "form-group mb-5 col-lg-6",
    "data-aos": "fade-right",
    "data-aos-offset": "0"
  }, add_jsx("label", {
    className: "text-white"
  }, "Project Image Link"), add_jsx("input", {
    value: form.img,
    type: "text",
    className: "form-control",
    placeholder: "eg.drive.google.com/image.jpg",
    name: "img",
    onChange: handleChange,
    required: true
  })), add_jsx("div", {
    className: "form-group mb-5 col-lg-6",
    "data-aos": "fade-right",
    "data-aos-offset": "0"
  }, add_jsx("label", {
    className: "text-white"
  }, "Project Tags"), add_jsx("input", {
    value: form.tags,
    type: "text",
    className: "form-control",
    placeholder: "Enter space seperated tags : 'React Node-js'",
    name: "tags",
    onChange: handleChange
  })), add_jsx("div", {
    className: "col-12 d-flex px-2"
  }, add_jsx("button", {
    type: "submit",
    className: "btn btn-lg btn-primary",
    "data-aos": "flip-right",
    "data-aos-offset": "0"
  }, "Submit Project")))));
};

const getServerSideProps = withAuthServerSideProps();
/* harmony default export */ var add = __webpack_exports__["default"] = (withAuthComponent(AddProject));

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "rlPI":
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });