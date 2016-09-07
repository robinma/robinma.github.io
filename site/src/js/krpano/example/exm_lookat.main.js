/**
 * @file 入口文件

 */

import {krpano} from '../krpano.config.js';
import KrpanoClass from '../krpano_class';


embedpano({swf: krpano.swfUrl, xml: krpano.xml, target: krpano.target, html5:"prefer", mobilescale:1.0, passQueryParameters:true, onready:krpanoReady});

var KrpanoObj;
function krpanoReady(kr) {
    KrpanoObj = new KrpanoClass(kr);
    renderInfo();
}


function renderInfo() {
    var panoInfo = '';
    setInterval(() => {
         console.log(KrpanoObj.getLookAt());
    }, 3000);
}
