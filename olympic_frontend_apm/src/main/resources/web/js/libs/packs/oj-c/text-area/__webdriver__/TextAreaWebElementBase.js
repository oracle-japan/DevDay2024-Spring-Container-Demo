"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextAreaWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-text-area WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, TextAreaWebElement.ts.
 */
class TextAreaWebElementBase extends elements_1.OjWebElement {
    /**
     * Gets the value of <code>autocomplete</code> property.
     * Dictates component's autocomplete state
     * @return The value of <code>autocomplete</code> property.
     *
     */
    getAutocomplete() {
        return this.getProperty('autocomplete');
    }
    /**
     * Gets the value of <code>columnSpan</code> property.
     * Specifies how many columns this component should span.
     * @return The value of <code>columnSpan</code> property.
     *
     */
    getColumnSpan() {
        return this.getProperty('columnSpan');
    }
    /**
     * Gets the value of <code>containerReadonly</code> property.
     * Specifies whether an ancestor container, like oj-c-form-layout, is readonly.
     * @return The value of <code>containerReadonly</code> property.
     *
     */
    getContainerReadonly() {
        return this.getProperty('containerReadonly');
    }
    /**
     * Gets the value of <code>converter</code> property.
     * Specifies the converter instance.
     * @return The value of <code>converter</code> property.
     *
     */
    getConverter() {
        return this.getProperty('converter');
    }
    /**
     * Gets the value of <code>disabled</code> property.
     * Specifies whether the component is disabled.
     * @return The value of <code>disabled</code> property.
     *
     */
    getDisabled() {
        return this.getProperty('disabled');
    }
    /**
     * Gets the value of <code>displayOptions</code> property.
     * Display options for auxiliary content that determines whether or not it should be displayed.
     * @return The value of <code>displayOptions</code> property.
     *
     */
    getDisplayOptions() {
        return this.getProperty('displayOptions');
    }
    /**
     * Gets the value of <code>help</code> property.
     * Form component help information.
     * @return The value of <code>help</code> property.
     *
     */
    getHelp() {
        return this.getProperty('help');
    }
    /**
     * Gets the value of <code>helpHints</code> property.
     * The helpHints object contains a definition property and a source property.
     * @return The value of <code>helpHints</code> property.
     *
     */
    getHelpHints() {
        return this.getProperty('helpHints');
    }
    /**
     * Gets the value of <code>labelEdge</code> property.
     * Specifies how the label is positioned for the component
     * @return The value of <code>labelEdge</code> property.
     *
     */
    getLabelEdge() {
        return this.getProperty('labelEdge');
    }
    /**
     * Gets the value of <code>labelHint</code> property.
     * Represents a hint for rendering a label on the component.
     * @return The value of <code>labelHint</code> property.
     *
     */
    getLabelHint() {
        return this.getProperty('labelHint');
    }
    /**
     * Gets the value of <code>labelStartWidth</code> property.
     * The width of the label when labelEdge is 'start'.
     * @return The value of <code>labelStartWidth</code> property.
     *
     */
    getLabelStartWidth() {
        return this.getProperty('labelStartWidth');
    }
    /**
     * Gets the value of <code>labelWrapping</code> property.
     * Should the labels wrap or truncate when there is not enough available space.
     * @return The value of <code>labelWrapping</code> property.
     *
     */
    getLabelWrapping() {
        return this.getProperty('labelWrapping');
    }
    /**
     * Gets the value of <code>length</code> property.
     * Defines the length limit for the field
     * @return The value of <code>length</code> property.
     *
     */
    getLength() {
        return this.getProperty('length');
    }
    /**
     * Gets the value of <code>maxRows</code> property.
     * The maximum number of visible text lines of the textarea.
     * @return The value of <code>maxRows</code> property.
     *
     */
    getMaxRows() {
        return this.getProperty('maxRows');
    }
    /**
     * Sets the value of <code>messagesCustom</code> property.
     * List of custom component messages
     * @param messagesCustom The value to set for <code>messagesCustom</code>
     *
     */
    changeMessagesCustom(messagesCustom) {
        return this.setProperty('messagesCustom', messagesCustom);
    }
    /**
     * Gets the value of <code>messagesCustom</code> property.
     * List of custom component messages
     * @return The value of <code>messagesCustom</code> property.
     *
     */
    getMessagesCustom() {
        return this.getProperty('messagesCustom');
    }
    /**
     * Gets the value of <code>placeholder</code> property.
     * The placeholder text to set on the element.
     * @return The value of <code>placeholder</code> property.
     *
     */
    getPlaceholder() {
        return this.getProperty('placeholder');
    }
    /**
     * Gets the value of <code>readonly</code> property.
     * Whether the component is readonly
     * @return The value of <code>readonly</code> property.
     *
     */
    getReadonly() {
        return this.getProperty('readonly');
    }
    /**
     * Gets the value of <code>required</code> property.
     * Specifies whether or not the component is required.
     * @return The value of <code>required</code> property.
     *
     */
    getRequired() {
        return this.getProperty('required');
    }
    /**
     * Gets the value of <code>requiredMessageDetail</code> property.
     * Overrides the default Required error message.
     * @return The value of <code>requiredMessageDetail</code> property.
     *
     */
    getRequiredMessageDetail() {
        return this.getProperty('requiredMessageDetail');
    }
    /**
     * Gets the value of <code>resizeBehavior</code> property.
     * Defines the resizeBehavior of the textarea.
     * @return The value of <code>resizeBehavior</code> property.
     *
     */
    getResizeBehavior() {
        return this.getProperty('resizeBehavior');
    }
    /**
     * Gets the value of <code>rows</code> property.
     * The number of visible text lines in the textarea.
     * @return The value of <code>rows</code> property.
     *
     */
    getRows() {
        return this.getProperty('rows');
    }
    /**
     * Gets the value of <code>textAlign</code> property.
     * Specifies how the text is aligned within the text field
     * @return The value of <code>textAlign</code> property.
     *
     */
    getTextAlign() {
        return this.getProperty('textAlign');
    }
    /**
     * Gets the value of <code>unsafe_labelledBy</code> property.
     *
     * @return The value of <code>unsafe_labelledBy</code> property.
     *
     */
    getUnsafeLabelledBy() {
        return this.getProperty('unsafe_labelledBy');
    }
    /**
     * Gets the value of <code>userAssistanceDensity</code> property.
     * Specifies the density of the form component's user assistance presentation.
     * @return The value of <code>userAssistanceDensity</code> property.
     *
     */
    getUserAssistanceDensity() {
        return this.getProperty('userAssistanceDensity');
    }
    /**
     * Gets the value of <code>validators</code> property.
     * Specifies the validators for the component.
     * @return The value of <code>validators</code> property.
     *
     */
    getValidators() {
        return this.getProperty('validators');
    }
    /**
     * Sets the value of <code>value</code> property.
     * The value of the component.
     * @param value The value to set for <code>value</code>
     *
     */
    changeValue(value) {
        return this.setProperty('value', value);
    }
    /**
     * Gets the value of <code>value</code> property.
     * The value of the component.
     * @return The value of <code>value</code> property.
     *
     */
    getValue() {
        return this.getProperty('value');
    }
    /**
     * Gets the value of <code>rawValue</code> property.
     * Specifies how the raw value of the component
     * @return The value of <code>rawValue</code> property.
     *
     */
    getRawValue() {
        return this.getProperty('rawValue');
    }
    /**
     * Gets the value of <code>valid</code> property.
     * Specifies how the valid state of the component
     * @return The value of <code>valid</code> property.
     *
     */
    getValid() {
        return this.getProperty('valid');
    }
}
exports.TextAreaWebElementBase = TextAreaWebElementBase;
//# sourceMappingURL=TextAreaWebElementBase.js.map