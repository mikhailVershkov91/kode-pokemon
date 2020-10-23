import axios from "axios";

const instance = axios.create({
	// withCredentials: true,
	// baseURL: 'https://api.pokemontcg.io/v1/types',
});

export const pokemonsAPI = {
	getTypes() {
		return instance
			.get("https://api.pokemontcg.io/v1/types")
			.then((response) => response.data);
	},
	getSubtypes() {
		return instance
			.get("https://api.pokemontcg.io/v1/subtypes")
			.then((response) => response.data);
  },
  getCardsByType(type) {
    return instance
      .get(`https://api.pokemontcg.io/v1/cards?types=${type}`)
      .then((response) => response.data);
  },
  getCardsBySubtype(subtype) {
    return instance
      .get(`https://api.pokemontcg.io/v1/cards?subtype=${subtype}`)
      .then((response) => response.data);
  },
  getCardInformation(cardId) {
    return instance
      .get(`https://api.pokemontcg.io/v1/cards/${cardId}`)
      .then((response) => response.data);
  }
};
