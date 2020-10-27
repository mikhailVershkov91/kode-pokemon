import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Otp from "./components/Otp/Otp";
import { Provider } from "react-redux";
import store from "./store/store";
// import PokemonsList from "./components/PokemonsList/PokemonsList";
// import PokemonCard from "./components/PokemonCard/PokemonCard";
import PokemonsListContainer from "./components/PokemonsList/PokemonsList";
// import PCard from "./components/PCard/PCard";
import Preloader from "./components/preloader/Preloader";
import Header from "./components/Header/Header";
import CardInfo from "./components/CardInfo/CardInfo";
import Welcome from "./components/Welcome/Welcome";

// const PCard = lazy(() => import("./components/PCard/PCard"));

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="mainPage">
					<Header />
					<Route exact path="/Pokemon" render={() => <Welcome />} />
					<Route path="/login" render={() => <Auth />} />
					<Route path="/otp" render={() => <Otp />} />
					<Route
						path="/pokemonslist"
						render={() => <PokemonsListContainer />}
					/>
					{/* <Suspense fallback={<Preloader />}> */}
					<Route path="/pokemoncard/:id" render={() => <CardInfo />} />
					{/* </Suspense> */}
				</div>
			</div>
		);
	}
}

const MainApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	);
};

export default MainApp;

/* <Route path="/pokemoncard/:id" render={() => <PCard />} /> */
