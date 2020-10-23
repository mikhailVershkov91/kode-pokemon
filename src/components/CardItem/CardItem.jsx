import React from "react";
import s from "./CardItem.module.css";

const CardItem = (props) => {
	return (
		<div className={s.item2}>
			<img src={props.card.imageUrl} className={s.img} alt="Pokemon"></img>
			<span className={s.name}>{props.card.name}</span>
			<span className={s.artist}>{props.card.artist}</span>
		</div>
	);
};

export default CardItem;
