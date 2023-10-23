import React from 'react';
import { Link } from 'react-router-dom';

export default function CuatroServicios() {
	return (
		<>
			<section className='relative flex flex-col-4 w-full h-screen justify-center items-center text-sm'>
				<div className='md:flex md:space-x-10 lg:space-x-10 '>
					<div className='flex flex-col items-center justify-center pt-4'>
						<img
							className='h-[110px] md:h-[200px] lg:h-[300px]'
							src='/serviciouno.svg'
							alt='Imagen de hexagono '
						/>
						<Link to='/component/d-servicios/Tecnologia' className='pt-4'>
							Tecnología
						</Link>
					</div>

					<div className='flex flex-col items-center justify-center pt-4'>
						<img
							className='h-[110px] md:h-[200px] lg:h-[300px]'
							src='/serviciodos.svg'
							alt='Imagen de hexagono '
						/>
						<Link to='/component/d-servicios/Marketing' className='pt-4'>
							Marketing
						</Link>
					</div>

					<div className='flex flex-col items-center justify-center pt-4'>
						<img
							className='h-[110px] md:h-[200px] lg:h-[300px]'
							src='/serviciotres.svg'
							alt='Imagen de hexagono '
						/>
						<Link to='/component/d-servicios/Asesoramiento' className='pt-4'>
							Asesoramiento
						</Link>
					</div>

					<div className='flex flex-col items-center justify-center pt-4'>
						<img
							className='h-[110px] md:h-[200px] lg:h-[300px]'
							src='/serviciocuatro.svg'
							alt='Imagen de hexagono '
						/>
						<Link to='/component/d-servicios/Accesibilidad' className='pt-4'>
							Accesibilidad
						</Link>
					</div>
				</div>
			</section>
			<section className='absolute top-0 left-0 flex justify-center items-center'>
				<img
					className='h-[20px] w-[20px] m-4'
					src='/icouno.svg'
					alt='Imagen de hexágono'
				/>
				<Link to='/'>Volver al inicio</Link>
			</section>
		</>
	);
}
