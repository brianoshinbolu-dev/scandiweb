import React from 'react';
import "./ProductCard.css"


const ProductCard = () => {
	return(
		<div className='product-container'>
			<input type='checkbox' className='delete-checkbox'/>
			<div className='product-info'>
				<p>Sku</p>
				<p>Name</p>
				<p>Price in $</p>
				<p> Weight</p>
			</div>
		</div>
		);
};

export default ProductCard;