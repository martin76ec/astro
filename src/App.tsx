import React from 'react';
import {Home} from './pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>}>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
