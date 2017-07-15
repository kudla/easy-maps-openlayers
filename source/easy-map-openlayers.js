import {EasyMap} from 'easy-maps';
import {Map, View, layer, source, proj} from 'openlayers';

export class EasyMapOpenlayers extends EasyMap {
    static engineName = 'Openlayers';
    mount(target) {
        this.map = new Map({
            layers: [
                new layer.Tile({
                    source: new source.OSM()
                })
            ],
            view: new View({
                center: proj.fromLonLat([-0.09, 51.505]),
                zoom: 13
            }),
            target
        });
    }
}
