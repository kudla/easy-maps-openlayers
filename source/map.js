import {EasyMap} from 'easy-maps';
import {Map, View, layer, source, proj} from 'openlayers';

export class OpenlayersMap extends EasyMap {
    mount(target) {
        this.map = new Map({
            layers: [
                new layer.Tile({
                    source: new source.OSM()
                })
            ],
            view: new View({
                center: proj.fromLonLat([2.183333, 41.383333]),
                zoom: 13
            }),
            target
        });
    }
}
