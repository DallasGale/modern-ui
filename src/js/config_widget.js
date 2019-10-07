import ChangeObserver from '../_utils/change_observer'

const widget = document.getElementById('config-widget')

const body = document.querySelector('body')

widget.innerHTML = '<strong>Toggle Site Mode</strong>'

const ws = widget.style
ws.fontSize = '0.8rem'
ws.position = 'fixed'
ws.border = '1px solid'
ws.top = '2rem'
ws.width = 'auto'
ws.padding = '1rem'
ws.textAlign = 'right'
ws.right = '2rem'


const radios = `
	<style>
		.label {
			display: block;
			margin-bottom: 0.5rem;
			margin-top: 0.5rem;
		}
	</style>
  <form>
    <label class="label" for="radio-accent">Accent
    	<input name="siteMode" id="radio-accent" type="radio" value="accent" />
		</label>
		
    <label class="label" for="radio-negative">Negative
    	<input name="siteMode" id="radio-negative" type="radio" value="negative" />
		</label>

    <label class="label" for="radio-positive">Positive
			<input name="siteMode" id="radio-positive" type="radio" value="positive" />
			</label>
  </form>
	`

const accentPicker = `
		<style>
			.hex {
				display: block;
				width: 50%;
				left: 50%:
				text-align: left;
			}
		</style>
		<label class="label" for="color-picker"><strong>Accent color</strong>
		<input name="siteMode" id="color-picker" type="color" value="${localStorage.accent}" />
		</label>
		<span class="hex">#</span>
`

widget.insertAdjacentHTML('beforeend', radios)
widget.insertAdjacentHTML('beforeend', accentPicker)



document.onreadystatechange = () => {
	if (document.readyState === 'complete') {

		// * Radio buttons
		const defaultMode = body.getAttribute('mode')
		const radios = widget.querySelectorAll('input[type=radio]')

		radios.forEach(radio => {
			if (radio.value === defaultMode) {
				radio.setAttribute('checked', true)
			}

			radio.addEventListener('click', () => {
				body.setAttribute('mode', radio.value.toLowerCase())
			})
		})
	}
}