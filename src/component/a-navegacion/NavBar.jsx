import React from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { BiMenu, BiX } from 'react-icons/bi';

const navigation = [
	{ name: 'Inicio', href: '#inicio' },
	{ name: 'Nosotros', href: '#nosotros' },
	{ name: 'Planes', href: '#planes' },
	{ name: 'Faq', href: '#faq' },
	{ name: 'Presuspuestos', href: '#presupuestos' },
	{ name: 'Contacto', href: '#contacto' },
];

export default function NavBar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const handleClick = () => {
		setMobileMenuOpen(false);
	};

	return (
		<>
			<div className='mx-auto max-w-2xl'>
				<header className='absolute inset-x-0 top-0 z-50'>
					<nav
						className='flex items-center justify-between p-2 lg:px-8 '
						aria-label='Global'
					>
						<div className='flex lg:flex-1'>
							<a href='/' className='-m-3.5 p-1.5 pt-3'>
								<span className='sr-only'>Your Company</span>
								<img className='h-12 w-auto' src='./newlogo.svg' alt='' />
							</a>
						</div>
						<div className='flex lg:hidden'>
							<button
								type='button'
								className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
								onClick={() => setMobileMenuOpen(true)}
							>
								<span className='sr-only'>Open main menu</span>
								<BiMenu
									className='h-8 w-8 fill-sky-400'
									aria-hidden='true'
								/>
							</button>
						</div>
						<div className='hidden lg:flex lg:gap-x-12'>
							{navigation.map(item => (
								<a
									key={item.name}
									href={item.href}
									className='text-md leading-6 text-white font-bold hover:text-blue-400 ease-in duration-300 '
								>
									{item.name}
								</a>
							))}
						</div>
						<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
							<img
								className='absolute top-[640px] right-5 h-12 w-12 animate-spin'
								src='/newlogo.svg'
								alt=''
							/>
							<a
								href='https://wa.me/54294438098'
								className='absolute top-[640px] right-5 h-12 w-12 '
							></a>
						</div>
					</nav>
					<Dialog
						as='div'
						className='lg:hidden'
						open={mobileMenuOpen}
						onClose={setMobileMenuOpen}
					>
						<div className='fixed inset-0 z-50' />
						<Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-800 backdrop-blur bg-opacity-80 px-4 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
							<div className='flex items-center justify-between'>
								<a href='/' className='-m-1.5 p-1.5'>
									<span className='sr-only'>Your Company</span>
									<img className='h-12 w-auto' src='./newlogo.svg' alt='' />
								</a>
								<button
									type='button'
									className='-m-2.5 rounded-md p-2.5 text-gray-700'
									onClick={() => setMobileMenuOpen(false)}
								>
									<span className='sr-only'>Close menu</span>
									<BiX
										className='h-8 w-8 fill-sky-400 opacity-90'
										aria-hidden='true'
									/>
								</button>
							</div>
							<div className='mt-6 flow-root'>
								<div className='-my-6 divide-y divide-gray-100/70'>
									<div className='space-y-2 py-6'>
										{navigation.map(item => (
											<a
												key={item.name}
												href={item.href}
												className='-mx-3 block rounded-lg px-3 py-2 text-sky-200 leading-7  hover:bg-sky-800 hover:text-sky-100 hover:font-bold ease-in duration-300'
												onClick={handleClick}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
						</Dialog.Panel>
					</Dialog>
				</header>
			</div>
		</>
	);
}
