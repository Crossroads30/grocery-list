import Amount from "./Amount"
import Buttons from "./Buttons"

const ControlsBlock = ({
	editItem,
	id,
	editPrice,
}) => {
	return (
		<div className='btn-amount-wrapper'>
			<Buttons
				id={id}
				editItem={editItem}
				editPrice={editPrice}
			/>
			<Amount />
		</div>
	)
}
export default ControlsBlock