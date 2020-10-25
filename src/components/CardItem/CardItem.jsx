import React, { useState } from "react";
import s from "./CardItem.module.css";
// import ModalWindow from "../Modal/Modal";


const CardItem = (props) => {
	// const [show, setShow] = useState(false);

	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	return (
		<div>
			<div className={s.item2}>
				<img
					// onClick={handleShow}
					src={props.card.imageUrl}
					className={s.img}
					alt="Pokemon"
				></img>
				<span className={s.name}>{props.card.name}</span>
				<span className={s.artist}>{props.card.artist}</span>
			</div>
			{/* <ModalWindow show={show} onHide={handleClose}/> */}
		</div>
	);
};

export default CardItem;
