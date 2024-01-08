import React, { useState } from 'react'

import Title from './Title'
import ControlsBlock from './controls-block/ControlsBlock'

function GroceryItem({ id, title, amount, cost }) {
	const [showMarks, setShowMarks] = useState(false)

	return (
		<article className='grocery-item'>
			<Title
				showMarks={showMarks}
				title={title}
				setShowMarks={setShowMarks}
				cost={cost}
			/>
			<ControlsBlock
				id={id}
				amount={amount}
			/>
		</article>
	)
}

export default GroceryItem
