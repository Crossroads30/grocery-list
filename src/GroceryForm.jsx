import { useState } from 'react'
import Alert from './Alert'
import { useGlobalContext } from './context'

const GroceryForm = ({
	isEditing,
	setIsEditing,
	// showAlert,
	list,
	setList,
	// name,
	// setName,
	editId,
	setEditId,
	isEditPrice,
	setIsEditPrice,
	price,
	setPrice,
	// alert,
}) => {
	const {itemList, addItem, alert } = useGlobalContext()
	const [name, setName] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		if (!name && !price) {
			// show alert
			showAlert(true, 'пожалуйста добавьте продукт', 'danger')
		} else if (name && isEditing) {
			// deal with edit
			setList(
				itemList.map(item => {
					if (item.id === editId) {
						return { ...item, title: name }
					}
					return item
				})
			)
			setName('')
			setEditId(null)
			setIsEditing(false)
			showAlert(true, 'исправлено!', 'success')
		} else {
			// showAlert(true, 'продукт добавлен!', 'success')
			// const newItem = {
			// 	id: new Date().getTime().toString(),
			// 	title: name,
			// 	cost: '?',
			// }
			// setList([...list, newItem])
			addItem(name)
		}
		setName('')

		if (!price && isEditPrice ) {
			// show alert
			showAlert(true, 'пожалуйста добавьте цену', 'danger')
		} else if (price && isEditPrice) {
			// deal with editPrice
			setList(
				list.map(item => {
					if (item.id === editId) {
						return { ...item, cost: price }
					}
					return item
				})
			)
			setPrice('')
			setEditId(null)
			setIsEditPrice(false)
			showAlert(true, 'цена добавлена!', 'success')
		}
	}

	return (
		<form className='grocery-form' onSubmit={handleSubmit}>
			{alert.show && (
				<Alert {...alert} />
			)}
			<h3>список продуктов</h3>
			<div className='form-control'>
				{isEditPrice ? (
					<input
						placeholder='Добавьте цену'
						type='text'
						className='grocery'
						value={price}
						onChange={e => setPrice(e.target.value)}
					/>
				) : (
					<input
						placeholder='Добавьте продукты'
						type='text'
						className='grocery'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				)}

				<button className='submit-btn' type='submit'>
					{isEditing ? 'исправить' : 'добавить'}
				</button>
			</div>
		</form>
	)
}
export default GroceryForm
