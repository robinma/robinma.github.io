/**
 * 地图模块
 */

export default class MapModule {
	constructor(mapref) {
		this.ref = mapref;
		this.initMap();
	}
	/**
	 * 初始化地图
	 * @return {[type]} [description]
	 */
	initMap() {
		let self = this;
        let map = self.map = new BMap.Map(this.ref, {enableMapClick: false});
        // map.setMinZoom(4);
        // map.setMaxZoom(12);
        // map.getContainer().style.background = '#02152a';
        // map.disableDragging();
        // map.disableDoubleClickZoom();
        map.disableScrollWheelZoom();
        map.disablePinchToZoom();
	}

	setMapStyle(style =[]) {
		let map = this.map;
		if (!style || style.length === 0) {
			return;
		}
		map.setMapStyle(style);
	}

	mapReset(poi=[118.804041, 32.063756], level=7) {
        let map = this.map;
        let center = new BMap.Point(poi[0], poi[1]);
        map.centerAndZoom(center, level);
        map.enableScrollWheelZoom(false);
    }

};