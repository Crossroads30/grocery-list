import './App.css'
import Footer from './Footer'
import GroceryForm from './GroceryForm'
import Header from './Header'
import Grocery from './grocery/Grocery'

function App() {
	return (
		<section className='section-center'>
			<div>
				<Header />
				<GroceryForm />
				<Grocery />
			</div>
			<Footer />
		</section>
	)
}

export default App
