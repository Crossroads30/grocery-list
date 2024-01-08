import { useState } from 'react'
import Alert from './Alert'
import { useGlobalContext } from './context'

const GroceryForm = ({
	// isEditing,
	// setIsEditing,
	// showAlert,
	// list,
	// setList,
	// name,
	// setName,
	// editId,
	// setEditId,
	isEditPrice,
	setIsEditPrice,
	price,
	setPrice,
	// alert,
}) => {
	const {
		itemList,
		addItem,
		alert,
		isNameEditing,
		editId,
		itemName,
		getName,
		editItemList,
		getPrice,
		itemPrice,
		isPriceEditing,
		showItemAlert,
		showDangerAlert,
	} = useGlobalContext()
	// const [name, setName] = useState('')

	const timeout = () => {
		setTimeout(() => {
			showDangerAlert(false, '', '')
		}, 2000)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (!itemName && !price) {
			// show alert
			showDangerAlert(true, 'пожалуйста добавьте продукт', 'danger')
			timeout()
			clearTimeout(timeout())
		} else if (itemName && isNameEditing) {
			// deal with edit
			// setName(itemName)
			// setList(
			const editedList = itemList.map(item => {
				if (item.id === editId) {
					return { ...item, title: itemName }
				}
				return item
			})
			editItemList(editedList)
			// )
			// setEditId(null)
			// setIsEditing(false)
			// showAlert(true, 'исправлено!', 'success')
		} else {
			// showAlert(true, 'продукт добавлен!', 'success')
			// const newItem = {
			// 	id: new Date().getTime().toString(),
			// 	title: name,
			// 	cost: '?',
			// }
			// setList([...list, newItem])
			addItem(itemName)
		}
		// setName('')

		if (!itemPrice && isPriceEditing) {
			// show alert
			showDangerAlert(true, 'пожалуйста добавьте цену!', 'danger')
			timeout()
			clearTimeout(timeout())
		} else if (itemPrice && isPriceEditing) {
			// deal with editPrice
			// setList(
			const editedList = itemList.map(item => {
				if (item.id === editId) {
					return { ...item, cost: itemPrice }
				}
				return item
			})
			editItemList(editedList)
			// )
			// setPrice('')
			// setEditId(null)
			// setIsEditPrice(false)
			// showAlert(true, 'цена добавлена!', 'success')
		}
	}

	return (
		<form className='grocery-form' onSubmit={handleSubmit}>
			{alert.show && <Alert {...alert} />}
			<h3>список продуктов</h3>
			<div className='form-control'>
				{isPriceEditing ? (
					<input
						placeholder='Добавьте цену'
						type='text'
						className='grocery'
						value={itemPrice}
						onChange={e => getPrice(e.target.value)}
					/>
				) : (
					<input
						placeholder='Добавьте продукты'
						type='text'
						className='grocery'
						value={itemName}
						onChange={e => getName(e.target.value)}
					/>
				)}

				<button className='submit-btn' type='submit'>
					{isNameEditing ? 'исправить' : 'добавить'}
				</button>
			</div>
		</form>
	)
}
export default GroceryForm
