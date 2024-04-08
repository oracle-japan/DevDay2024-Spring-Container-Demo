import { ListItemLayoutWebElementBase } from './ListItemLayoutWebElementBase';
/**
 * The component WebElement for [oj-c-list-item-layout](../../../oj-c/docs/oj.ListItemLayout.html).
 * Do not instantiate this class directly, instead, use
 * [findListItemLayout](../functions/findListItemLayout.html).
 */
export declare class ListItemLayoutWebElement extends ListItemLayoutWebElementBase {
    /**
     * Gets the value of <code>primary</code> property.
     * Returns primary text.
     * @return The value of <code>primary</code> property.
     *
     */
    getPrimary(): Promise<string>;
    /**
     * Gets the value of <code>secondary</code> property.
     * Returns secondary text.
     * @return The value of <code>secondary</code> property.
     *
     */
    getSecondary(): Promise<string>;
    /**
     * Gets the value of <code>tertiary</code> property.
     * Returns tertiary text.
     * @return The value of <code>tertiary</code> property.
     *
     */
    getTertiary(): Promise<string>;
    /**
     * Gets the value of <code>quaternary</code> property.
     * Returns quaternary text.
     * @return The value of <code>quaternary</code> property.
     *
     */
    getQuaternary(): Promise<string>;
    /**
     * Gets the value of <code>overline</code> property.
     * Returns overline text.
     * @return The value of <code>overline</code> property.
     *
     */
    getOverline(): Promise<string>;
}
