(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @file krpano配置参数
 */

var krpano = {
    swfUrl: '/static/vtour/tour.swf',
    id: 'HV_panorId',
    target: 'HV_panorId',
    xml: '/static/vtour/tour.xml'

};

/**
 * @file krpano method
 */

var krpano$1 = function () {
    function krpano$1(idTarget) {
        _classCallCheck(this, krpano$1);

        if (typeof idTarget === 'string') {
            this.getKrpanoTarget(idTarget);
        } else {
            this.krpano = idTarget;
        }
    }

    _createClass(krpano$1, [{
        key: 'getKrpanoTarget',
        value: function getKrpanoTarget(target) {
            this.krpano = document.getElementById(target);
        }

        /**
         * 获取fov
         * 
         */

    }, {
        key: 'getLookAt',
        value: function getLookAt() {
            var krpano = this.krpano;
            var info = {};
            function getLookAkInfo() {
                var mouse_at_x = krpano.get('mouse.x');
                var mouse_at_y = krpano.get('mouse.y');
                var mouse_at_h = krpano.get('mouseath');
                var mouse_at_v = krpano.get('mouseatv');
                var fov = krpano.get('view.fov');
                var info = { mouse_x: mouse_at_x, mouse_y: mouse_at_y, mouse_ath: mouse_at_h, mouse_atv: mouse_at_v, fov: fov };

                return info;
            }

            if (krpano && krpano.get) {
                var stp = krpano.call("screentosphere(mouse.x, mouse.y, mouseath, mouseatv);");
                info = getLookAkInfo();
            }
            return info;
        }
    }, {
        key: 'screentosphere',
        value: function screentosphere() {
            var krpano = this.krpano;
        }
    }]);

    return krpano$1;
}();

embedpano({ swf: krpano.swfUrl, xml: krpano.xml, target: krpano.target, html5: "prefer", mobilescale: 1.0, passQueryParameters: true, onready: krpanoReady });

var KrpanoObj;
function krpanoReady(kr) {
    KrpanoObj = new krpano$1(kr);
    renderInfo();
}

function renderInfo() {
    var panoInfo = '';
    setInterval(function () {
        console.log(KrpanoObj.getLookAt());
    }, 3000);
}

},{}]},{},[1]);
