import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const PublishableKey = "pk_test_w49GtSyxqqUr2TD0NM5vZrM800e88Mxo75";
	const onToken = token => {
		alert("Payment Successful");
	};

	return (
		<div>
			<StripeCheckout
				label="Pay Now"
				name="CRWN Clothing"
				billingAdrdress
				shippingAddress
				image="https://svgshare.com/i/CUz.svg"
				description={`Your total is $${price}`}
				amount={priceForStripe}
				panelLabel="Pay Now"
				token={onToken}
				stripeKey={PublishableKey}
			/>
		</div>
	);
};

export default StripeCheckoutButton;
