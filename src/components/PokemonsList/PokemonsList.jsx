import React from "react";
//import Preloader from '../preloader/Preloader';
import s from "./PokemonsList.module.css";
import HeaderPok from "./HeaderPok/HeaderPok";
import Sidebar from "./Sidebar/Sidebar";
// import { getPokemonTypes } from "../../store/pokemonsReducer";
// import { connect } from "react-redux";

const PokemonsList = (props) => {
	// props.getPokemonTypes();

	return (
		<div>
			{/* <HeaderPok /> */}
			<div className={s.container}>
				<Sidebar />
			</div>
		</div>
	);
};

// const mapStateToProps = (state) => ({
// 	pokemonTypes: state.pokemons.pokemonTypes,
// });

// let PokemonsListContainer = connect(mapStateToProps, { getPokemonTypes })(
// 	PokemonsList
// );

// export default PokemonsListContainer;

export default PokemonsList;
