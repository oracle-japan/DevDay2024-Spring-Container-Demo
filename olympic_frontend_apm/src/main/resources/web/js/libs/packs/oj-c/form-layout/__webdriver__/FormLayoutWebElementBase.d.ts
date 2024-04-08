import { OjWebElement } from '@oracle/oraclejet-webdriver/elements';
/**
 * This is the base class for oj-c-form-layout WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, FormLayoutWebElement.ts.
 */
export declare class FormLayoutWebElementBase extends OjWebElement {
    /**
     * Gets the value of <code>columns</code> property.
     * Specifies how many columns should be displayed (fixed). If positive, overrides maxColumns.
     * @return The value of <code>columns</code> property.
     *
     */
    getColumns(): Promise<number>;
    /**
     * Gets the value of <code>columnSpan</code> property.
     * Specifies how many columns this component should span when this it is a child of a form layout.
     * @return The value of <code>columnSpan</code> property.
     *
     */
    getColumnSpan(): Promise<number>;
    /**
     * Gets the value of <code>direction</code> property.
     * Specifies the layout direction of the form layout children.
     * @return The value of <code>direction</code> property.
     *
     */
    getDirection(): Promise<string>;
    /**
     * Gets the value of <code>fullWidth</code> property.
     * Indicates if the form layout will use 100% of the container's width.
     * @return The value of <code>fullWidth</code> property.
     *
     */
    getFullWidth(): Promise<boolean>;
    /**
     * Gets the value of <code>labelEdge</code> property.
     * Specifies how the child form components should position their labels.
     * @return The value of <code>labelEdge</code> property.
     *
     */
    getLabelEdge(): Promise<string>;
    /**
     * Gets the value of <code>labelStartWidth</code> property.
     * The width of the label when labelEdge is 'start'.
     * @return The value of <code>labelStartWidth</code> property.
     *
     */
    getLabelStartWidth(): Promise<number | string>;
    /**
     * Gets the value of <code>labelWrapping</code> property.
     * Should the labels wrap or truncate when there is not enough available space.
     * @return The value of <code>labelWrapping</code> property.
     *
     */
    getLabelWrapping(): Promise<string>;
    /**
     * Gets the value of <code>maxColumns</code> property.
     * Specifies how many columns should be displayed (responsive). This prop is ignored if columns has a positive value.
     * @return The value of <code>maxColumns</code> property.
     *
     */
    getMaxColumns(): Promise<number>;
    /**
     * Gets the value of <code>readonly</code> property.
     * Whether the child components should be rendered as readonly.
     * @return The value of <code>readonly</code> property.
     *
     */
    getReadonly(): Promise<boolean>;
    /**
     * Gets the value of <code>userAssistanceDensity</code> property.
     * Specifies the density of the children form component's user assistance presentation.
     * @return The value of <code>userAssistanceDensity</code> property.
     *
     */
    getUserAssistanceDensity(): Promise<string>;
}
