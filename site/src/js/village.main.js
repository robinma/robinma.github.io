/**
 * @file 村庄详细
 */
import Map from './modules/mapinit';
import mapStyle from './config/mapstyle';

import abc from './villages/prano';

// map init

function getMapDom () {
	var warp = document.getElementById('mainWarp');
	let mapObj = new Map(warp);
	mapObj.setMapStyle(mapStyle);
	mapObj.mapReset([120.898923,31.988032], 12);
	return mapObj;
}

var mapObj = getMapDom();