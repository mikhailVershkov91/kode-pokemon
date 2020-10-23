import React from "react";
import s from "./Otp.module.css";

const Otp = () => {
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
									<div>
										<input
											className={s.formInput}
											type="text"
											placeholder="Code from SMS"
										/>
									</div>
									<div>
										<button className={s.formButton}>Send</button>
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

export default Otp;
