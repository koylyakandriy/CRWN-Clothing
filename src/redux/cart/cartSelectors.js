import { createSelector } from "reselect";

const cartSelect = state => state.cart;

export const cartSelectItems = createSelector(
	[cartSelect],
	cart => cart.cartItems,
);

export const selectCartHidden = createSelector(
	[cartSelect],
	cart => cart.hidden,
);

export const selectCartItemsCount = createSelector(
	[cartSelectItems],
	cartItems =>
		cartItems.reduce(
			(accumulatedQuantity, cartItems) =>
				accumulatedQuantity + cartItems.quantity,
			0,
		),
);
