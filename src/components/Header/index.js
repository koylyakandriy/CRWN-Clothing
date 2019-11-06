import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";

import "./style.scss";

const Header = ({ currentUser, hidden }) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				{currentUser ? (
					<div className="option" onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/signin">
						SIGN IN
					</Link>
				)}
				<CartIcon />
			</div>
			{hidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser: currentUser,
	hidden: hidden,
});

// const mapStateToProps = state => ({
// 	currentUser: state.user.currentUser,
// 	hidden: state.cart.hidden
// });

export default connect(mapStateToProps)(Header);
