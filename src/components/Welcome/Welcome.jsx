import React from "react";
import s from "./Welcome.module.css";
import arrow from "../../img/curved-arrow.png";

const Welcome = () => {
	return (
		<div className={s.wrapper}>
			Welcome to my Pokemon app, please login to continue
			<div>
				<img className={s.arrow} src={arrow} alt="arrow" />
			</div>
		</div>
	);
};

export default Welcome;
