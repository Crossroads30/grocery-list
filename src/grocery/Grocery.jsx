import { useGlobalContext } from '../context'
import GroceryList from './GroceryList'

const Grocery = () => {
	const { itemList } = useGlobalContext()
	return (
		<>
			{itemList.length > 0 && (
				<div className='grocery-container'>
					<GroceryList />
				</div>
			)}
		</>
	)
}
export default Grocery
