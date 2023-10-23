import React from 'react';
import { Link } from 'react-router-dom';
import Footerinterno from '../j-footer/Footerinterno';
import Aaa from '../aaa';
import Presupuestos from '../h-presupuestos/Presupuestos';
import B from '../B';

export default function D3D() {
	return (
		<>
			<section className='w-full h-full'>
				<div className='flex items-center justify-center'>
					<img
						className='h-28 w-28 lg:h-60 lg:w-60 mt-20 mb-10'
						src='/M3D.svg'
						alt='Hexagono de diseño Grafico'
					/>
					<div className='h-40 w-80 lg: bg-teal-400/10 blur-3xl absolute top-10 z-10'></div>
				</div>
				<Aaa />
				<div className='h-72 w-14 bg-sky-300/40 absolute rounded-full left-[30%] top-[50%] blur-3xl rotate-45'></div>
				<p className='text-center text-white px-10 lg:text-2xl lg:p-20  lg:px-40 font-semibold text-lg mb-20'>
					Nuestro servicio de modelado 3D transforma tus conceptos en
					experiencias tangibles, abriendo nuevas formas de comunicación y
					presentación. Desde productos hasta personajes o escenarios, te
					ofrecemos autenticidad visual en un universo virtual ilimitado,
					fusionando innovación y estética para impulsar tu proyecto hacia
					nuevos horizontes.
				</p>

				<h1 className='text-center text-4xl sm:text-4xl lg:text-6xl mt-20 lg:mb-2 lg:py-32 text-indigo-300 uppercase font-bold'>
					Nuestros planes
				</h1>
				<div className='flex flex-col lg:flex-row justify-center items-center lg:justify-center lg:items-end lg:space-x-48 pt-20'>
					<img
						src='/m3d1.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] items-end justify-center py-10 lg:py-0 shadow-2xl'
						alt='Plan de Landing Page'
					/>
					<img
						src='/m3d2.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] justify-center items-center py-10 lg:py-0 shadow-2xl'
						alt='Plan de Pagina corporativa'
					/>
					<img
						src='/m3d3.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] justify-center items-center py-10 lg:py-0 shadow-2xl'
						alt='Plan de Pagina corporativa'
					/>
				</div>
				<p className='text-center text-white px-10 lg:text-2xl lg:p-20 lg:px-40 lg:py-32 font-semibold text-lg '>
					{' '}
					En caso de ser necesario incluir material, se aplicará un cargo
					adicional con respecto al trabajo a realizar. Para obtener un plan
					personalizado, contactanos a través del formulario de consultas.
				</p>

				<section className='absolute top-0 left-0 flex justify-center items-center'>
					<img
						className='h-[20px]  w-[20px] m-4'
						src='/icouno.svg'
						alt='Imagen de hexágono'
					/>
					<Link
						to='/'
						className='text-indigo-300 font-semibold hover:text-white ease-in duration-300 '
					>
						Volver al inicio
					</Link>
				</section>
				<B />
				<Presupuestos />
			</section>

			<Footerinterno />
		</>
	);
}
