import React, { useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { FcCheckmark } from 'react-icons/fc'
import { GiCircle } from 'react-icons/gi'
import { ImCheckmark } from 'react-icons/im'

function GroceryItem({ id, title, editItem, removeItem }) {
	const [showMarks, setShowMarks] = useState(false)
	
	return (
		<article className='grocery-item'>
			<div className='title-container'>
				<button
					onClick={() => {
						setShowMarks(!showMarks)
					}}
					className='mark-btn'
					type='button'
				>
					{showMarks ? (
						<ImCheckmark style={{ color: '#3d9e3d' }} />
					) : (
						<GiCircle />
					)}
				</button>
				<p className={showMarks ? 'title complete' : 'title'}>{title}</p>
			</div>
			<div className='btn-amount-wrapper'>
				<div className='btn-container'>
					<button
						onClick={() => editItem(id)}
						className='edit-btn'
						type='button'
					>
						<FaEdit />
					</button>
					<button
						onClick={() => removeItem(id)}
						className='delete-btn'
						type='button'
					>
						<FaTrash />
					</button>
				</div>
				<div className='amount-wrapper'>
					{/* increase amount */}
					{/* as second parameter, we pass the type */}
					<button
						className='amount-btn'
						onClick={() => toggleAmount(id, 'increase')}
					>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
							<path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
						</svg>
					</button>
					{/* amount */}
					<p className='amount'>1</p>
					{/* decrease amount */}
					{/* as second parameter, we pass the type */}
					<button
						className='amount-btn'
						onClick={() => toggleAmount(id, 'decrease')}
					>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
							<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
						</svg>
					</button>
				</div>
			</div>
		</article>
	)
}

export default GroceryItem
