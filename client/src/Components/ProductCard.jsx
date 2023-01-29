import React  from 'react';
import "./ProductCard.css"


const ProductCard = (props) => {

	//Deconstruct the Prosp data
	const {Sku, Name, Price, Size, Weight, Length, Width, Height, handleChecked, checkbox } = props

	

	return(
		// Product card
		<div className='product-container'>
			{/* Product Details */}
			<input type='checkbox' className='delete-checkbox' value={checkbox} checked={checkbox} onClick={() => handleChecked()}/>
			<div className='product-info'>
				<p>{Sku}</p>
				<p>{Name}</p>
				<p>{Price}.00 $</p>
				{Size && <p> Size: {Size} MB</p>}
				{Length && Width && Height && <p>Dimension:{Height}x{Width}x{Length}</p>}
				{Weight && <p> Weight: {Weight}KG</p>}
			</div>
		</div>
		);
};

export default ProductCard;