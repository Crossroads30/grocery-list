import Amount from "./Amount"
import Buttons from "./Buttons"

const ControlsBlock = ({
	removeItem,
	editItem,
	id,
	editPrice,
}) => {
	return (
		<div className='btn-amount-wrapper'>
			<Buttons
				id={id}
				removeItem={removeItem}
				editItem={editItem}
				editPrice={editPrice}
			/>
			<Amount />
		</div>
	)
}
export default ControlsBlock