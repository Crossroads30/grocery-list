import { useGlobalContext } from '../context'
import GroceryItem from '../grocery-item/GroceryItem'

const GroceryList = ({ editItem, editPrice }) => {
	const { itemList, total } = useGlobalContext()
	// console.log(list)
	return (
		<div className='grocery-list'>
			{itemList.map((item, index) => {
				const { id, title, cost, amount } = item
				{
					/* console.log(title) */
				}
				return (
					<GroceryItem
						key={index}
						id={id}
						title={title}
						editItem={editItem}
						editPrice={editPrice}
						cost={cost}
						amount={amount}
					/>
				)
			})}
			<footer className='footer'>
				<hr />
				<div className='cart-total'>
					<h4>
						сумма <span>{total}р.</span>
					</h4>
				</div>
			</footer>
		</div>
	)
}

export default GroceryList
