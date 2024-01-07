import GroceryItem from './GroceryItem'

const GroceryList = ({ list, removeItem, editItem }) => {
	return (
		<div className='grocery-list'>
			{list.map(item => {
				const { id, title } = item
				return (
					<GroceryItem
						key={id}
						id={id}
						title={title}
						editItem={editItem}
						removeItem={removeItem}
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
