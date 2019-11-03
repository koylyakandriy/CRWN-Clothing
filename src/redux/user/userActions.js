import { UserActionTypes } from "./userTypes";

export const setCurrentUserAction = user => ({
	type: UserActionTypes.SET_CURRENT_USER,
	payload: user,
});
