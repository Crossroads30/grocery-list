import Alert from './Alert'
import { useGlobalContext } from './context'
import cartImage from './assets/shoppingcart.png'

const GroceryForm = ({}) => {
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
		showDangerAlert,
		amount,
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
			{alert.show && <Alert {...alert} />}
			<div className='imageBlock'>
			<h3>список продуктов</h3>
			<img className='cartImage' src={cartImage} alt='cartImage' />
				<span>{amount}</span>
			</div>
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
