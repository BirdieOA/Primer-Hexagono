import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

const Navegacion = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 0) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 p-8 transition duration-500 text-lg ${
				isVisible ? 'opacity-100 bg-slate-800/30 backdrop-blur-md' : 'opacity-0'
			}`}
		>
			<NavBar />
		</nav>
	);
};

export default Navegacion;
