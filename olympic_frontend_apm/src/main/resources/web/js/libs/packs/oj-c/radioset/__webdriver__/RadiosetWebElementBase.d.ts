import { OjWebElement } from '@oracle/oraclejet-webdriver/elements';
/**
 * This is the base class for oj-c-radioset WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, RadiosetWebElement.ts.
 */
export declare class RadiosetWebElementBase extends OjWebElement {
    /**
     * Gets the value of <code>containerReadonly</code> property.
     * Specifies whether an ancestor container, like oj-c-form-layout, is readonly.
     * @return The value of <code>containerReadonly</code> property.
     *
     */
    getContainerReadonly(): Promise<boolean>;
    /**
     * Gets the value of <code>columnSpan</code> property.
     * Specifies how many columns this component should span.
     * @return The value of <code>columnSpan</code> property.
     *
     */
    getColumnSpan(): Promise<number>;
    /**
     * Gets the value of <code>direction</code> property.
     * Layout direction of the radioset radio elements.
     * @return The value of <code>direction</code> property.
     *
     */
    getDirection(): Promise<string>;
    /**
     * Gets the value of <code>disabled</code> property.
     * Specifies whether the component is disabled.
     * @return The value of <code>disabled</code> property.
     *
     */
    getDisabled(): Promise<boolean>;
    /**
     * Gets the value of <code>displayOptions</code> property.
     * Display options for auxiliary content that describes whether or not the auxiliary content should be displayed.
     * @return The value of <code>displayOptions</code> property.
     *
     */
    getDisplayOptions(): Promise<DisplayOptions>;
    /**
     * Gets the value of <code>help</code> property.
     * Form component help information.
     * @return The value of <code>help</code> property.
     *
     */
    getHelp(): Promise<Help>;
    /**
     * Gets the value of <code>helpHints</code> property.
     * The helpHints object contains a definition property, sourceText property, and a source property.
     * @return The value of <code>helpHints</code> property.
     *
     */
    getHelpHints(): Promise<HelpHints>;
    /**
     * Gets the value of <code>labelHint</code> property.
     * Represents a hint for rendering a label on the component.
     * @return The value of <code>labelHint</code> property.
     *
     */
    getLabelHint(): Promise<string>;
    /**
     * Gets the value of <code>labelEdge</code> property.
     * Specifies how the label is positioned for the component relative to the field.
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
     * Sets the value of <code>messagesCustom</code> property.
     * List of custom component messages
     * @param messagesCustom The value to set for <code>messagesCustom</code>
     *
     */
    changeMessagesCustom(messagesCustom: Array<MessagesCustom>): Promise<void>;
    /**
     * Gets the value of <code>messagesCustom</code> property.
     * List of custom component messages
     * @return The value of <code>messagesCustom</code> property.
     *
     */
    getMessagesCustom(): Promise<Array<MessagesCustom>>;
    /**
     * Gets the value of <code>options</code> property.
     * The data provided to the radioset that represents one or more radio items.
     * @return The value of <code>options</code> property.
     *
     */
    getOptions(): Promise<Array<object>>;
    /**
     * Gets the value of <code>valid</code> property.
     * Specifies how the valid state of the component
     * @return The value of <code>valid</code> property.
     *
     */
    getValid(): Promise<string>;
    /**
     * Gets the value of <code>readonly</code> property.
     * Whether the component is readonly or not.
     * @return The value of <code>readonly</code> property.
     *
     */
    getReadonly(): Promise<boolean>;
    /**
     * Gets the value of <code>required</code> property.
     * Specifies whether or not the component is required.
     * @return The value of <code>required</code> property.
     *
     */
    getRequired(): Promise<boolean>;
    /**
     * Gets the value of <code>requiredMessageDetail</code> property.
     * Overrides the default Required error message.
     * @return The value of <code>requiredMessageDetail</code> property.
     *
     */
    getRequiredMessageDetail(): Promise<string>;
    /**
     * Gets the value of <code>userAssistanceDensity</code> property.
     * Specifies the density of the form component's user assistance presentation.
     * @return The value of <code>userAssistanceDensity</code> property.
     *
     */
    getUserAssistanceDensity(): Promise<string>;
    /**
     * Sets the value of <code>value</code> property.
     * The value of the component.
     * @param value The value to set for <code>value</code>
     *
     */
    changeValue(value: any): Promise<void>;
    /**
     * Gets the value of <code>value</code> property.
     * The value of the component.
     * @return The value of <code>value</code> property.
     *
     */
    getValue(): Promise<any>;
}
export interface DisplayOptions {
    /**
     *
     */
    messages: string;
}
export interface Help {
    /**
     *
     */
    instruction: string;
}
export interface HelpHints {
    /**
     *
     */
    definition: string;
    /**
     *
     */
    source: string;
    /**
     *
     */
    sourceText: string;
}
export interface MessagesCustom {
    /**
     *
     */
    summary: string;
    /**
     *
     */
    detail: string;
    /**
     *
     */
    severity: string;
}
