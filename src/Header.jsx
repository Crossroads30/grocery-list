import Alert from "./Alert"
import { useGlobalContext } from "./context"
import cartImage from './assets/shoppingcart.png'

const Header = () => {
  const { alert, itemList, amount } = useGlobalContext()

	return (
		<div className="header">
			{alert.show && <Alert {...alert} />}
			<div className='imageBlock'>
				{itemList.length === 0 ? (
					<>
						<h3 className='grocery-title'>список продуктов</h3>
						<h4 className='empty-cart'>пуст</h4>
					</>
				) : (
					<h3 className='grocery-title'>список продуктов</h3>
				)}
				<img className='cartImage' src={cartImage} alt='cartImage' />
				<span>{amount}</span>
			</div>
			<div className='form-control'></div>
		</div>
	)
}
export default Header
