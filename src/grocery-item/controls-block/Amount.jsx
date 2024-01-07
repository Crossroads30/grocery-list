const Amount = () => {
  return (
		<div className='amount-wrapper'>
			{/* increase amount */}
			{/* as second parameter, we pass the type */}
			<button
				className='amount-btn'
				onClick={() => toggleAmount(id, 'increase')}
			>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
					<path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
				</svg>
			</button>
			{/* amount */}
			<p className='amount'>1</p>
			{/* decrease amount */}
			{/* as second parameter, we pass the type */}
			<button
				className='amount-btn'
				onClick={() => toggleAmount(id, 'decrease')}
			>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
					<path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
				</svg>
			</button>
		</div>
	)
}
export default Amount