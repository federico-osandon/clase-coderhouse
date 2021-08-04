import { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer';
import ItemListContainer from './container/ItemListContainer';
import NavBar from './components/NavBar'
import Cart from './components/Cart'
import UseNotiContext from './components/context/CartContext'

import 'bootstrap/dist/css/bootstrap.min.css';







function App() { 
	
		return (
			<Router>
				<UseNotiContext>

				<NavBar /> 
				<div className="App">
					<Switch>			
						<Route exact path='/detail/:id' component={ItemDetailContainer} />

						<Route exact path="/">
							<ItemListContainer />
						</Route>		
						<Route exact path="/category/:categoryId">
							<ItemListContainer />
						</Route>
						<Route exact path="/cart">
							<Cart />
						</Route> 
		
					</Switch>
				</div>
		</UseNotiContext>
		</Router> 
	)
}

export default App;
