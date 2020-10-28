import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.pokemontcg.io/v1/",
});

export const pokemonsAPI = {
	getTypes() {
    return instance
    .get(`types`)
    .then((response) => response.data);
	},
	getSubtypes() {
    return instance
    .get(`subtypes`)
    .then((response) => response.data);
	},
	getCardsByType(type) {
		return instance
			.get(`cards?types=${type}`)
			.then((response) => response.data);
	},
	getCardsBySubtype(subtype) {
		return instance
			.get(`cards?subtype=${subtype}`)
			.then((response) => response.data);
	},
	getCardInformation(cardId) {
		return instance.get(`cards/${cardId}`).then((response) => response.data);
	},
};
