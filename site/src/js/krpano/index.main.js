/**
 * @file 入口文件

 */

import {krpano} from './krpano.config.js';
import Test from './test_krpano';

class MainInit {
    constructor() {
        this.init();
    }
    init() {
        let self = this;
        embedpano({swf: krpano.swfUrl, xml: krpano.xml, target: krpano.target, html5:"prefer", mobilescale:1.0, passQueryParameters:true, onready:self.krpanoReady});
    }

    krpanoReady(krpano) {

        krpano.call("trace(krpano is ready...)");
        console.log('---|||');
    }

}

export default MainInit;
