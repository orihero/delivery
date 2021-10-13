import { createSlice } from '@reduxjs/toolkit';

let initialState = {};

let userSlice = createSlice({
	initialState,
	name: 'user',
	reducers: {
		userLoggedIn: (state, action) => {
			return action.payload;
		},
		userLoggedOut: (state, action) => {
			return initialState;
		},
	},
});

export let { userLoggedIn, userLoggedOut } = userSlice.actions;
export let selectUser = (state) => state.user;

export default userSlice.reducer;
