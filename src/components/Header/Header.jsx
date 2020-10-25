import React from "react";

import s from "./Header.module.css";
import logo from "../../img/pokemon-go.png";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { toggleIsAuth, checkOtp } from "../../store/authReducer";

const Header = (props) => {
	const onClick = () => {
		localStorage.removeItem("token");
		props.toggleIsAuth(false);
		props.checkOtp(false);
	};

	return (
		<div className={s.header}>
			<div
				className={`${s.container} ${s.dFlex} ${s.justifyContentBetween} ${s.alignItemsCenter}`}
			>
				<div>
					<img className={s.logo} src={logo} alt="Logo" />
				</div>
				<nav className={s.headerNav}>
					{props.isAuth && (
						<NavLink onClick={onClick} to={"/login"}>
							Logout
						</NavLink>
					)}
					{!props.isAuth && <NavLink to={"/login"}>Login</NavLink>}
				</nav>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	isOtpCorrect: state.auth.isOtpCorrect,
});

export default connect(mapStateToProps, { toggleIsAuth, checkOtp })(Header);
