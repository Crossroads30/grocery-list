import Amount from "./Amount"
import Buttons from "./Buttons"

const ControlsBlock = ({ removeItem, editItem, id }) => {
	return (
		<div className='btn-amount-wrapper'>
			<Buttons id={id} removeItem={removeItem} editItem={editItem} />
			<Amount />
		</div>
	)
}
export default ControlsBlock