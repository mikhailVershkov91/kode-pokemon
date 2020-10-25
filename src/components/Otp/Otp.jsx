import React from "react";
import s from "./Otp.module.css";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { checkOtp } from "../../store/authReducer";
import {
	required,
	maxLength5,
	number,
} from "../../utils/validators/validators";

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

const OtpForm = (props) => {
	const onClick = () => {
		alert("Your code is 12345");
	};

	return (
		<form onSubmit={props.handleSubmit}>
			<div className={s.formInputContainer}>
				<Field
					placeholder={"Code from SMS"}
					component={Input}
					name={"code"}
					validate={[required, maxLength5, number]}
					className={s.formInput}
				/>
				<div>
					<button onClick={onClick} className={s.buttonCode}>
						Get code
					</button>
				</div>
			</div>
			<div>
				<button className={s.formButton}>Submit</button>
			</div>
		</form>
	);
};

const OtpReduxForm = reduxForm({
	form: "code",
})(OtpForm);

const Otp = (props) => {
	const pin = "12345";

	const onSubmit = (formData) => {
		if (formData.code === pin) {
			props.checkOtp(true);
		} else {
			alert("Code is incorrect");
		}
	};

	if (props.isOtpCorrect === true) {
		return <Redirect to={"/pokemonslist"} />;
	}

	return (
		<div>
			<div className={`${s.standartSection} ${s.loginWrap}`}>
				<div className={s.container}>
					<h3 className={`${s.title} ${s.textCenter} ${s.textUppercase}`}>
						One time password
					</h3>
					<div className={s.row}>
						<div className={s.col4}>
							<div className={s.item}>
								<div className={`${s.form} ${s.textCenter}`}>
									<OtpReduxForm onSubmit={onSubmit} />
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
	isOtpCorrect: state.auth.isOtpCorrect,
});

export default connect(mapStateToProps, { checkOtp })(Otp);
