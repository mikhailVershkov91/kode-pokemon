import React, { useState } from "react";
import s from "./CardItem.module.css";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ModalWindow from "../Modal/Modal";

const CardItem = (props) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<div className={s.item2}>
				<NavLink to={"/pokemoncard/" + props.card.id}>
					<img src={props.card.imageUrl} className={s.img} alt="Pokemon"></img>
					<span className={s.name}>{props.card.name}</span>
					<span className={s.artist}>{props.card.artist}</span>
				</NavLink>
				<Button className={s.button} onClick={handleShow}>
					More
				</Button>{" "}
			</div>
			<ModalWindow card={props.card} show={show} onHide={handleClose} />
		</div>
	);
};

export default CardItem;
