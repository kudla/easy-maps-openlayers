import {EasyView} from 'easy-maps';
import {proj} from 'openlayers';
import {isEqual} from 'lodash';

export class OpenlayersView extends EasyView {
    get view() {
        let {map: {map}} = this;
        return map.getView();
    }
    animate(props, transition, ) {
        let {view} = this;
        view.animate({
            ...props,
            duration: transition
        });

    }
    set zoom({value: zoom, transition}) {
        let {view} = this;
        if (zoom !== view.getZoom()) {
            if (transition) {
                this.animate({zoom}, transition);
            } else {
                view.setZoom(zoom);
            }
        }
    }
    set center({value, transition}) {
        let {view} = this;
        let center = proj.fromLonLat(value);
        if (!isEqual(center, view.getCenter())) {
            if (transition) {
                this.animate({center}, transition);
            } else {
                view.setCenter(center);
            }
        }
    }
    set rotation({value: rotation, transition}) {
        let {view} = this;
        if (rotation !== view.getRotation()) {
            if (transition) {
                this.animate({rotation}, transition);
            } else {
                view.setRotation(rotation);
            }
        }
    }
}
