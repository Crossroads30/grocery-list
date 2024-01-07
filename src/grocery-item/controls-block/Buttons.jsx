import { FaEdit, FaTrash } from 'react-icons/fa'

const Buttons = () => {
	return (
		<div className='btn-container'>
			<button onClick={() => editItem(id)} className='edit-btn' type='button'>
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
