import React from 'react';
import {
	BsFacebook,
	BsTwitter,
	BsMailbox2,
	BsInstagram,
	BsLinkedin,
	BsGithub,
} from 'react-icons/bs';

export default function FooterSimple() {
	 const email = 'hexagonopaginasweb@gmail.com';
	return (
		<>
			<section
				className='isolate flex items-center justify-center'
				id='contacto'
			>
				<div className='hidden lg:block'></div>
				<div className='flex bg-transparent justify-center items-center'>
					<a
						href='https://www.facebook.com/profile.php?id=100092173717415'
						className='mr-6'
					>
						<BsFacebook className='h-10 w-10 fill-slate-700 hover:fill-sky-300' />
					</a>
					{/* <a href='#' className='mr-6'>
						<BsTwitter className='h-10 w-10 fill-slate-700 hover:fill-sky-300' />
					</a> */}
					<a href={`mailto:${email}`} className='mr-6'>
						<BsMailbox2 className='h-10 w-10 fill-slate-700 hover:fill-sky-300' />
					</a>
					<a href='https://www.instagram.com/conceptohexagono/' className='mr-6 '>
						<BsInstagram className='h-8 w-8 fill-slate-700 hover:fill-sky-300' />
					</a>
					{/* <a href='#' className='mr-6 '>
						<BsLinkedin className='h-8 w-8 fill-slate-700 hover:fill-sky-300' />
					</a> */}
					<a href='#' className='mr-6 '>
						<BsGithub className='h-8 w-8 fill-slate-700 hover:fill-sky-300' />
					</a>
				</div>
			</section>

			<section className='flex justify-center isolate mx-6 py-10 text-center md:text-left  '>
				<div className='flex items-center max-w-[420px] gap md:grid-cols-2 lg:grid-cols-4 '>
					<div className='flex flex-col items-center '>
						<div className='mb-4 flex font-bold  md:justify-start '>
							<div
								className='flex justify-center items-center
									 align-middle'
							>
								<img
									className='h-14 w-14'
									src='/newlogo.svg'
									alt='Logo de oclusion ambiental'
								/>
								hexagono
							</div>
						</div>

						<p className='w-auto text-sky-100 text-justify px-3'>
							Investigamos el desarrollo, desarrollamos en base a lo aprendido.
							Divulgamos para retornar al origen de todo, por la generosidad de
							los desarrolladores de la comunidad, a los cuales estamos
							enteramente agradecidos.
						</p>
					</div>
				</div>
			</section>
			<div className='p-20 text-center'>
				<a className='' href='#'>
					<span>2023, Hexágono.</span>
				</a>
			</div>
		</>
	);
}
