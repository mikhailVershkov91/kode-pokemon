import React from "react";
//import Preloader from '../preloader/Preloader';
import s from "./Auth.module.css";
import { reduxForm, Field } from "redux-form";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { toggleIsAuth } from "../../store/authReducer";
import {
	required,
	maxLength15,
	email,
} from "../../utils/validators/validators";
// import { Input } from "../common/FormsControls/FormsControls";

const Input = ({ input, meta, ...props }) => {
	const hasError = meta.touched && meta.error;

	return (
		<div className={`${s.formControl} ${hasError ? s.error : ""}`}>
			<div>
				<input {...input} {...props} />
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
	);
};

const LoginForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={s.formInputContainer}>
				<Field
					placeholder={"Login"}
					component={Input}
					name={"login"}
					validate={[required, maxLength15, email]}
					className={s.formInput}
				/>
			</div>
			<div className={s.formInputContainer}>
				<Field
					placeholder={"Password"}
					component={Input}
					name={"password"}
					validate={[required, maxLength15]}
					type={"password"}
					className={s.formInput}
				/>
			</div>
			<div>
				<button className={s.formButton}>Submit</button>
			</div>
		</form>
	);
};

const AuthReduxForm = reduxForm({
	form: "login",
})(LoginForm);

const Auth = (props) => {
	const token = localStorage.getItem("token");
	console.log(token);

	props.toggleIsAuth(true);

	if (token == null) {
		props.toggleIsAuth(false);
	}

	const onSubmit = (formData, e) => {
		// e.preventDefault();
		if (formData.login === "kode@kode.ru" && formData.password === "b") {
			localStorage.setItem("token", "logged_in_already");
			props.toggleIsAuth(true);
		} else {
			alert("Email or password is incorrect");
		}
	};

	if (props.isAuth === true) {
		return <Redirect to={"/otp"} />;
	}

	return (
		<div>
			<div className={`${s.standartSection} ${s.loginWrap}`}>
				<div className={s.container}>
					<h3 className={`${s.title} ${s.textCenter} ${s.textUppercase}`}>
						Login
					</h3>
					<div className={s.row}>
						<div className={s.col4}>
							<div className={s.item}>
								<div className={`${s.form} ${s.textCenter}`}>
									<AuthReduxForm onSubmit={onSubmit} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { toggleIsAuth })(Auth);
