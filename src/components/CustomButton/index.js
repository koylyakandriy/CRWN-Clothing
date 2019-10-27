import React from 'react';

import './style.scss';

const CustomButton = ({ children, ...otherProps }) => {
	return (
		<div className="custom-button" {...otherProps}>
			{children}
		</div>
	);
};

export default CustomButton;
