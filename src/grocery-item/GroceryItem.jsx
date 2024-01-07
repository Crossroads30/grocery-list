import React, { useState } from 'react'

import Title from './Title'
import ControlsBlock from './controls-block/ControlsBlock'

function GroceryItem({ id, title, editItem, removeItem }) {
	const [showMarks, setShowMarks] = useState(false)

	return (
		<article className='grocery-item'>
			<Title />
			<ControlsBlock />
		</article>
	)
}

export default GroceryItem
