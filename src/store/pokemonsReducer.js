import { pokemonsAPI } from "../plugins/axios/axios";

const SET_TYPES = "SET_TYPES";
const SET_SUBTYPES = "SET_SUBTYPES";
const SET_CARDSDATA = "SET_CARDSDATA";
const SET_CARD_INFO = "SET_CARD_INFO";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

const initialState = {
	pokemonTypes: [],
	pokemonSubtypes: [],
	cardsData: [],
	cardInfo: [],
	isFetching: true,
};

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
		dispatch(toggleIsFetching(false));
	};
};

export default pokemonsReducer;
