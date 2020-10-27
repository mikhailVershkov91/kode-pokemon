import React from "react";

import s from "./Modal.module.css";
import { Modal } from "react-bootstrap";

const ModalWindow = (props) => {
	return (
		<Modal

		  className={s.modal}
			show={props.show}
			onHide={props.onHide}
			autoFocus={false}
		>
			<>
			<Modal.Header className={s.modalHeader} closeButton closeLabel>
				<Modal.Title><span>{props.card.name}</span>

				</Modal.Title>
			</Modal.Header>
			</>
			<>
			<Modal.Body className={s.modalBody}>
				<img src={props.card.imageUrl}></img>
			</Modal.Body>
			</>
			<>
			<Modal.Footer className={s.modalFooter}>
				<span>Rarity: {props.card.rarity}</span>
				<span>Series: {props.card.series}</span>
				<span>HP: {props.card.hp}</span>
			</Modal.Footer>
			</>
		</Modal>
	);
};

export default ModalWindow;
