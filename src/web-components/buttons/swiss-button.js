import { siteTheme, colors } from '../../js/constants'
import { colorPicker } from '../../js/helpers'
import {
	setButtonBackground,
	setButtonBorderColor,
	setButtonStyle,
	setAccentButtonStyleReset,
} from './_functions'
import ChangeObserver from '../../_utils/change_observer'

const body = document.querySelector('body')

// ! Development only
let accent = body.getAttribute('dev-accent')


// ? Add this back in before publishing to NPM
// const { accent } = siteTheme

// * HTML Template
const template = document.createElement('template')
template.innerHTML = '<button>button label</button>'


class SwissButton extends HTMLElement {

	constructor() {
		super()

		// * Assign template to a constant
		const button = template.content.querySelector('button')

		// * Set label text
		const label = this.textContent
		button.textContent = label

		// * Grab the 'theme' attr from the actual DOM wrapper element '<swiss-button'>
		const buttonMode = this.getAttribute('mode')

		// * Apply CSS
		const bs = button.style
		bs.background = setButtonBackground(buttonMode, accent)
		bs.color = colorPicker(bs.background)
		bs.borderWidth = '3px'
		bs.borderColor = setButtonBorderColor(siteTheme.mode, buttonMode, accent)
		bs.borderStyle = 'solid'
		bs.borderRadius = '0px'
		bs.boxSizing = 'border-box'
		bs.cursor = 'pointer'
		bs.display = 'inline-block'
		bs.fontSize = '1.4rem'
		bs.fontWeight = 'normal'
		bs.letterSpacing = '1px'
		bs.marginBottom = '1rem'
		bs.minWidth = '10vw'
		bs.overflow = 'hidden'
		bs.padding = '1.2rem 3rem'
		bs.position = 'relative'
		bs.textTransform = 'uppercase'

		// Dropdown content
		// this._hasDropdown = this.getAttribute('dropdown')
		// const icon = document.createElement('span')
		// const is = icon.style
		// is.alignItems = 'center'
		// is.display = 'flex'
		// is.fontSize = '1.2rem'
		// is.height = '100%'
		// is.justifyContent = 'center'
		// is.position = 'absolute'
		// is.right = '0.5rem'
		// is.transform = 'rotate(180deg)'
		// is.top = 0
		// is.width = '2rem'
		// icon.innerHTML = '&#9954'

		// if (this._hasDropdown) {
		// 	this.insertAdjacentElement('beforeend', icon)
		// }

		// button.setAttribute('active', false)

		// ? Event handlers
		// const defaultButtonBackground = bs.background
		// const defaultButtonColor = bs.color
		const activeButtonBackground = bs.color
		const activeButtonColor = bs.background



		this.addEventListener('focus', () => {
			setButtonStyle(this, activeButtonBackground, null, activeButtonColor)

			// if (this._hasDropdown) {
			// 	const iconEl = this.querySelector('span')
			// 	iconEl.style.transform = 'rotate(0deg)'
			// 	iconEl.style.transition = 'all 0.3s'
			// }
		})

		this.addEventListener('focusout', () => {
			setButtonStyle(this, activeButtonBackground, null, activeButtonColor)

			// if (this._hasDropdown) {
			// 	const iconEl = this.querySelector('span')
			// 	iconEl.style.transform = 'rotate(180deg)'
			// 	iconEl.style.transition = 'all 0.3s'
			// }
		})

		this.addEventListener('mouseover', () => {
			let buttonShadowRoot = this.shadowRoot.querySelector('button')
			accent = body.getAttribute('dev-accent')

			// * A 'ACCENT' background and 'ACCENT' Button.
			if (body.getAttribute('mode') === 'accent' && this.getAttribute('mode') === 'accent') {
				setButtonStyle(this, colors.dark, accent, colors.dark)
			}

			// * An 'ACCENT' background and 'POSITIVE' button.
			if (body.getAttribute('mode') === 'accent' && this.getAttribute('mode') === 'positive') {
				setButtonStyle(this, colors.dark, colors.light, colors.dark)
			}

			// * An 'ACCENT' background and 'NEGATIVE' button.
			if (body.getAttribute('mode') === 'accent' && this.getAttribute('mode') === 'negative') {
				setButtonStyle(this, activeButtonBackground, colors.dark, activeButtonColor)
			}

			// * A 'POSITIVE' background and 'ACCENT' Button.
			if (body.getAttribute('mode') === 'positive' && this.getAttribute('mode') === 'accent') {
				setButtonStyle(this, colors.dark, accent, colors.dark)
			}

			// * A 'POSITIVE' background and 'NEGATIVE' Button.
			if (body.getAttribute('mode') === 'positive' && this.getAttribute('mode') === 'negative') {
				setButtonStyle(this, colors.light, colors.dark, colors.dark)
			}

			// * A 'POSITIVE' background and 'POSITIVE' Button.
			if (body.getAttribute('mode') === 'positive' && this.getAttribute('mode') === 'positive') {
				buttonShadowRoot.style.borderColor = colors.dark
				buttonShadowRoot.style.background = colors.dark
				buttonShadowRoot.style.color = colors.light
			}


			// * A 'NEGATIVE' background and 'ACCENT' Button.
			if (body.getAttribute('mode') === 'negative' && this.getAttribute('mode') === 'accent') {
				buttonShadowRoot.style.borderColor = accent
				buttonShadowRoot.style.background = colors.dark
				buttonShadowRoot.style.color = accent
			}

			// * A 'NEGATIVE' background and 'NEGATIVE' buttons.
			if (body.getAttribute('mode') === 'negative' && this.getAttribute('mode') === 'negative') {
				setButtonStyle(this, colors.light, colors.dark, colors.light)
			}

			// * A 'NEGATIVE' background and 'POSITIVE' buttons.
			if (body.getAttribute('mode') === 'negative' && this.getAttribute('mode') === 'positive') {
				// activeEventButtonStyle(this, activeButtonBackground, activeButtonColor)
				buttonShadowRoot.style.borderColor = colors.light
				buttonShadowRoot.style.background = colors.dark
				buttonShadowRoot.style.color = colors.light
			}



			// button.setAttribute('open', true)
			// button.setAttribute('active', true)

			// ! Remove this 'cursor' as a dropdown
			// ! shouldn't need a clickable parent button
			// if (this._hasDropdown) bs.cursor = 'default'


			// if (this._hasDropdown) {
			// 	const iconEl = this.querySelector('span')
			// 	iconEl.style.transform = 'rotate(0deg)'
			// 	iconEl.style.transition = 'all 0.3s'
			// }
		})

		this.addEventListener('mouseout', () => {
			let buttonShadowRoot = this.shadowRoot.querySelector('button')
			accent = body.getAttribute('dev-accent')

			// * A 'ACCENT' background and 'ACCENT' Button.
			if (body.getAttribute('mode') === 'accent' && this.getAttribute('mode') === 'accent') {
				setAccentButtonStyleReset(buttonShadowRoot, accent)
			}

			// * A 'ACCENT' background and 'NEGATIVE' Button.
			if (body.getAttribute('mode') === 'accent' && this.getAttribute('mode') === 'negative') {
				setButtonStyle(this, colors.dark, colors.light, colors.dark)
			}

			// * An 'ACCENT' background and 'POSITIVE' button.
			if (body.getAttribute('mode') === 'accent' && this.getAttribute('mode') === 'positive') {
				setButtonStyle(this, colors.light, colors.dark, colors.dark)
			}

			// * A 'NEGATIVE' background and 'ACCENT' Button.
			if (body.getAttribute('mode') === 'negative' && this.getAttribute('mode') === 'accent') {
				setAccentButtonStyleReset(buttonShadowRoot, accent)
				buttonShadowRoot.style.borderColor = accent
			}

			// * A 'POSITIVE' background and 'POSITIVE' button.
			if (body.getAttribute('mode') === 'positive' && this.getAttribute('mode') === 'positive') {
				setButtonStyle(this, colors.light, colors.dark, colors.dark)
			}

			// * A 'POSITIVE' background and 'NEGATIVE' button.
			if (body.getAttribute('mode') === 'positive' && this.getAttribute('mode') === 'negative') {
				setButtonStyle(this, colors.dark, colors.light, colors.dark)
			}

			// * A 'POSITIVE' background and 'ACCENT' Button.
			if (body.getAttribute('mode') === 'positive' && this.getAttribute('mode') === 'accent') {
				setAccentButtonStyleReset(buttonShadowRoot, accent)
			}

			// * A 'NEGATIVE' background and 'POSITIVE' button.
			if (body.getAttribute('mode') === 'negative' && this.getAttribute('mode') === 'positive') {
				setButtonStyle(this, colors.light, colors.dark, colors.light)
			}
			// * A 'NEGATIVE' background and 'NEGATIVE' button.
			if (body.getAttribute('mode') === 'negative' && this.getAttribute('mode') === 'negative') {
				setButtonStyle(this, colors.dark, colors.light, colors.light)
			}

			// if (this.getAttribute('mode') === 'accent' && body.getAttribute('mode') === 'positive') {
			// 	defaultAccentButtonStyle(buttonShadowRoot, accent)

			// } else {
			// 	defaultButtonStyle(this, defaultButtonBackground, defaultButtonColor)
			// }

			// button.setAttribute('open', false)
			// button.setAttribute('active', false)

			// if (this._hasDropdown) {
			// 	const iconEl = this.querySelector('span')
			// 	iconEl.style.transform = 'rotate(180deg)'
			// 	iconEl.style.transition = 'all 0.3s'
			// }
		})

		// * Shadow DOM
		const shadowRoot = this.attachShadow({ mode: 'open' })
		shadowRoot.appendChild(template.content.cloneNode(true))

		// * Handle <body /> attr changes and react to them in the DOM
		// * Update button border colors to match the user chosen mode.
		// ? ie: if <body mode="accent"... then the <button mode="accent"... will have a border off 'dark'

		const thisButton = this
		const thisButtonShadow = this.shadowRoot.querySelector('button')

		function setButtonBorderColorFromBodyMode() {
			// ! <body mode='ACCENT'>
			// * Set complimentary color to accent button.
			if (body.getAttribute('mode') === 'accent' && thisButton.getAttribute('mode') === 'accent') {
				thisButtonShadow.style.borderColor = setButtonBorderColor(siteTheme.mode, buttonMode, accent)
			}

			// * Set 'dark' border to 'negative' button.
			if (body.getAttribute('mode') === 'accent' && thisButton.getAttribute('mode') === 'negative') {
				thisButtonShadow.style.borderColor = colors.dark
			}

			// * Set 'dark' border to positive button.
			if (body.getAttribute('mode') === 'accent' && thisButton.getAttribute('mode') === 'positive') {
				thisButtonShadow.style.borderColor = colors.dark
			}

			// ! <body mode='NEGATIVE'>
			// * Set 'light' border to 'negative' button.
			if (body.getAttribute('mode') === 'negative' && thisButton.getAttribute('mode') === 'negative') {
				thisButtonShadow.style.borderColor = colors.light
			}
			// * Set 'light' border to 'positive' button.
			if (body.getAttribute('mode') === 'negative' && thisButton.getAttribute('mode') === 'positive') {
				thisButtonShadow.style.borderColor = colors.light
			}
			// * Set 'accent' border to 'accent' button.
			if (body.getAttribute('mode') === 'negative' && thisButton.getAttribute('mode') === 'accent') {
				thisButtonShadow.style.borderColor = accent
			}

			// ! <body mode='POSITIVE'>
			// * Set 'dark' border to 'positive' button.
			if (body.getAttribute('mode') === 'positive' && thisButton.getAttribute('mode') === 'positive') {
				thisButtonShadow.style.borderColor = colors.dark
			}
			// * Set 'dark' border to 'accent' button.
			if (body.getAttribute('mode') === 'positive' && thisButton.getAttribute('mode') === 'accent') {
				thisButtonShadow.style.borderColor = colors.dark
			}

			// // ? <body mode='ACCENT'> || <body mode='NEGATIVE'>
			// // * Set 'default border' to 'positive button with non-positive mode
			// if (body.getAttribute('mode') !== 'positive' && thisButton.getAttribute('mode') === 'positive') {
			// 	thisButtonShadow.style.borderColor = setButtonBorderColor(siteTheme.mode, buttonMode, accent)
			// }

			// // ? <body mode='ACCENT'> || <body mode='POSITIVE'>
			// // * Set 'transparent border' to 'positive button with non-positive mode
			// if (body.getAttribute('mode') !== 'negative' && thisButton.getAttribute('mode') === 'negative') {
			// 	thisButtonShadow.style.borderColor = setButtonBorderColor(siteTheme.mode, buttonMode, accent)
			// }
		}

		ChangeObserver(body, () => setButtonBorderColorFromBodyMode())

		// ! Development only - config widget
		function accentColor() {
			if (thisButton.getAttribute('mode') === 'accent') {
				let devAccent = body.getAttribute('dev-accent')
				thisButtonShadow.style.background = devAccent
				thisButtonShadow.style.color = colorPicker(thisButtonShadow.style.background)
				thisButtonShadow.style.borderColor = colorPicker(thisButtonShadow.style.background)

				console.log(body.getAttribute('dev-accent'))
				accent = body.style.background

			}
		}
		ChangeObserver(body, () => accentColor())
		// ! Development only - config widget

	}
}

customElements.define('swiss-button', SwissButton)