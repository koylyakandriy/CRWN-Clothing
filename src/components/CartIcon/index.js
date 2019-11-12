import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHiddenAction } from "../../redux/cart/cartActions";
import { selectCartItemsCount } from "../../redux/cart/cartSelectors";

import "./style.scss";

const CartIcon = ({ toggleCartHiddenAction, itemCount }) => {
	return (
		<div className="cart-icon" onClick={toggleCartHiddenAction}>
			<ShoppingIcon className="shopping-icon" />
			<span className="item-count">{itemCount}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

// const mapDispatchToProps = dispatch => ({
// 	toggleCartHidden: () => dispatch(toggleCartHiddenAction()),
// });

const mapDispatchToProps = {
	toggleCartHiddenAction,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CartIcon);
