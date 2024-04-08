import { ButtonWebElementBase } from './ButtonWebElementBase';
/**
 * The component WebElement for [oj-c-button](../../../oj-c/docs/oj.Button.html).
 * Do not instantiate this class directly, instead, use
 * [findButton](../functions/findButton.html).
 */
export declare class ButtonWebElement extends ButtonWebElementBase {
    /**
     * Perform a click on the button
     */
    doAction(): Promise<void>;
    /**
     * Perform a click on the button
     */
    click(): Promise<void>;
}
