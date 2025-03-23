(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "axios"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("axios"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.axios);
    global.AnimalApi = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _axios) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _axios = _interopRequireDefault(_axios);
  function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
  const getCat = () => {
    return _axios.default.get('https://aws.random.cat/meow').then(response => {
      const imageSrc = response.data.file;
      const text = 'CAT';
      return {
        imageSrc,
        text
      };
    });
  };
  const getDog = () => {
    return _axios.default.get('https://random.dog/woof.json').then(response => {
      const imageSrc = response.data.url;
      const text = 'DOG';
      return {
        imageSrc,
        text
      };
    });
  };
  const getGoat = () => {
    return _axios.default.get('http://placegoat.com/200').then(response => {
      const imageSrc = response.data.url;
      const text = 'GOAT';
      return {
        imageSrc,
        text
      };
    });
  };
  var _default = _exports.default = {
    getCat,
    getDog,
    getGoat
  };
});