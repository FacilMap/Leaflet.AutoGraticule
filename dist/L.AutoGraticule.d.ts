import L, { LatLngBounds, LayerOptions, LeafletEventHandlerFnMap, PolylineOptions, Map } from 'leaflet';
import './L.AutoGraticule.css';
export interface Options extends LayerOptions {
    redraw: keyof LeafletEventHandlerFnMap;
    /** Minimum distance between two lines in pixels */
    minDistance: number;
}
export default class AutoGraticule extends L.LayerGroup {
    options: Options;
    lineStyle: PolylineOptions;
    _bounds: LatLngBounds;
    constructor(options?: Options);
    onAdd(map: Map): this;
    onRemove(map: Map): this;
    redraw(): this;
    constructLines(): void;
    buildXLine(x: number): L.Polyline;
    buildYLine(y: number): L.Polyline;
    buildLabel(axis: 'gridlabel-horiz' | 'gridlabel-vert', val: number): L.Marker<any>;
}
declare module 'leaflet' {
    function autoGraticule(options?: Options): AutoGraticule;
    class AutoGraticule extends L.LayerGroup {
        constructor(options?: Options);
    }
}
