import { FaEdit, FaTrash } from 'react-icons/fa'
import { CiDollar } from 'react-icons/ci'
import { useGlobalContext } from '../../context'

const Buttons = ({ id }) => {
	const { removeItem, editItem, editPrice, inputRef } =
		useGlobalContext()

	return (
		<div className='btn-container'>
			<button
				onClick={() => {
					inputRef.current.focus()
					editPrice(id)
				}}
				className='amount-btn'
				type='button'
			>
				<CiDollar />
			</button>
			<button
				onClick={() => {
					inputRef.current.focus()
					editItem(id)
				}}
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
	)
}
export default Buttons
