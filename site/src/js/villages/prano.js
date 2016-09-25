import KrpanoClass from '../krpano/krpano_class';

const krpano = {
    swfUrl: '../static/vtour/tour.swf',
    id: 'HV_panorId',
    target: 'HV_panorId',
    xml: '../static/vtour/tour.xml',
    
};

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

new MainInit();