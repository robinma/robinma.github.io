(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 地图模块
 */

var MapModule = function () {
  function MapModule(mapref) {
    _classCallCheck(this, MapModule);

    this.ref = mapref;
    this.initMap();
  }
  /**
   * 初始化地图
   * @return {[type]} [description]
   */


  _createClass(MapModule, [{
    key: "initMap",
    value: function initMap() {
      var self = this;
      var map = self.map = new BMap.Map(this.ref, { enableMapClick: false });
      // map.setMinZoom(4);
      // map.setMaxZoom(12);
      // map.getContainer().style.background = '#02152a';
      // map.disableDragging();
      // map.disableDoubleClickZoom();
      map.disableScrollWheelZoom();
      map.disablePinchToZoom();
    }
  }, {
    key: "setMapStyle",
    value: function setMapStyle() {
      var style = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

      var map = this.map;
      if (!style || style.length === 0) {
        return;
      }
      map.setMapStyle(style);
    }
  }, {
    key: "mapReset",
    value: function mapReset() {
      var poi = arguments.length <= 0 || arguments[0] === undefined ? [118.804041, 32.063756] : arguments[0];
      var level = arguments.length <= 1 || arguments[1] === undefined ? 7 : arguments[1];

      var map = this.map;
      var center = new BMap.Point(poi[0], poi[1]);
      map.centerAndZoom(center, level);
      map.enableScrollWheelZoom(false);
    }
  }]);

  return MapModule;
}();

;

var mapStyle = {
  styleJson: [{
    "featureType": "all",
    "elementType": "all",
    "stylers": {
      "lightness": 10,
      "saturation": -100
    }
  }]
};

var krpano = {
  swfUrl: '../static/vtour/tour.swf',
  id: 'HV_panorId',
  target: 'HV_panorId',
  xml: '../static/vtour/tour.xml'

};

var MainInit = function () {
  function MainInit() {
    _classCallCheck(this, MainInit);

    this.init();
  }

  _createClass(MainInit, [{
    key: "init",
    value: function init() {
      var self = this;
      embedpano({ swf: krpano.swfUrl, xml: krpano.xml, target: krpano.target, html5: "prefer", mobilescale: 1.0, passQueryParameters: true, onready: self.krpanoReady });
    }
  }, {
    key: "krpanoReady",
    value: function krpanoReady(krpano) {

      krpano.call("trace(krpano is ready...)");
      console.log('---|||');
    }
  }]);

  return MainInit;
}();

new MainInit();

// map init

function getMapDom() {
  var warp = document.getElementById('mainWarp');
  var mapObj = new MapModule(warp);
  mapObj.setMapStyle(mapStyle);
  mapObj.mapReset([120.898923, 31.988032], 12);
  return mapObj;
}

var mapObj = getMapDom();

},{}]},{},[1]);
