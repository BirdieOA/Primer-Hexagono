import React from 'react';
import { Link } from 'react-router-dom';

export default function Marketing() {
	return (
		<>
			<section>
				<div className='relative bg-transparent'>
					<div className='absolute top-0 left-0 flex justify-center items-center'>
						<img
							className='h-[20px] w-[20px] m-4'
							src='/icouno.svg'
							alt='Imagen de hexágono'
						/>
						<Link
							to='/component/d-servicios/CuatroServicios'
							className='cursor-pointer'
						>
							<h1 className=''>Volver a servicios</h1>
						</Link>
					</div>
				</div>
			</section>
			<section className='h-screen'>
				<div className='pt-40 lg:px-40 text-justify px-4'>
					<img className='h-32 w-32' src='/icodos.svg' alt='' />
					<div className='lg:pl-40 font-bold text-2xl'>
						{' '}
						<p className='font-abrilFatface font-extralight text-6xl pb-20'>
							Marketing
						</p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
						tempore aliquam totam voluptate quisquam animi vel, voluptates
						perspiciatis hic odio aperiam necessitatibus laudantium ducimus
						facere culpa labore est debitis. Cupiditate!
					</div>
				</div>
			</section>
		</>
	);
}
