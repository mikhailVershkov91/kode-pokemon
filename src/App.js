import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Otp from "./components/Otp/Otp";
import { Provider } from "react-redux";
import store from "./store/store";
import PokemonsListContainer from "./components/PokemonsList/PokemonsList";
import Header from "./components/Header/Header";
import CardInfo from "./components/CardInfo/CardInfo";
import Welcome from "./components/Welcome/Welcome";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="mainPage">
					<Header />
					<Route exact path="/" render={() => <Welcome />} />
					<Route path="/login" render={() => <Auth />} />
					<Route path="/otp" render={() => <Otp />} />
					<Route
						path="/pokemonslist"
						render={() => <PokemonsListContainer />}
					/>
					<Route path="/pokemoncard/:id" render={() => <CardInfo />} />
				</div>
			</div>
		);
	}
}

const MainApp = () => {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	);
};

export default MainApp;
