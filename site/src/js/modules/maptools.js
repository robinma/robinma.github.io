/**
 * @file map tools
 */

class MapTool {
	constructor(map) {
		this.map = map;
	}

	getViewport(points) {
		return this.map.getViewport(points);
	}

	getGeoLocation(fn) {
		let map = this.map;
		let geolocation = new BMap.Geolocation();
		geolocation.getCurrentPosition(function(r) {
			if (this.getStatus() === BMAP_STATUS_SUCCESS) {
				fn && fn(r.point);
			} else {
				fn && fn(new BMap.Point(105.780405, 36.285061));
			}
		});
	}

	setMapCenterZoom(latlngArr) {
		var points = latlngArr.map((item, index) => {
			return new BMap.Point(item.lng, item.lat);
		});
		var vp = this.getViewport(points);
		this.map.centerAndZoom(vp.center, vp.zoom);
	}
	// 设置鼠标样式
	setMouseCursor(mousType) {
        let map = this.map;
        map.setDefaultCursor(mousType);
    }
	// 添加点标记
	addMarkerPoint(lnglat) {
		let map = this.map;
		let point = new BMap.Point(lnglat.lng, lnglat.lat);
		let marker = new BMap.Marker(point);
		map.addOverlay(marker);
		return marker;
	}
	// 移出覆盖物
	removeMarkerPoint(markerObj) {
		let map = this.map;
		map.removeOverlay(markerObj);
	}

};
export default MapTool;