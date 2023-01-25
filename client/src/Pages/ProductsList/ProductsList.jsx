import React from 'react';
import ProductCard from "../../Components/ProductCard.jsx"
import './ProductsList.css'

const ProductsList = () => {
	return(
		<div className='container'>
		<header>
			<h1>Products List</h1>
			<div>
				<button >ADD</button>
				<button id="delete-product-btn">MASS DELETE</button>
			</div>
		</header>
		<div className='list'>
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
		</div>
		);
};

export default ProductsList