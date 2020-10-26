import { pokemonsAPI } from "../plugins/axios/axios";

// actions
const SET_TYPES = "SET_TYPES";
const SET_SUBTYPES = "SET_SUBTYPES";
const SET_CARDSDATA = "SET_CARDSDATA";
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_CARD_INFO = "SET_CARD_INFO";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

//state
const initialState = {
	pokemonTypes: [],
	pokemonSubtypes: [],
	cardsData: [],
	cardInfo: [],
	isFetching: true,
	// pageSize: 6,
	// totalCardsCount: 0,
	// currentPage: 1
};

//reducer
const pokemonsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TYPES: {
			return { ...state, pokemonTypes: action.pokemonTypes };
		}
		case SET_SUBTYPES: {
			return { ...state, pokemonSubtypes: action.pokemonSubtypes };
		}
		case SET_CARDSDATA: {
			return { ...state, cardsData: action.cardsData };
		}
		// case SET_CURRENT_PAGE: {
		// 	return { ...state, currentPage: action.currentPage };
		// }
		// case SET_TOTAL_CARDS_COUNT: {
		// 	return { ...state, totalCardsCount: action.totalCardsCount };
		// }
		case SET_CARD_INFO: {
			return { ...state, cardInfo: action.cardInfo };
		}
		case TOGGLE_IS_FETCHING: {
			return { ...state, isFetching: action.isFetching };
		}
		default:
			return state;
	}
};

//action creator
export const setPokemonTypes = (pokemonTypes) => ({
	type: "SET_TYPES",
	pokemonTypes,
});

export const setPokemonSubtypes = (pokemonSubtypes) => ({
	type: "SET_SUBTYPES",
	pokemonSubtypes,
});

export const setCardsData = (cardsData) => ({
	type: "SET_CARDSDATA",
	cardsData,
});

export const setCardInfo = (cardInfo) => ({
	type: "SET_CARD_INFO",
	cardInfo,
});

export const toggleIsFetching = (isFetching) => ({
	type: "TOGGLE_IS_FETCHING",
	isFetching,
});

// export const setCurrentPage = (currentPage) => ({
// 	type: "SET_CURRENT_PAGE",
// 	currentPage,
// });

// export const setTotalCardsCount = (totalCardsCount) => ({
// 	type: "SET_TOTAL_CARDS_COUNT",
// 	totalCardsCount,
// });

//thunk creator
export const getPokemonTypes = () => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const response = await pokemonsAPI.getTypes();
		dispatch(setPokemonTypes(response.types));
		dispatch(toggleIsFetching(false));
	};
};

export const getPokemonSubtypes = () => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const response = await pokemonsAPI.getSubtypes();
		dispatch(setPokemonSubtypes(response.subtypes));
		dispatch(toggleIsFetching(false));
	};
};

export const getCardsByTypes = (type, page, pageSize) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const response = await pokemonsAPI.getCardsByType(type, pageSize);
		dispatch(setCardsData(response.cards));
		dispatch(toggleIsFetching(false));
	};
};

export const getCardsBySubtypes = (subtype) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const response = await pokemonsAPI.getCardsBySubtype(subtype);
		dispatch(setCardsData(response.cards));
		dispatch(toggleIsFetching(false));
	};
};

export const getCardInfo = (cardId) => {
	return async (dispatch) => {
		dispatch(toggleIsFetching(true));
		const response = await pokemonsAPI.getCardInformation(cardId);
		dispatch(setCardInfo(response.card));
		console.log(response.card);
		dispatch(toggleIsFetching(false));
	};
};

// getCardInfo

// export const getPage = (page) => {
// 	return async (dispatch) => {
// 		const response = await pokemonsAPI.getPage(page);
//     dispatch(setCurrentPage(response.page));
// 	};
// };

export default pokemonsReducer;
