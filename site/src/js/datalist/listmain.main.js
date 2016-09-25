/**
 * @file 瀑布流
 */

let dataList = $('.j-datalist');
let dataItem = $('#tpl_imgItem').html();

let ItemWidth = 260;

let getImgWH = function(width, height) {
    let precent = width/ItemWidth;
    let imgHeight = height * precent;
    return {w: width, h: imgHeight};
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
    waitImage:true,
    debug: true,
    maxPage: 5,
    path: function(page) {
        console.log(page);
        return '../static/data/datalist.json';
    },
    callbacks: {
        loadingStart: function() {
            console.log('loadingStart ', arguments);
        },
        loadingFinished: function() {
            console.log('loadingFinished ', arguments);
        },
        loadingError: function() {
            console.log('loadingError ', arguments);
        },
        renderData: function(data, dataType) {

            console.log('data:', data);
            if (!data.result.length) {
                return;
            }
            var item;
            var itemHtml = [];
            for(var i = 0, l = data.result.length; i < l; i++) {
                item = data.result[i];
                let imgWH = getImgWH(item.img_width, item.img_height);
                item['imgWidth'] = item.w;
                item['imgHeight'] = item.h;
                itemHtml.push(dataItem.replace(/\{([^\{]*)\}/ig, function(a, b) {
                    return item[b] || '';
                }));
            }
            
            return itemHtml.join('');
        }
    }
});

