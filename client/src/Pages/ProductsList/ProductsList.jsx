import React from 'react';
import ProductCard from "../../Components/ProductCard.jsx"
import './ProductsList.css'
import {Link} from "react-router-dom"

const ProductsList = () => {
	return(
		<div className='container'>
		<header>
			<h1>Products List</h1>
			<div>
				<Link to="/add"><button >ADD</button></Link>
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