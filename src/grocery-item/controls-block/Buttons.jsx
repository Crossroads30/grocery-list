import { FaEdit, FaTrash } from 'react-icons/fa'
import { CiDollar } from 'react-icons/ci'



const Buttons = ({
	editItem,
	removeItem,
	id,
	editPrice,
}) => {
	return (
		<div className='btn-container'>
			<button
				onClick={() => editPrice(id)}
				className='amount-btn'
				type='button'
			>
				<CiDollar />
			</button>
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
