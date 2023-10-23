import React from 'react';

import Navegacion from '../component/a-navegacion/Navegacion';
import Inicio from '../component/b-inicio/Inicio';
import Nosotros from '../component/c-nosotros/Nosotros';
import Servicios from '../component/d-servicios/Servicios';
import Productos from '../component/e-productos/Productos';
import Faq from '../component/f-faq/Faq';
import Presupuestos from '../component/h-presupuestos/Presupuestos';
import FooterSimple from '../component/j-footer/FooterSimple';
import SvgFooter from '../component/j-footer/SvgFooter';

export default function Hexagono() {
	return (
		<>
			<Navegacion />
			<Inicio />
			<Nosotros />
			<Servicios />
			<Productos />
			<Faq />
			<Presupuestos />
			<SvgFooter />
			<FooterSimple />
		</>
	);
}
