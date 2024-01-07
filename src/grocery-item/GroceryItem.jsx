import React, { useState } from 'react'

import Title from './Title'
import ControlsBlock from './controls-block/ControlsBlock'

function GroceryItem({
	id,
	title,
	editItem,
	removeItem,
	editPrice,
}) {
	const [showMarks, setShowMarks] = useState(false)

	return (
		<article className='grocery-item'>
			<Title showMarks={showMarks} title={title} setShowMarks={setShowMarks} />
			<ControlsBlock
				id={id}
				editItem={editItem}
				removeItem={removeItem}
				editPrice={editPrice}
			/>
		</article>
	)
}

export default GroceryItem
