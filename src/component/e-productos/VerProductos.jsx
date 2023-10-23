import React from 'react';
import { Link } from 'react-router-dom';

export default function VerProductos() {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};
	return (
		<>
			<section className='relative flex flex-col-3 w-full h-screen justify-center items-center space-x-20'>
				<div className='flex flex-col items-center '>
					<img
						className='h-[120px]  w-[120px] lg:h-[200px] md:h-[200px]  lg:w-[200px] md:w-[200px]  '
						src='/DW.svg'
						alt='Imagen de un hexagono'
					/>
					<Link
						to='/component/e-productos/PaginasWeb'
						className='p-4 lg:text-xl font-bold text-indigo-300'
						onClick={handleClick}
					>
						Diseño Web
					</Link>
				</div>
				<div className='flex flex-col items-center'>
					<img
						className='h-[120px] w-[200px] lg:h-[200px] md:h-[200px]  lg:w-[200px] md:w-[200px] '
						src='/DG.svg'
						alt='Imagen de un hexagono '
					/>
					<Link
						to='/component/e-productos/DGrafico'
						className='p-4 lg:text-xl font-bold text-indigo-300'
					>
						Diseño Gráfico
					</Link>
				</div>
				<div className='flex flex-col items-center'>
					<img
						className='h-[120px] w-[120px] lg:h-[200px] md:h-[200px] lg:w-[200px] md:w-[200px]  '
						src='/M3D.svg'
						alt='Imagen de un hexagono '
					/>
					<Link
						to='/component/e-productos/D3D'
						className='p-4 lg:text-xl font-bold text-indigo-300'
					>
						Modelado 3D
					</Link>
				</div>
			</section>
			<section className='absolute top-0 left-0 flex justify-center items-center'>
				<img
					className='h-[20px]  w-[20px] m-4'
					src='/icouno.svg'
					alt='Imagen de hexágono'
				/>
			</section>
		</>
	);
}
