import React from "react";
//import Preloader from '../preloader/Preloader';
import s from "./Header.module.css";
import logo from '../../img/pokemon-go.png';

const Header = () => {
	return (
		<div className={s.header}>
			<div
				className={`${s.container} ${s.dFlex} ${s.justifyContentBetween} ${s.alignItemsCenter}`}
			>
				<div>
						<img className={s.logo} src={logo} alt='Logo'/>
				</div>
				<nav className={s.headerNav}>
					<a href="#">Login</a>
				</nav>
			</div>
		</div>
	);
};

export default Header;
