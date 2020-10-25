import React from "react";
// import Header from "../Header/Header";
import s from "./CardInfo.module.css";
import { withRouter, NavLink } from "react-router-dom";
import { getCardInfo } from "../../store/pokemonsReducer";
import { compose } from "redux";
import { connect } from "react-redux";
import Preloader from "../preloader/Preloader";

class cardInfo extends React.Component {
	componentDidMount() {
		this.props.getCardInfo(this.props.match.params.id);
	}

	render() {
		if (this.props.isFetching) {
			return <Preloader />;
		}

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
								<span className={s.info}>Name: {this.props.cardInfo.name}</span>
								<span className={s.info}>
									Type: {this.props.cardInfo.types}
								</span>
								<span className={s.info}>
									Subtype: {this.props.cardInfo.subtype}
								</span>
							</div>
							<hr></hr>
							{/* <div className={s.skillsInfo}>
								{this.props.cardInfo.attacks.map((attack, key) => (
									<div>
										<span className={s.skill}>Attack name: {attack.name} </span>
										<span className={s.skill}>Attack damage: {attack.damage}</span>
										<span className={s.skill}>Attack cost: {attack.cost[0]} </span>
										<span className={s.skill}>
											Evolves form: {this.props.cardInfo.evolvesFrom}{" "}
										</span>
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
)(cardInfo);
