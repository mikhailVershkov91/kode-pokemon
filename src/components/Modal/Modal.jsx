import React from "react";

import s from "./Modal.module.css";
import { Modal } from "react-bootstrap";


const ModalWindow = (props) => {
	return (
		<Modal>
			<Modal.Header closeButton>
				<Modal.Title>Modal title</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>{props.info.name}</p>
			</Modal.Body>

			<Modal.Footer>
				{/* <Button variant="secondary">Close</Button> */}
			</Modal.Footer>
		</Modal>
	);
};

// const mapStateToProps = (state) => ({
// 	isAuth: state.auth.isAuth,
// 	isOtpCorrect: state.auth.isOtpCorrect,
// });

// export default connect(mapStateToProps, { toggleIsAuth, checkOtp })(Header);
export default ModalWindow;
