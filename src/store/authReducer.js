// actions
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";
const IS_OTP_CORRECT = "IS_OTP_CORRECT";

//state
const initialState = {
	isAuth: Boolean(localStorage.getItem("token")),
	isOtpCorrect: false,
};

//reducer
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_IS_AUTH: {
			return { ...state, isAuth: action.isAuth };
		}
		case IS_OTP_CORRECT: {
			return { ...state, isOtpCorrect: action.isOtpCorrect };
		}

		default:
			return state;
	}
};

//action creator
export const toggleIsAuth = (isAuth) => ({
	type: "TOGGLE_IS_AUTH",
	isAuth,
});

export const checkOtp = (isOtpCorrect) => ({
	type: "IS_OTP_CORRECT",
	isOtpCorrect,
});

export default authReducer;
