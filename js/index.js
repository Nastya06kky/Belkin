document.addEventListener('DOMContentLoaded', () => {
	const draggable = document.querySelector('.date')

	const ovalTwo = document.querySelector('.oval-two')
	const pena = document.querySelector('.pena')

	let counter = 0

	const zerno1 = document.querySelector('.zerno-one')
	const zerno2 = document.querySelector('.zerno-two')
	const zerno3 = document.querySelector('.zerno-three')
	const zerno4 = document.querySelector('.zerno-four')
	const zerno5 = document.querySelector('.zerno-five')
	const zerno6 = document.querySelector('.zerno-six')

	const lights = document.querySelector('.lights')

	const soteiniks = document.querySelector('.soteiniks')
	const uzors = document.querySelector('.uzors')

	const peremol1 = document.querySelector('.peremol-1')
	const peremol2 = document.querySelector('.peremol-2')
	const peremol3 = document.querySelector('.peremol-3')
	const peremol4 = document.querySelector('.peremol-4')
	const peremol5 = document.querySelector('.peremol-5')
	const peremol6 = document.querySelector('.peremol-6')

	ovalTwo.addEventListener('click', () => {
		pena.style.display = 'block'
	})

	soteiniks.addEventListener('click', () => {
		soteiniks.style.transform = 'rotate(-45deg)'

		setTimeout(() => uzors.style.display = 'block', 200)
		
	})


	zerno1.addEventListener('click', () => {
		peremol1.style.display = 'block'
		counter += 1

		if(counter >= 6) {
			lights.style.display = 'block'
		}
	})
	zerno2.addEventListener('click', () => {
		peremol2.style.display = 'block'
		counter += 1

		if(counter >= 6) {
			lights.style.display = 'block'
		}
	})
	zerno3.addEventListener('click', () => {
		peremol3.style.display = 'block'
		counter += 1

		if(counter >= 6) {
			lights.style.display = 'block'
		}
	})
	zerno4.addEventListener('click', () => {
		peremol4.style.display = 'block'
		counter += 1

		if(counter >= 6) {
			lights.style.display = 'block'
		}
	})
	zerno5.addEventListener('click', () => {
		peremol5.style.display = 'block'
		counter += 1

		if(counter >= 6) {
			lights.style.display = 'block'
		}
	})
	zerno6.addEventListener('click', () => {
		peremol6.style.display = 'block'
		counter += 1

		if(counter >= 6) {
			lights.style.display = 'block'
		}
	})


	

	const divisions = 6
	const step = 110
	const bottomOffset = 55

	let isDragging = false
	let startY
	let currentDivision = 0

	const initializePosition = () => {
		draggable.style.bottom = `${currentDivision * step + bottomOffset}px`
		draggable.style.top = 'auto'
	}

	initializePosition()

	draggable.addEventListener('mousedown', e => {
		isDragging = true
		startY = e.clientY
		draggable.style.cursor = 'grabbing'
		e.preventDefault()
	})

	document.addEventListener('mousemove', e => {
		if (!isDragging) return

		const deltaY = startY - e.clientY
		const divisionChange = Math.round(deltaY / step)
		let newDivision = currentDivision + divisionChange

		newDivision = Math.max(0, Math.min(divisions - 1, newDivision))

		if (newDivision !== currentDivision) {
			currentDivision = newDivision

			draggable.style.bottom = `${currentDivision * step + bottomOffset}px`
			draggable.style.top = 'auto'

			startY = e.clientY
		}
	})

	document.addEventListener('mouseup', () => {
		isDragging = false
		draggable.style.cursor = 'grab'
	})
})
