import React from 'react';
import { Link } from 'react-router-dom';
import Footerinterno from '../j-footer/Footerinterno';
import Aaa from '../aaa';
import Presupuestos from '../h-presupuestos/Presupuestos';

export default function PaginasWeb() {


	return (
		<>
			<section className='w-full h-full'>
				<div className='flex items-center justify-center'>
					<img
						className='h-28 w-28 lg:h-60 lg:w-60 mt-10 mb-10'
						src='/DW.svg'
						alt='Hexagono de diseño web'
					/>
					<div className='h-40 w-80 lg: bg-teal-400/10 blur-3xl absolute top-10 z-10'></div>
				</div>
				<div className=''>
					<h1 className='text-center text-2xl px-4 lg:text-4xl  text-indigo-300 mt-8 mb-8 lg:mb-2 lg:mt-14 uppercase font-bold '>
						Porque es importante tener tu sitio web
					</h1>
					<div className='h-72 w-14 bg-sky-300/40 absolute rounded-full left-[30%] top-[50%] blur-3xl rotate-45'></div>
					<p className='text-center text-white px-10 lg:text-2xl lg:p-20  lg:px-40 font-semibold text-lg '>
						En un mundo donde la presencia digital es la nueva vitrina, tu
						negocio o proyecto merece destacar. Desde dispositivos móviles hasta
						computadoras de escritorio, cada pantalla es una oportunidad de
						conexión. Asegurar la visibilidad de tu empresa en este universo
						virtual es fundamental para alcanzar a tu audiencia en cualquier
						momento y lugar.
					</p>

					<h1 className='text-center text-2xl px-8 lg:text-4xl  text-indigo-300 mt-14 mb-8 lg:mb-40 lg:mt-40 uppercase font-bold '>
						Ventajas de tener tu sitio web
					</h1>
				</div>
				<Aaa />
				<div data-aos='zoom-in-down' data-aos-duration='2000'>
				<div className='grid grid-cols-3 gap-2 px-3 '>
					
					<p className='col-span-3 text-center p-4 px-10 lg:text-center lg:p-5 lg:col-span-1 text-xl font-semibold bg-gradient-to-r bg-slate-800/50  backdrop-blur-md rounded-xl m-3'>
						VISIBILIDAD GLOBAL: <br />
						Se amplía el alcance para llega a audiciencias en todo el mundo.
					</p>
					<p className='col-span-3 text-center p-4 px-10 lg:text-center lg:p-4 lg:col-span-1 text-xl font-semibold bg-gradient-to-r bg-slate-800/40  backdrop-blur-md rounded-xl m-3'>
						CREDIBILIDAD PROFESIONAL: <br />
						Un sitio web bien diseñado demuestra y establece una confianza
						directa con posibles clientes.
					</p>
					<p className='col-span-3 text-center p-4 px-10 lg:text-center lg:p-4 lg:col-span-1 text-xl font-semibold bg-gradient-to-r bg-slate-800/30  backdrop-blur-md rounded-xl m-3'>
						VITRINA ONLINE: <br />
						Tus productos o servicios esta proporcionados de manera clara y
						accesible durante las 24 horas del día.
					</p></div>
				</div>
				<h1 className='text-center text-4xl sm:text-4xl lg:text-6xl mt-20 lg:mb-2 lg:py-32 text-indigo-300 uppercase font-bold'>
					Nuestros planes
				</h1>
				<div className='flex flex-col lg:flex-row justify-center items-center lg:justify-center lg:items-start lg:space-x-48 pt-20'>
					<img
						src='/dw1.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] items-center justify-center py-10 lg:py-0 shadow-2xl'
						alt='Plan de Landing Page'
					/>
					<img
						src='/dw2.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] justify-center items-center py-10 lg:py-0 shadow-2xl'
						alt='Plan de Pagina corporativa'
					/>
				</div>
				<p className='text-center text-white px-10 lg:text-2xl lg:p-20 lg:py-32 lg:px-40 font-semibold text-lg'>
					{' '}
					Todos nuestros planes incluyen dominio, alojamiento web y certificado
					SSL. <br />
					En el caso de tener que incluir Material (Logotipo, edición de video,
					secciones en el sitio, etc.), se cobrará un adicional en relación al
					trabajo a realizar.
				</p>

				<h1 className='text-center text-4xl sm:text-4xl lg:text-6xl mt-20 lg:mb-2 lg:py-32 text-indigo-300 uppercase font-bold'>
					Próximamente
				</h1>
				<div className='flex flex-col lg:flex-row justify-center items-center lg:justify-center lg:items-end lg:space-x-48 pt-20 lg:py-32'>
					<img
						src='/dw3.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] items-center justify-center py-10 lg:py-4 shadow-2xl'
						alt='Plan de Pagina corporativa'
					/>
					<img
						src='/dw4.svg'
						className='w-[250px] h-auto lg:h-auto lg:w-[300px] justify-center items-center py-10 lg:py-4 shadow-2xl'
						alt='Plan de Landing Page'
					/>
				</div>
				<section className='absolute top-0 left-0 flex justify-center items-center'>
					<img
						className='h-[20px]  w-[20px] m-4'
						src='/icouno.svg'
						alt='Imagen de hexágono'
					/>
					<Link
						to='/'
						className='text-indigo-300 font-semibold hover:text-white ease-in duration-300'
					>
						Volver al inicio
					</Link>
					
				</section>
			<div className="h-[900px] w-[300px] absolute blur-3xl left-[20%] top-[15%]rotate-45 bg-gradient-to-r from-teal-800 to-sky-500 opacity-10"></div>
		
				<Presupuestos />
			</section>

			<Footerinterno />
		</>
	);
}
