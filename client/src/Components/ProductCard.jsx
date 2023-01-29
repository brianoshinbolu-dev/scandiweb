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
				<p>Sku: {Sku}</p>
				<p>Name: {Name}</p>
				<p>Price: ${Price}</p>
				{Size && <p> Size: {Size}MB</p>}
				{Weight && <p> Weight: {Weight}g</p>}
				{Length && <p> Length: {Length}l</p>}
				{Width && <p> Width: {Width}w</p>}
				{Height && <p> Height: {Height}h</p>}
			</div>
		</div>
		);
};

export default ProductCard;