import React from "react";
import Header from "../Header/Header";
import s from "./PCard.module.css";
import { withRouter } from "react-router-dom";
import { getCardInfo } from "../../store/pokemonsReducer";
import { compose } from "redux";
import { connect } from "react-redux";

class PCard extends React.Component {
	componentDidMount() {
		debugger;
		this.props.getCardInfo(this.props.match.params.id);
	}

	render() {
		return (
			<div>
				<Header />
				<div className={s.mainContainer}>
					{/* Image start*/}
					<div className={s.section}>
						<div>
							<a href="#" className={s.image}>
								<img src="" alt="Pokemon"></img>
							</a>
						</div>
					</div>
					{/* Image end */}
					{/* Pokemon Info start */}
					<div className={s.sectionInfo}>
						<div className={s.responseInfo}>
							<h6 className={s.info}>Name</h6>
							<h6 className={s.info}>Type</h6>
							<h6 className={s.info}>Subtype</h6>
						</div>
						<hr></hr>
						<div className={s.skillsInfo}>
							<h6 className={s.skill}>Attack damage</h6>
							<h6 className={s.skill}>Attack cost</h6>
							<h6 className={s.skill}>Resistances</h6>
							<h6 className={s.skill}>Evolves form</h6>
						</div>
					</div>
					{/* Pokemon Info end */}
					{/* Pokemon Title start */}
					<div className={s.titleContainer}>
						<div className={s.sectionTitle}>
							<p className={s.title}>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Doloremque suscipit repellendus exercitationem quibusdam, illo
								corrupti eaque eveniet velit quae repudiandae nobis unde laborum
								accusamus amet nostrum nihil delectus distinctio aperiam!
							</p>
						</div>
					</div>
					{/* Pokemon Title end */}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	cardInfo: state.pokemons.cardInfo,
});

export default compose(
	connect(mapStateToProps, { getCardInfo }),
	withRouter
)(PCard);
