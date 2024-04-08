import { ListViewWebElementBase } from './ListViewWebElementBase';
import { SlotProxy } from '@oracle/oraclejet-webdriver';
/**
 * The component WebElement for [oj-c-list-view](../../../oj-c/docs/oj.ListView.html).
 * Do not instantiate this class directly, instead, use
 * [findListView](../functions/findListView.html).
 */
export declare class ListViewWebElement extends ListViewWebElementBase {
    /**
     * Sets the value of "selected" property.
     * Specifies the current selected items in the listview. See the Help documentation for more information.
     * @param selected The value to set for "selected"
     * @override
     * @typeparam K Type of keys
     */
    changeSelected<K>(selected: Array<K>): Promise<void>;
    /**
     * Gets the value of "selected" property.
     * Retrieves the current selected items in the listview. See the Help documentation for more information.
     * @override
     * @typeparam K Type of keys
     * @return The value of "selected" property.
     */
    getSelected<K>(): Promise<Array<K>>;
    /**
     * Retrieve a SlotProxy which represents a single listview item.
     * @param key The key within the Collection's dataset associated with the item.
     */
    findItem<T>(itemLocator: {
        key: T;
    }): Promise<SlotProxy>;
}
