import L, { LatLngBounds, LayerOptions, LeafletEventHandlerFnMap, PolylineOptions, Map } from 'leaflet';
import './L.AutoGraticule.css';
export interface AutoGraticuleOptions extends LayerOptions {
    redraw: keyof LeafletEventHandlerFnMap;
    /** Minimum distance between two lines in pixels */
    minDistance: number;
}
export default class AutoGraticule extends L.LayerGroup {
    options: AutoGraticuleOptions;
    lineStyle: PolylineOptions;
    _bounds: LatLngBounds;
    constructor(options?: Partial<AutoGraticuleOptions>);
    onAdd(map: Map): this;
    onRemove(map: Map): this;
    redraw(): this;
    constructLines(): void;
    buildXLine(x: number): L.Polyline;
    buildYLine(y: number): L.Polyline;
    buildLabel(axis: 'gridlabel-horiz' | 'gridlabel-vert', val: number): L.Marker<any>;
}
declare module 'leaflet' {
    function autoGraticule(options?: Partial<AutoGraticuleOptions>): AutoGraticule;
    class AutoGraticule extends L.LayerGroup {
        constructor(options?: Partial<AutoGraticuleOptions>);
    }
}
