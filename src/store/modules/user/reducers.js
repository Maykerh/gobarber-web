const initialState = {
	profile: null
};

export default function user(state = initialState, action) {
	switch (action.type) {
		case '@auth/SIGN_IN_SUCCESS':
			return { ...state, profile: action.payload.user };
		case '@user/UPDATE_PROFILE_SUCCESS':
			console.tron.log(action);
			return { ...state, profile: action.payload.profile };
		default:
			return state;
	}
}
