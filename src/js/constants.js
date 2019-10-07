import { colorPicker } from './helpers'
import UserTheme from '~/modern.config.js'
import ChangeObserver from '../_utils/change_observer'

// ! Development only variable - config-widget
const localStorage = window.localStorage
localStorage.setItem('accent', '#f6be1f')
// ! Development only variable - config-widget

export const colors = {
	dark: '#000000',
	light: '#ffffff'
}

export const siteTheme = {
	// ! Development only - comment out before publishing to NPM.
	accent: localStorage.accent,
	// ! Development only - comment out before publishing to NPM.

	// * Put back in before publishing to NPM.
	// accent: UserTheme.theme.accentColor,
	mode: UserTheme.theme.mode,
}

export const modeTypes = {
	accent: {
		name: 'accent',
	},
	positive: {
		name: 'positive',
	},
	negative: {
		name: 'negative',
	}
}


// ? Set global style to DOM
const body = document.querySelector('body')
body.setAttribute('dev-accent', siteTheme.accent)
body.style.background = siteTheme.accent

function setBackgroundColor() {
	if (body.getAttribute('mode') === 'accent') {
		// ! Development only - comment out before publishing to NPM.
		// console.log('body.getAttribute(dev-accent)', body.getAttribute('dev-accent'))
		let devAccent = body.getAttribute('dev-accent')
		return devAccent
		// ! Development only - comment out before publishing to NPM.

		// * Put back in before publishing to NPM.
		// return siteTheme.accent
	}
	if (body.getAttribute('mode') === 'positive') {
		return colors.light
	}
	if (body.getAttribute('mode') === 'negative') {
		return colors.dark
	}
}




// ? Obseve <body /> for 'mode' attr. changes and then re-render the page with Mutation Observer.

function handleBodyObserver() {
	body.style.background = setBackgroundColor()
	body.style.color = colorPicker(body.style.background)
	body.style.borderColor = colorPicker(body.style.background)
}
ChangeObserver(body, () => handleBodyObserver())



// ? Obseve <input type="color" /> for 'value' attr. changes and then update the 'accent' color
// ! Private development only... this is not a feature for public
const picker = document.getElementById('color-picker')

ChangeObserver(picker, picker.addEventListener('change', () => {
	body.setAttribute('dev-accent', picker.value)
	// let newColor = body.getAttribute('dev-accent')
	// console.log('newColor', newColor)
	body.style.background = picker.value
})
)

