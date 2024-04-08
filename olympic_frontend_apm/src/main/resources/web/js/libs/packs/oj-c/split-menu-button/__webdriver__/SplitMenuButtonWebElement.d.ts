import { SplitMenuButtonWebElementBase } from './SplitMenuButtonWebElementBase';
/**
 * The component WebElement for [oj-c-split-menu-button](../../../oj-c/docs/oj.SplitMenuButton.html).
 * Do not instantiate this class directly, instead, use
 * [findSplitMenuButton](../functions/findSplitMenuButton.html).
 */
export declare class SplitMenuButtonWebElement extends SplitMenuButtonWebElementBase {
    /**
     * Perform a click on the button action
     */
    click(): Promise<void>;
    /**
     * Helper util
     * */
    findAsyncSequential<T>(array: T[], predicate: (t: T) => Promise<boolean>): Promise<T | undefined>;
    /**
     * Fire the ojMenuAction event on the oj-c-menu-button, and
     * invoke the Action handler of the selected value.
     *
     */
    doMenuAction(selectedValue: string | string[]): Promise<void>;
    /**
     * openMenu - opens the menu
     */
    private openMenu;
    /**
     * delay - delays the milliseconds
     * await delay(2000);
     */
    /**
     * In order to do nested selections, we need an isolated menu clicker
     */
    private doMenuClick;
}
