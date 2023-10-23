import React from 'react';
import { Link } from 'react-router-dom';
import Footerinterno from '../j-footer/Footerinterno';
import Aaa from '../aaa';
import Presupuestos from '../h-presupuestos/Presupuestos';
import B from '../B';

export default function DGrafico() {
	return (
		<>
			<section className='w-full h-full'>
				<div className='flex items-center justify-center'>
					<img
						className='h-28 w-28 lg:h-60 lg:w-60 mt-20 mb-10'
						src='/DG.svg'
						alt='Hexagono de diseño Grafico'
					/>
					<div className='h-40 w-80 lg: bg-teal-400/10 blur-3xl absolute top-10 z-10'></div>
				</div>
				<div className=''>
					<div className='h-72 w-14 bg-sky-300/40 absolute rounded-full left-[30%] top-[50%] blur-3xl rotate-45'></div>
					<p className='text-center text-white px-10 lg:text-2xl lg:p-20  lg:px-40 font-semibold text-lg mb-20'>
						Desde la primera impresión que generas hasta la percepción continua
						de tu público, cada elemento visual comunica un mensaje poderoso.
						Asegurar una imagen profesional y atractiva es fundamental para
						destacar en un entorno altamente competitivo y visualmente
						impulsado.
					</p>

					<h1 className='text-center text-2xl px-8 lg:text-6xl text-indigo-300 mt-14 mb-8 lg:mb-40 lg:mt-40 uppercase font-bold '>
						Nuestros servicios
					</h1>
				</div>
				<Aaa />

				<div className='grid grid-cols-1 gap-4 px-4 lg:px-32 '>
					<div data-aos='zoom-in-down' data-aos-duration='1000'>
						<p className=' text-center p-4 px-10 lg:text-center lg:p-5 lg:col-span-1 text-xl font-semibold bg-gradient-to-r bg-sky-900/40  backdrop-blur-md rounded-xl m-3'>
							DISEÑO DE LOGO Y CREACION DE MARCA (Branding) <br /> <br />
							<span className='text-sky-400 text-2xl'>•</span> Creación de Logo
							único y memorable que represente la identidad de tu marca. <br />{' '}
							<br />
							<span className='text-sky-400 text-2xl'>•</span> Desarrollo de la
							marca de forma coherente y estratégica para establecer una imagen
							sólida.
							<br />
						</p>
					</div>
					<div data-aos='zoom-in-down' data-aos-duration='1000'>
						<p className=' text-center p-4 px-10 lg:text-center lg:p-4 lg:col-span-1 text-xl font-semibold bg-gradient-to-r bg-sky-900/30  backdrop-blur-md rounded-xl m-3'>
							DISEÑO DE MATERIAL DE MERCADOTECNIA (Marketing) <br /> <br />
							<span className='text-sky-400 text-2xl'>•</span> Diseño de
							tarjetas de presentación, folletería.
							<br /> <br />
							<span className='text-sky-400 text-2xl'>•</span> Diseño de
							publicaciones y elementos gráficos para redes sociales.
						</p>
					</div>
					<div data-aos='zoom-in-down' data-aos-duration='1000'>
						<p className=' text-center p-4 px-10 lg:text-center lg:p-4 lg:col-span-1 text-xl font-semibold bg-gradient-to-r bg-sky-900/20  backdrop-blur-md rounded-xl m-3'>
							DISEÑO DE ILUSTRACIONES PERSONALIZADAS <br />
							<br />
							<span className='text-sky-400 text-2xl'>•</span> Creación de
							ilustraciones originales para libros, revistas, blogs u otros
							proyectos editoriales.
						</p>
					</div>
					<div data-aos='zoom-in-down' data-aos-duration='1000'>
						<p className=' text-center p-4 px-10 lg:text-center lg:p-4 lg:col-span-1 text-xl font-semibold bg-gradient-to-r bg-sky-900/10  backdrop-blur-md rounded-xl m-3'>
							DISEÑO DE MENUS Y CARTAS <br /> <br />
							<span className='text-sky-400 text-2xl'>•</span> Creación de menús
							y cartas para restaurantes, bares o cafeterías, con un diseño
							atractivo y legible.
						</p>
					</div>
				</div>
				<h1 className='text-center text-4xl sm:text-4xl lg:text-6xl mt-20 lg:mb-2 lg:py-32 text-indigo-300 uppercase font-bold'>
					Nuestros planes
				</h1>
				<div className='flex flex-col lg:flex-row justify-center items-center lg:justify-center lg:items-end lg:space-x-48 pt-20'>
					<img
						src='/dg1.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] items-center justify-center py-10 lg:py-0 shadow-2xl'
						alt='Plan de Landing Page'
					/>
					<img
						src='/dg2.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] justify-center items-center py-10 lg:py-0 shadow-2xl'
						alt='Plan de Pagina corporativa'
					/>
					<img
						src='/dg3.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] justify-center items-center py-10 lg:py-0 shadow-2xl'
						alt='Plan de Pagina corporativa'
					/>
				</div>
				<p className='text-center text-white px-10 lg:text-2xl lg:p-20 lg:px-40 lg:py-32 font-semibold text-lg '>
					{' '}
					En caso de ser necesario incluir material, se aplicará un cargo
					adicional con respecto al trabajo a realizar. Para obtener un plan
					personalizado, contactanos a través del formulario de consultas."
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
