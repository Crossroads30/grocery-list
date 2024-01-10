import { useRef } from 'react'
import { useGlobalContext } from './context'

const GroceryForm = ({}) => {
	const {
		itemList,
		addItem,
		isNameEditing,
		editId,
		itemName,
		getName,
		editItemList,
		getPrice,
		itemPrice,
		isPriceEditing,
		showDangerAlert,
		inputRef,
	} = useGlobalContext()

	const timeout = () => {
		setTimeout(() => {
			showDangerAlert(false, '', '')
		}, 2000)
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (!itemName && !itemPrice) {
			// show alert
			showDangerAlert(true, 'пожалуйста добавьте продукт', 'danger')
			timeout()
			clearTimeout(timeout())
		} else if (itemName && isNameEditing) {
			// deal with editName
			const editedList = itemList.map(item => {
				if (item.id === editId) {
					return { ...item, title: itemName }
				}
				return item
			})
			editItemList(editedList)
		} else {
			addItem(itemName)
		}
		if (!itemPrice && isPriceEditing) {
			// show alert
			showDangerAlert(true, 'пожалуйста добавьте цену!', 'danger')
			timeout()
			clearTimeout(timeout())
		} else if (itemPrice && isPriceEditing) {
			// deal with editPrice
			const editedList = itemList.map(item => {
				if (item.id === editId) {
					return { ...item, cost: itemPrice }
				}
				return item
			})
			editItemList(editedList)
		}
	}

	return (
		<form className='grocery-form' onSubmit={handleSubmit}>
			<div className='form-control'>
				{isPriceEditing ? (
					<input
						placeholder='Добавьте цену'
						type='text'
						className='grocery'
						value={itemPrice}
						onChange={e => getPrice(e.target.value)}
						ref={inputRef}
					/>
				) : (
					<input
						placeholder='Добавьте продукты'
						type='text'
						className='grocery'
						value={itemName}
						onChange={e => getName(e.target.value)}
						ref={inputRef}
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
