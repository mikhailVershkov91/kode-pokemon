import React from "react";
import Header from "../Header/Header";
import s from "./PCard.module.css";
import { withRouter, NavLink } from "react-router-dom";
import { getCardInfo } from "../../store/pokemonsReducer";
import { compose } from "redux";
import { connect } from "react-redux";
import Preloader from "../preloader/Preloader";

class PCard extends React.Component {
	componentDidMount() {
		this.props.getCardInfo(this.props.match.params.id);
	}

	render() {
		return (
			<div>
				{this.props.isFetching && <Preloader />}
				{!this.props.isFetching && (
					<div className={s.mainContainer}>
						{/* Image start*/}
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
								<h6 className={s.info}>Name: {this.props.cardInfo.name}</h6>
								<h6 className={s.info}>Type: {this.props.cardInfo.types}</h6>
								<h6 className={s.info}>
									Subtype: {this.props.cardInfo.subtype}
								</h6>
							</div>
							<hr></hr>
							{/* <div className={s.skillsInfo}>
								{this.props.cardInfo.attacks.map((attack, key) => (
									<div>
										<h6 className={s.skill}>Attack name: {attack.name} </h6>
										<h6 className={s.skill}>Attack damage: {attack.damage}</h6>
										<h6 className={s.skill}>Attack cost: {attack.cost[0]} </h6>
										<h6 className={s.skill}>
											Evolves form: {this.props.cardInfo.evolvesFrom}{" "}
										</h6>
									</div>
								))}
							</div> */}
						</div>
						{/* Pokemon Info end */}
						{/* Pokemon Title start */}
						<div className={s.titleContainer}>
							{/* <div className={s.sectionTitle}>
								{!this.props.cardInfo.ability.text && (
									<p className={s.title}>{"no info"}</p>
								)}
								<p className={s.title}>{this.props.cardInfo.ability.text}</p>
								<NavLink to={"/pokemonslist"}>
									<button className={s.button}>Back</button>
								</NavLink>
							</div> */}
						</div>
						{/* Pokemon Title end */}
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cardInfo: state.pokemons.cardInfo,
	isFetching: state.pokemons.isFetching,
});

export default compose(
	connect(mapStateToProps, { getCardInfo }),
	withRouter
)(PCard);
