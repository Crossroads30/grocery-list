import './styles/App.css'
import Footer from './components/Footer'
import GroceryForm from './components/GroceryForm'
import Header from './components/Header'
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
