export default (state = {}, action) => {
	switch (action.type) {
		case 'LOGIN_SUCCESS':
			return action.payload;
		case 'LOGOUT_SUCCESS':
			return {};
		default:
			return state;
	}
}