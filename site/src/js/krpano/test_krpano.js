/**
 * @file 测 试krpano方法
 */

import {krpano as krconfig} from './krpano.config.js';
import Krpano from './krpano_class';



class Test extends Krpano{
    constructor() {
        super(krconfig.target);
        this.traceFov();
    }

    traceFov() {
        let krpano = this.krpano;
        console.log('test trace fov.');
        setInterval(() => {
            // 
            var fov = Number(krpano.get('view.fov'));
            console.log(fov);
        }, 500);
    }
}

export default Test;