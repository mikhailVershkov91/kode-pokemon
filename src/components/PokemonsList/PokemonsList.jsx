import React, { useEffect, useState } from "react";
import Preloader from "../preloader/Preloader";
import s from "./PokemonsList.module.css";
import {
	getPokemonTypes,
	getPokemonSubtypes,
	getCardsByTypes,
	getCardsBySubtypes,
} from "../../store/pokemonsReducer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import CardItem from "../CardItem/CardItem";

const PokemonsList = ({
	getPokemonTypes,
	pokemonTypes,
	getPokemonSubtypes,
	pokemonSubtypes,
	getCardsByTypes,
	getCardsBySubtypes,
	cardsData,
	isFetching,
}) => {
	useEffect(() => {
		getPokemonTypes();
	}, [getPokemonTypes]);

	useEffect(() => {
		getPokemonSubtypes();
	}, [getPokemonSubtypes]);

	const [selectType, setSelectType] = useState("");

	useEffect(() => {
		getCardsByTypes(selectType);
	}, [getCardsByTypes, selectType]);

	const handleTypeChange = (event) => {
		setSelectType(event.target.value);
	};

	const [selectSubtype, setSelectSubtype] = useState("");

	useEffect(() => {
		getCardsBySubtypes(selectSubtype);
	}, [getCardsBySubtypes, selectSubtype]);

	const handleSubtypeChange = (event) => {
		setSelectSubtype(event.target.value);
	};

	// let pagesCount = Math.ceil(totalCardsCount/pageSize);
	// let pages = [];

	// for (let i=1; i <= pagesCount; i++) {
	// 	pages.push(i);
	// }

	// const handlePage = (event) => {
	// 	setCurrentPage(event.target.value)
	// }

	return (
		<div>
			{isFetching && <Preloader />}
			{/* <div>
				{pages.map(page => {
					return
					<p className={currentPage === page && s.selectedPage}
					onClick={handlePage}>{page}</p>
				})}

			</div> */}
			<div className={s.mainContainer}>
				<div className={s.list}>
					<div className={s.section}>
						<div className={s.item}>
							<label>Type</label>
							<select
								className={s.select}
								value={selectType}
								onChange={handleTypeChange}
							>
								{/* <option value="none" selected disabled hidden>
									Select an Option
								</option> */}
								{pokemonTypes.map((type, key) => (
									<option defaultValue={"Pisurka"} value={type} key={key}>
										{type}
									</option>
								))}
							</select>
						</div>
						<div className={s.item}>
							<label>Subtype</label>
							<select
								className={s.select}
								value={selectSubtype}
								onChange={handleSubtypeChange}
							>
								{pokemonSubtypes.map((subtype, key) => (
									<option value={subtype} key={key}>
										{subtype}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<div className={s.content}>
					<div className={s.col}>
						{cardsData.map((card, key) => (
							<NavLink to={"/pokemoncard/" + card.id}>
								<CardItem card={card} key={card.id} />
							</NavLink>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	pokemonTypes: state.pokemons.pokemonTypes,
	pokemonSubtypes: state.pokemons.pokemonSubtypes,
	cardsData: state.pokemons.cardsData,
	isFetching: state.pokemons.isFetching,
});

let PokemonsListContainer = connect(mapStateToProps, {
	getPokemonTypes,
	getPokemonSubtypes,
	getCardsByTypes,
	getCardsBySubtypes,
})(PokemonsList);

export default PokemonsListContainer;
