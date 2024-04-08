import { OjWebElement } from '@oracle/oraclejet-webdriver/elements';
/**
 * This is the base class for oj-c-area-chart WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, AreaChartWebElement.ts.
 */
export declare class AreaChartWebElementBase extends OjWebElement {
    /**
     * Gets the value of <code>data</code> property.
     * Specifies the DataProvider for the sections and items of the area-chart.
     * @return The value of <code>data</code> property.
     *
     */
    getData(): Promise<null>;
    /**
     * Gets the value of <code>seriesComparator</code> property.
     * A comparator function that determines the ordering of the chart series when using a DataProvider. If undefined, the series will follow the order in which they are found in the data.
     * @return The value of <code>seriesComparator</code> property.
     *
     */
    getSeriesComparator(): Promise<null>;
    /**
     * Gets the value of <code>groupComparator</code> property.
     * A comparator function that determines the ordering of the chart groups when using a DataProvider. If undefined, the group will follow the order in which they are found in the data.
     * @return The value of <code>groupComparator</code> property.
     *
     */
    getGroupComparator(): Promise<null>;
    /**
     * Gets the value of <code>stack</code> property.
     * Defines whether the data items are stacked.
     * @return The value of <code>stack</code> property.
     *
     */
    getStack(): Promise<string>;
    /**
     * Gets the value of <code>drilling</code> property.
     * Whether drilling is enabled.
     * @return The value of <code>drilling</code> property.
     *
     */
    getDrilling(): Promise<string>;
    /**
     * Gets the value of <code>orientation</code> property.
     * The orientation of the chart.
     * @return The value of <code>orientation</code> property.
     *
     */
    getOrientation(): Promise<string>;
    /**
     * Gets the value of <code>yAxis</code> property.
     *
     * @return The value of <code>yAxis</code> property.
     *
     */
    getYAxis(): Promise<YAxis>;
    /**
     * Gets the value of <code>xAxis</code> property.
     *
     * @return The value of <code>xAxis</code> property.
     *
     */
    getXAxis(): Promise<XAxis>;
    /**
     * Gets the value of <code>plotArea</code> property.
     *
     * @return The value of <code>plotArea</code> property.
     *
     */
    getPlotArea(): Promise<PlotArea>;
    /**
     * Gets the value of <code>zoomAndScroll</code> property.
     *
     * @return The value of <code>zoomAndScroll</code> property.
     *
     */
    getZoomAndScroll(): Promise<string>;
    /**
     * Gets the value of <code>valueFormats</code> property.
     *
     * @return The value of <code>valueFormats</code> property.
     *
     */
    getValueFormats(): Promise<ValueFormats>;
    /**
     * Gets the value of <code>selectionMode</code> property.
     * Specifies the selection mode.
     * @return The value of <code>selectionMode</code> property.
     *
     */
    getSelectionMode(): Promise<string>;
    /**
     * Sets the value of <code>selection</code> property.
     * An array containing the ids of the initially selected data items.
     * @param selection The value to set for <code>selection</code>
     *
     */
    changeSelection(selection: Array<any>): Promise<void>;
    /**
     * Gets the value of <code>selection</code> property.
     * An array containing the ids of the initially selected data items.
     * @return The value of <code>selection</code> property.
     *
     */
    getSelection(): Promise<Array<any>>;
    /**
     * Sets the value of <code>hiddenCategories</code> property.
     *
     * @param hiddenCategories The value to set for <code>hiddenCategories</code>
     *
     */
    changeHiddenCategories(hiddenCategories: Array<string>): Promise<void>;
    /**
     * Gets the value of <code>hiddenCategories</code> property.
     *
     * @return The value of <code>hiddenCategories</code> property.
     *
     */
    getHiddenCategories(): Promise<Array<string>>;
    /**
     * Sets the value of <code>highlightedCategories</code> property.
     * An array of category string used for highlighting.
     * @param highlightedCategories The value to set for <code>highlightedCategories</code>
     *
     */
    changeHighlightedCategories(highlightedCategories: Array<string>): Promise<void>;
    /**
     * Gets the value of <code>highlightedCategories</code> property.
     * An array of category string used for highlighting.
     * @return The value of <code>highlightedCategories</code> property.
     *
     */
    getHighlightedCategories(): Promise<Array<string>>;
    /**
     * Gets the value of <code>hideAndShowBehavior</code> property.
     * Defines the hide and show behavior that is performed when clicking on a leegnd item.
     * @return The value of <code>hideAndShowBehavior</code> property.
     *
     */
    getHideAndShowBehavior(): Promise<string>;
    /**
     * Gets the value of <code>hoverBehavior</code> property.
     * Defines the behavior applied when hovering over data items.
     * @return The value of <code>hoverBehavior</code> property.
     *
     */
    getHoverBehavior(): Promise<string>;
    /**
     * Gets the value of <code>highlightMatch</code> property.
     * The matching condition for the highlighted property.
     * @return The value of <code>highlightMatch</code> property.
     *
     */
    getHighlightMatch(): Promise<string>;
    /**
     * Gets the value of <code>legend</code> property.
     * An object defining the style, positioning, and behavior of the legend.
     * @return The value of <code>legend</code> property.
     *
     */
    getLegend(): Promise<Legend>;
}
export interface YAxis {
    /**
     *
     */
    majorTick: YAxisMajorTick;
    /**
     *
     */
    minorTick: YAxisMinorTick;
}
export interface YAxisMajorTick {
    /**
     *
     */
    lineStyle: string;
    /**
     *
     */
    lineWidth: number;
    /**
     *
     */
    lineColor: string;
    /**
     *
     */
    rendered: string;
}
export interface YAxisMinorTick {
    /**
     *
     */
    lineStyle: string;
    /**
     *
     */
    lineWidth: number;
    /**
     *
     */
    lineColor: string;
    /**
     *
     */
    rendered: string;
}
export interface XAxis {
    /**
     *
     */
    majorTick: XAxisMajorTick;
}
export interface XAxisMajorTick {
    /**
     *
     */
    lineStyle: string;
    /**
     *
     */
    lineWidth: number;
    /**
     *
     */
    lineColor: string;
    /**
     *
     */
    rendered: string;
}
export interface PlotArea {
    /**
     *
     */
    backgroundColor: string;
}
export interface ValueFormats {
    /**
     *
     */
    group: ValueFormatsGroup;
    /**
     *
     */
    series: ValueFormatsSeries;
    /**
     *
     */
    value: ValueFormatsValue;
}
export interface ValueFormatsGroup {
    /**
     *
     */
    tooltipLabel: string;
    /**
     *
     */
    tooltipDisplay: string;
}
export interface ValueFormatsSeries {
    /**
     *
     */
    tooltipLabel: string;
    /**
     *
     */
    tooltipDisplay: string;
}
export interface ValueFormatsValue {
    /**
     *
     */
    converter: any;
    /**
     *
     */
    tooltipLabel: string;
    /**
     *
     */
    tooltipDisplay: string;
}
export interface Legend {
    /**
     *
     */
    position: string;
    /**
     *
     */
    rendered: string;
    /**
     *
     */
    maxSize: number | string;
    /**
     *
     */
    size: number | string;
    /**
     *
     */
    symbolHeight: number;
    /**
     *
     */
    symbolWidth: number;
}
