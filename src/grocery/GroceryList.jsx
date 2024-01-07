import { useGlobalContext } from '../context'
import GroceryItem from '../grocery-item/GroceryItem'

const GroceryList = ({ list, removeItem, editItem, editPrice }) => {
	const { itemList } = useGlobalContext()
	// console.log(list)
	return (
		<div className='grocery-list'>
			{itemList.map(item => {
				const { id, title, cost } = item
				{/* console.log(title) */}
				return (
					<GroceryItem
						key={id}
						id={id}
						title={title}
						editItem={editItem}
						removeItem={removeItem}
						editPrice={editPrice}
						cost={cost}
					/>
				)
			})}
			<footer className='footer'>
				<hr />
				<div className='cart-total'>
					<h4>
						сумма <span>20р.</span>
					</h4>
				</div>
			</footer>
		</div>
	)
}

export default GroceryList
