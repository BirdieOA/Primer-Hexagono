import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Productos() {
	const handleClick = () => {
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<>
			<section className='flex flex-col items-center pt-36' id='planes'>
				<h3
					className='text-xl text-neutral-200 font-bold'
					data-aos='zoom-in'
					data-aos-duration='500'
				>
					Conozca
				</h3>
				<h1
					className='text-6xl text-center md:text-7xl text-sky-600 font-abrilFatface p-4 pb-2'
					data-aos='fade-right'
					data-aos-duration='2000'
				>
					Nuestros Planes
				</h1>

				<section className='relative flex flex-col lg:flex-row lg:space-x-20  lg:w-full h-auto py-20 justify-center items-center mb-10  '>
					<div className='flex flex-col items-center justify-center hover:scale-105 ease-in duration-300'>
						<img
							className='h-[120px] w-[120px] lg:h-[200px] md:h-[200px]  lg:w-[200px] md:w-[200px]'
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

					<div className='flex flex-col justify-center items-center hover:scale-105 ease-in duration-300 '>
						<img
							className='h-[120px] w-[200px] lg:h-[200px] md:h-[200px]  lg:w-[200px] md:w-[200px] '
							src='/DG.svg'
							alt='Imagen de un hexagono '
						/>
						<Link
							to='/component/e-productos/DGrafico'
							className='p-4 lg:text-xl font-bold text-indigo-300'
							onClick={handleClick}
						>
							Diseño Gráfico
						</Link>
					</div>

					<div className='flex flex-col items-center justify-center hover:scale-105 ease-in duration-300 '>
						<img
							className='h-[120px] w-[120px] lg:h-[200px] md:h-[200px] lg:w-[200px] md:w-[200px]  '
							src='/M3D.svg'
							alt='Imagen de un hexagono '
						/>
						<Link
							to='/component/e-productos/D3D'
							className='p-4 lg:text-xl font-bold text-indigo-300 '
							onClick={handleClick}
							
						>
							Modelado 3D
						</Link>
					</div>
				</section>
			</section>
		</>
	);
}
