import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import { cartSelectItems } from "../../redux/cart/cartSelectors";
import { toggleCartHiddenAction } from "../../redux/cart/cartActions";

import "./style.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.length ? (
					cartItems.map(cartItem => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className="empty-message">Your cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					history.push("/checkout");
					dispatch(toggleCartHiddenAction());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: cartSelectItems,
});

export default connect(mapStateToProps)(withRouter(CartDropdown));
