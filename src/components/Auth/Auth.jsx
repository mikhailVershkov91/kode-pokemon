import React from "react";
//import Preloader from '../preloader/Preloader';
import s from "./Auth.module.css";
import Header from "../Header/Header";

const Auth = () => {
	return (
		<div>
			<Header />
			<div className={`${s.standartSection} ${s.loginWrap}`}>
				<div className={s.container}>
					<h3 className={`${s.title} ${s.textCenter} ${s.textUppercase}`}>
						Registration
					</h3>
					<div className={s.row}>
						<div className={s.col4}>
							<div className={s.item}>
								<div className={`${s.form} ${s.textCenter}`}>
									<div>
										<input className={s.formInput} type="text" placeholder="Login" />
									</div>
									<div>
										<input  className={s.formInput} type="text" placeholder="Password" />
									</div>
									<div>
										<button className={s.formButton}>Login</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Auth;
