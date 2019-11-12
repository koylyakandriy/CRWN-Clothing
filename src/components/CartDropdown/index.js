import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartItem from "../CartItem";
import CustomButton from "../CustomButton";
import { cartSelectItems } from "../../redux/cart/cartSelectors";

import "./style.scss";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className="cart-dropdown">
			<div className="cart-items">
				{cartItems.map(cartItem => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: cartSelectItems,
});

export default connect(mapStateToProps)(CartDropdown);
