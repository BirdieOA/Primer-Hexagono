import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
	Route,
} from 'react-router-dom';

import './index.css';

import Error from './routes/Error';
import Hexagono from './routes/Hexagono';
import VerProductos from './component/e-productos/VerProductos';
import PaginasWeb from './component/e-productos/PaginasWeb';
import D3D from './component/e-productos/D3D';
import DGrafico from './component/e-productos/DGrafico';


const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route exact path='/' element={<Hexagono />} errorElement={<Error />} />
			<Route
				path='/component/e-productos/VerProductos'
				element={<VerProductos />}
			/>
				<Route
				path='/component/e-productos/PaginasWeb'
				element={<PaginasWeb />}
			/>
			<Route
				path='/component/e-productos/D3D'
				element={<D3D/>}
			/>
				<Route
				path='/component/e-productos/DGrafico'
				element={<DGrafico/>}
			/>
	


		</>,
	),
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<div className='bg-gray-950 select-none'>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>,
);
