import Footer from '../components/Footer'
import { useGlobalContext } from '../context'
import GroceryItem from './GroceryItem'

const GroceryList = () => {
	const { itemList, total } = useGlobalContext()

	return (
		<div className='grocery-list'>
			{itemList.map((item, index) => {
				const { id, title, cost, amount } = item
				return (
					<GroceryItem
						key={index}
						id={id}
						title={title}
						cost={cost}
						amount={amount}
					/>
				)
			})}
			{/* <Footer /> */}
			{/* <footer className='footer'>
				<hr />
				<div className='cart-total'>
					<h4>
						сумма <span>{total}р.</span>
					</h4>
				</div>
			</footer> */}
		</div>
	)
}

export default GroceryList
