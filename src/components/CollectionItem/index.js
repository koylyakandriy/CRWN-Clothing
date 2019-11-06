import React from "react";
import { connect } from "react-redux";

import CustomButton from "../CustomButton";
import { addItemAction } from "../../redux/cart/cartActions";

import "./style.scss";

const CollectionItem = ({ item, addItem }) => {
	const { name, imageUrl, price } = item;
	return (
		<div className="collection-item">
			<div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItemAction(item)),
});

export default connect(
	null,
	mapDispatchToProps,
)(CollectionItem);
