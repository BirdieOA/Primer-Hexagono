import React from 'react';

export default function Footerinterno() {
	return (
		<>
			<footer className='text-center text-neutral-600 lg:text-left'>
				<section
					className='iconos-redes isolate items-center justify-center border-neutral-200 lg:justify-between'
					id='footer'
				>
					<div className='flex bg-transparent justify-center items-center lg:mt-20 py-10'>
						<a href='/#tecnologias' alt='logo de hexágono'>
							<img
								className='h-24 w-24 hover:scale-105 ease-in duration-300'
								src='/newlogo.svg'
								alt=''
							/>
						</a>
						<a className='font-semibold' href='#'>
							<span className='hover:text-indigo-300 ease-in duration-300'>2023 Oclusion Ambiental Open Source </span>
						</a>
					</div>
				</section>
			</footer>
		</>
	);
}
