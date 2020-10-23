import React from "react";
//import Preloader from '../preloader/Preloader';
import s from "./HeaderPok.module.css";
import logo from '../../../img/pokemon-go.png';

const HeaderPok = () => {
	return (
		<div className={s.header}>
			<div
				className={`${s.container} ${s.dFlex} ${s.justifyContentBetween} ${s.alignItemsCenter}`}
			>
				<div>
						<img className={s.logo} src={logo} alt='Logo'/>
				</div>
				<nav className={s.headerNav}>
					<a href="#">Logout</a>
				</nav>
			</div>
		</div>
	);
};

export default HeaderPok;
