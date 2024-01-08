import Amount from "./Amount"
import Buttons from "./Buttons"

const ControlsBlock = ({ editItem, id, editPrice, amount }) => {
	return (
		<div className='btn-amount-wrapper'>
			<Buttons id={id} editItem={editItem} editPrice={editPrice} />
			<Amount id={id} amount={amount} />
		</div>
	)
}
export default ControlsBlock