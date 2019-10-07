import { colors, modeTypes } from '../../js/constants'
import { colorPicker } from '../../js/helpers'

/**
 * 
 * @param {String} buttonMode - Button attribute. eg <button mode='primary' />.
 * @param {String} accentColor - User defined accent HEX color.
 */
export const setButtonBackground = (buttonMode, accentColor) => {
	if (buttonMode === modeTypes.accent.name) return accentColor
	if (buttonMode === modeTypes.negative.name) return colors.dark
	if (buttonMode === modeTypes.positive.name) return colors.light
}

/**
 * 
 * @param {String} siteMode - User defined mode assigned  to the <body /> 'mode' attr. via ./constants.js
 * @param {String} buttonMode - Button attribute. eg <button mode='primary' />.
 * @param {String} accentColor - User defined accent HEX color. 
 */
export const setButtonBorderColor = (siteMode, buttonMode, accentColor) => {
	// * An 'accent' background and button.
	if (siteMode === 'accent' && buttonMode === 'accent') {
		const color = colorPicker(accentColor)
		return color
	}
	// * An 'accent' background with a 'negative' button.
	if (siteMode === 'accent' && buttonMode === 'negative') {
		return colors.light
	}
	// * An 'accent' background with a 'positive' button.
	if (siteMode === 'accent' && buttonMode === 'positive') {
		return colors.dark
	}
	// * A 'positive' background and button.
	if (siteMode === 'positive' && buttonMode === 'positive') {
		const color = colorPicker(accentColor)
		return color
	}
}


// * Set styles for 'focus' and 'mouseover' events.

/**
 * 
 * @param {Element} button  - this Element
 * @param {String} background - Button background color
 * @param {String} color - Button color
 */
export const activeButtonStyle = (button, background, borderColor, color) => {
	let thisButton = button.shadowRoot.querySelector('button')
	thisButton.style.background = background
	thisButton.style.bordrColor = borderColor
	thisButton.style.color = color
}

/**
 * 
 * @param {Element} button  - this Element
 * @param {String} background - Button background color
 * @param {String} color - Button color
 */
export const defaultButtonStyle = (button, background, color) => {
	let thisButton = button.shadowRoot.querySelector('button')
	thisButton.style.background = background
	thisButton.style.color = color
}

/**
 * 
 * @param {Element} button - this Element
 * @param {String} accent - User defined accent color
 */
export const setAccentButtonStyleReset = (button, accent) => {
	button.style.borderColor = accent
	button.style.background = accent
	button.style.color = colorPicker(button.style.background)
	button.style.borderColor = colorPicker(button.style.background)
}


/**
 * 
 * @param {Element} button 
 * @param {String} background 
 * @param {String} accent 
 * @param {String} borderColor 
 */
export const setButtonStyle = (button, background, color, borderColor) => {
	let thisButton = button.shadowRoot.querySelector('button')
	thisButton.style.background = background
	thisButton.style.color = color
	thisButton.style.borderColor = borderColor
}