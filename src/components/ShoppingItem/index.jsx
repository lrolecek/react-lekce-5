import React from 'react';

const ShoppingItem = ({product, amount, bought}) => {
	return (
		<li className={ bought ? 'koupeno' : ''}>
			<h3>{product}</h3>
			<p>koupit: {amount}</p>
		</li>
	)
}

export default ShoppingItem;