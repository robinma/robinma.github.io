(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * @file 瀑布流
 */

var dataList = $('.j-datalist');
var dataItem = $('#tpl_imgItem').html();

var ItemWidth = 260;

var getImgWH = function getImgWH(width, height) {
    var precent = width / ItemWidth;
    var imgHeight = height * precent;
    return { w: width, h: imgHeight };
};

dataList.waterfall({
    itemCls: 'datablock',
    prefix: 'waterfall',
    colWidth: 284,
    gutterWidth: 0,
    gutterHeight: 0,
    align: 'center',
    // bufferPixel: -50, 
    // containerStyle: {
    // 	position: 'relative'
    // },
    dataType: 'json',
    isFadeIn: true,
    resizable: true,
    checkImagesLoaded: false,
    waitImage: true,
    debug: true,
    maxPage: 5,
    path: function path(page) {
        console.log(page);
        return '../static/data/datalist.json';
    },
    callbacks: {
        loadingStart: function loadingStart() {
            console.log('loadingStart ', arguments);
        },
        loadingFinished: function loadingFinished() {
            console.log('loadingFinished ', arguments);
        },
        loadingError: function loadingError() {
            console.log('loadingError ', arguments);
        },
        renderData: function renderData(data, dataType) {

            console.log('data:', data);
            if (!data.result.length) {
                return;
            }
            var item;
            var itemHtml = [];
            for (var i = 0, l = data.result.length; i < l; i++) {
                item = data.result[i];
                var imgWH = getImgWH(item.img_width, item.img_height);
                item['imgWidth'] = item.w;
                item['imgHeight'] = item.h;
                itemHtml.push(dataItem.replace(/\{([^\{]*)\}/ig, function (a, b) {
                    return item[b] || '';
                }));
            }

            return itemHtml.join('');
        }
    }
});

},{}]},{},[1]);
