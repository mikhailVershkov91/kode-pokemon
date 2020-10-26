// import React, { useEffect, useState } from "react";
// //import Preloader from '../preloader/Preloader';
// import s from "./Sidebar.module.css";
// import {
// 	getPokemonTypes,
// 	getPokemonSubtypes,
// 	getCardsByTypes,
// 	getCardsBySubtypes,
// } from "../../../store/pokemonsReducer";
// import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
// import CardItem from "../../CardItem/CardItem";

// const Sidebar = ({
// 	getPokemonTypes,
// 	pokemonTypes,
// 	getPokemonSubtypes,
// 	pokemonSubtypes,
// 	getCardsByTypes,
// 	getCardsBySubtypes,
// 	cardsData,
// }) => {
// 	useEffect(() => {
// 		getPokemonTypes();
// 	}, [getPokemonTypes]);

// 	useEffect(() => {
// 		getPokemonSubtypes();
// 	}, [getPokemonSubtypes]);

// 	const [selectType, setSelectType] = useState("");

// 	useEffect(() => {
// 		getCardsByTypes(selectType);
// 	}, [getCardsByTypes, selectType]);

// 	const handleTypeChange = (event) => {
// 		setSelectType(event.target.value);
// 	};

// 	const [selectSubtype, setSelectSubtype] = useState("");

// 	useEffect(() => {
// 		getCardsBySubtypes(selectSubtype);
// 	}, [getCardsBySubtypes, selectSubtype]);

// 	const handleSubtypeChange = (event) => {
// 		setSelectSubtype(event.target.value);
// 	};

// 	// let pagesCount = Math.ceil(totalCardsCount/pageSize);
// 	// let pages = [];

// 	// for (let i=1; i <= pagesCount; i++) {
// 	// 	pages.push(i);
// 	// }

// 	// const handlePage = (event) => {
// 	// 	setCurrentPage(event.target.value)
// 	// }

// 	return (
// 		<div>
// 			{/* <div>
// 				{pages.map(page => {
// 					return
// 					<p className={currentPage === page && s.selectedPage}
// 					onClick={handlePage}>{page}</p>
// 				})}

// 			</div> */}
// 			<div className={s.mainContainer}>
// 				<div className={s.sideBar}>
// 					<div className={s.section}>
// 						<div className={s.item}>
// 							<select
// 								className={s.select}
// 								value={selectType}
// 								onChange={handleTypeChange}
// 							>
// 								{pokemonTypes.map((type, key) => (
// 									<option value={type} key={key}>
// 										{type}
// 									</option>
// 								))}
// 							</select>
// 						</div>
// 						<div className={s.item}>
// 							<select
// 								className={s.select2}
// 								value={selectSubtype}
// 								onChange={handleSubtypeChange}
// 							>
// 								{pokemonSubtypes.map((subtype, key) => (
// 									<option value={subtype} key={key}>
// 										{subtype}
// 									</option>
// 								))}
// 							</select>
// 						</div>
// 					</div>
// 				</div>
// 				<div className={s.content}>
// 					<div className={s.col}>
// 						{cardsData.map((card, key) => (
// 							<NavLink to={"/pokemoncard/" + card.id}>
// 								<CardItem card={card} key={card.id}/>
// 							</NavLink>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// const mapStateToProps = (state) => ({
// 	pokemonTypes: state.pokemons.pokemonTypes,
// 	pokemonSubtypes: state.pokemons.pokemonSubtypes,
// 	cardsData: state.pokemons.cardsData,
// });

// let SidebarContainer = connect(mapStateToProps, {
// 	getPokemonTypes,
// 	getPokemonSubtypes,
// 	getCardsByTypes,
// 	getCardsBySubtypes,
// })(Sidebar);

// export default SidebarContainer;

<div className={s.mainContainer}>
						{/* Image start*/}
						<div className={s.infoTop}>
							<div className={s.section}>
								<div>
									<img
										src={this.props.cardInfo.imageUrl}
										className={s.image}
										alt="Pokemon"
									></img>
								</div>
							</div>
							{/* Image end */}
							{/* Pokemon Info start */}
							<div className={s.sectionInfo}>
								<div className={s.responseInfo}>
									<span className={s.info}>
										Name: {this.props.cardInfo.name}
									</span>
									<span className={s.info}>
										Type: {this.props.cardInfo.types}
									</span>
									<span className={s.info}>
										Subtype: {this.props.cardInfo.subtype}
									</span>
								</div>
								<hr></hr>
								<div className={s.skillsInfo}>
									{/* {this.props.cardInfo.attacks.map((attack, key) => (
									<div>
										<span className={s.skill}>Attack name: {attack.name} </span>
										<span className={s.skill}>Attack damage: {attack.damage}</span>
										<span className={s.skill}>Attack cost: {attack.cost[0]} </span>
										<span className={s.skill}>
											Evolves form: {this.props.cardInfo.evolvesFrom}{" "}
										</span>
									</div>
								))} */}
								</div>
							</div>
						</div>
						{/* Pokemon Info end */}
						{/* Pokemon Title start */}
						<div className={s.sectionTitle}>
							gvbhnjj
							{/* {!this.props.cardInfo.ability.text && (
									<p className={s.title}>{"no info"}</p>
								)}
								<p className={s.title}>{this.props.cardInfo.ability.text}</p>
								<NavLink to={"/pokemonslist"}>
									<button className={s.button}>Back</button>
								</NavLink> */}
						</div>
						{/* Pokemon Title end */}
					{/* </div> */}