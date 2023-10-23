import React from 'react';

const ServiciosTitulo = () => {
	return (
		<>
			<div
				className='flex flex-col justify-center items-center pt-20 lg:pt-10 mx-auto  max-w-2xl lg:text-center'
				id='servicios'
			>
				<h2
					className='text-7xl font-abrilFatface leading-7 text-neutral-300 pb-20'
					data-aos='fade-up'
					data-aos-duration='1000'
				>
					<div
						className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
						aria-hidden='true'
					>
						<div
							className='aspect-[1200/745] lg:aspect-[900/845] sm:w-[10.5625rem] w-[20.5625rem] lg:w-[42.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20 rotate-90'
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
							}}
						/>
					</div>
					<div className='font-abrilFatface text-5xl lg:text-7xl p-4 lg:pt-6 text-sky-500'>
						Desarrollo Web
					</div>
				</h2>
				<p
					className='mt-4 font-bold text-3xl sm:text-6xl lg:text-xl text-indigo-300 pb-8 p-4 lg:p-0 '
					data-aos='fade-right'
					data-aos-duration='1000'
				>
				Herramientas y Tecnologías que utilizamos para desarrollar tu sitio Web
				</p>
				<div
					className=' flex flex-col justify-center items-center mt-3 text-2xl leading-7 text-neutral-100 '
					data-aos='fade-down'
					data-aos-duration='3000'
				>
					<p className='p-4'>
						La información necesaria para entender como funciona
					</p>
					<br />
					<br />
					<div className=' flex flex-col justify-start lg:flex-row lg:justify-between gap-2 lg:gap-20'>
						<div className='flex justify-center items-center lg:flex-row'>
							<img
								src='icouno.svg'
								className='h-6 w-6'
								alt='icono de sky de oclusion ambiental'
							/>
							<a href='#tecnologias' className='pl-4 '>
								Saber más
							</a>
						</div>
						<div className='flex items-center'>
							<img
								src='icouno.svg'
								className='h-6 w-6'
								alt='icono de sky de oclusion ambiental'
							/>
							<a href='#presupuestos' className='pl-4'>
								Contactanos
							</a>
						</div>
					</div>

					<div
						className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
						aria-hidden='true'
					>
						<div
							className='aspect-[1155/678] h-[25.1875rem]  w-[0.1875rem] md:h-[45.1875rem] md:w-[23.1875rem] lg:h-[50.1875rem] lg:w-[80.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] rotate-45 opacity-30'
							style={{
								clipPath:
									'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 10.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%)',
							}}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default ServiciosTitulo;
