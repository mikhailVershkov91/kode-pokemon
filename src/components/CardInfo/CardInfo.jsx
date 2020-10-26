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
			<div className={s.mainContainer}>
				{/* {this.props.isFetching && <Preloader />} */}
				<div className={s.infoTop}>
					<div className={s.cardImage}>
						<img src={this.props.cardInfo.imageUrl} />
					</div>
					<div className={s.cardInfo}>
						<div className={s.information}>
							<div>
								<span>Name:</span> {this.props.cardInfo.name}
							</div>
							<div>
								<span>Type:</span> {this.props.cardInfo.types}
							</div>
							<div>
								<span>Subtype:</span> {this.props.cardInfo.subtype}
							</div>
							<hr></hr>
						</div>
						<div className={s.information}>
							<div>
								<span>Attack name:</span> {this.props.cardInfo.attacks[0].name}
							</div>
							<div>
								<span>Attack damage:</span> {this.props.cardInfo.attacks[0].damage}
							</div>
							<div>
								<span>Attack cost:</span> {this.props.cardInfo.attacks[0].cost[0]}
							</div>
							<div>
								<span>Evolves form:</span> {this.props.cardInfo.evolvesFrom}
							</div>
						</div>
					</div>
				</div>
				<div className={s.infoBottom}>
					<span>{this.props.cardInfo.attacks[0].text}</span>
				</div>
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
