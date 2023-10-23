import React from 'react';
import {
	BsFacebook,
	BsTwitter,
	BsMailbox2,
	BsInstagram,
	BsLinkedin,
	BsGithub,
} from 'react-icons/bs';

export default function Footer() {
	return (
		<>
			<div
				className='mx-auto max-w-7xl bg-gray-950 select-none pb-20'
				id='contacto'
			>
				<footer className='  text-center text-neutral-600 lg:text-left'>
					<div className=''></div>
					<div className='isolate items-center justify-center border-neutral-200 lg:justify-between'>
						<div className='hidden lg:block'></div>

						<div className='flex bg-transparent justify-center items-center'>
							<a href='#' className='mr-6'>
								<BsFacebook className='h-10 w-10 fill-slate-700 hover:fill-sky-300' />
							</a>
							<a href='#' className='mr-6'>
								<BsTwitter className='h-10 w-10 fill-slate-700 hover:fill-sky-300' />
							</a>
							<a href='#' className='mr-6'>
								<BsMailbox2 className='h-10 w-10 fill-slate-700 hover:fill-sky-300' />
							</a>
							<a href='#' className='mr-6 '>
								<BsInstagram className='h-8 w-8 fill-slate-700 hover:fill-sky-300' />
							</a>
							<a href='#' className='mr-6 '>
								<BsLinkedin className='h-8 w-8 fill-slate-700 hover:fill-sky-300' />
							</a>
							<a href='#' className='mr-6 '>
								<BsGithub className='h-8 w-8 fill-slate-700 hover:fill-sky-300' />
							</a>
						</div>
					</div>

					<div className='isolate mx-6 py-10 text-center md:text-left'>
						<div className='grid-1 grid gap md:grid-cols-2 lg:grid-cols-4'>
							<div className='flex flex-col'>
								<div className='mb-4 flex font-bold  md:justify-start'>
									<div
										className='flex justify-center items-center
									 align-middle'
									>
										<img
											className='h-14 w-14 mr-8'
											src='/newlogo.svg'
											alt='Logo de oclusion ambiental'
										/>
										hexagonal
									</div>
								</div>

								<p className='w-[250px] text-sky-100 text-justify px-3'>
									Investigamos el desarrollo, desarrollamos en base a lo
									aprendido. Divulgamos para retornar al origen de todo, por la
									generosidad de los desarrolladores de la comunidad, a los
									cuales estamos enteramente agradecidos.
								</p>
							</div>

							<div className='flex flex-col justify-start items-center'>
								<h6 className='mb-4 flex justify-center text-2xl font-bold uppercase md:justify-start'>
									Navegacion
								</h6>
								<p className='text-lg mb-4'>
									<a href='#inicio' className='text-neutral-100 '>
										inicio
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#servicios' className='text-neutral-100 '>
										servicios
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#productos' className='text-neutral-100 '>
										productos
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#blog' className='text-neutral-100 '>
										blog
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#presupuestos' className='text-neutral-100 '>
										presupuestos
									</a>
								</p>
							</div>

							<div className='flex flex-col justify-start items-center'>
								<h6 className='mb-4 flex justify-center text-2xl font-semibold uppercase md:justify-start'>
									2
								</h6>
								<p className='text-lg mb-4'>
									<a href='#!' className='text-neutral-100 '>
										Diseño Web
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#!' className='text-neutral-100 '>
										React
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#!' className='text-neutral-100 '>
										Vue
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#' className='text-neutral-100 '>
										Laravel
									</a>
								</p>
							</div>

							<div className='flex flex-col justify-start items-center'>
								<h6 className='mb-4 flex justify-center text-2xl font-semibold uppercase md:justify-start'>
									Productos
								</h6>
								<p className='text-lg mb-4'>
									<a href='#!' className='text-neutral-100 '>
										Diseño Web
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#!' className='text-neutral-100 '>
										React
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#!' className='text-neutral-100 '>
										Vue
									</a>
								</p>
								<p className='text-lg mb-4'>
									<a href='#' className='text-neutral-100 '>
										Laravel
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className='p-6 text-center'>
						<a className='' href='#'>
							<span>2023 Oclusion Ambiental Open Source </span>
						</a>
					</div>
				</footer>
			</div>
		</>
	);
}
