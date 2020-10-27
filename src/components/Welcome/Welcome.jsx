import React from "react";
import s from "./Welcome.module.css";
import arrow from "../../img/curved-arrow.png";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toggleIsAuth } from "../../store/authReducer";

const Welcome = (props) => {
	if (props.isAuth === true) {
		return <Redirect to={"/login"} />;
	}

	return (
		<div className={s.wrapper}>
			Welcome to my Pokemon app, please login to continue
			<div>
				<img className={s.arrow} src={arrow} alt="arrow" />
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { toggleIsAuth })(Welcome);
