import L, { LatLngBounds, LatLngExpression, LayerOptions, LeafletEventHandlerFnMap, PolylineOptions, Map } from 'leaflet';
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
    static round(number: number, digits: number): number;
    static niceRound(number: number, variableDistance: boolean): number;
    static bboxIntersect(bbox1: LatLngBounds | LatLngExpression[], bbox2: LatLngBounds | LatLngExpression[]): L.LatLngBounds;
}
