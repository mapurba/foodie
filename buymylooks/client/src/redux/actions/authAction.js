export default {
	LoginUser: (payload) => (dispatch) => {
		dispatch({
			type: 'LOGIN_SUCCESS',
			payload: payload
		})
	},
	LogoutUser: () => (dispatch) => {
		dispatch({
			type: 'LOGOUT_SUCCESS',
		})
	},
}