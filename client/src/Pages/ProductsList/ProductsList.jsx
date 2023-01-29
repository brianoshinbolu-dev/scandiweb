import React, {useState, useEffect} from 'react';
import ProductCard from "../../Components/ProductCard.jsx"
import './ProductsList.css'
import axios from "axios"
import {Link} from "react-router-dom"

const ProductsList = () => {
	//Data goten from the database
	const [products, setProducts] = useState([]);

	//Function to get data from API
	const loadData = async() => {
		const response = await axios.get("http://localhost:5000/api/get");
		setProducts(response.data);
	};

	//use Effect to get data Once
	useEffect(() => {
		loadData();
	}, []);

	//Function to handle delete of data for database
	const handleDelete = () => {
		console.log()
		products.map(product  => {
			 if(product.checkbox === true) {
				axios.delete(`http://localhost:5000/api/remove/${product.Sku}`);
				setTimeout(() => loadData(), 300);
			 }
			}
		)
	}

	//Function to change the checkbox value
	const handleChecked = (Sku) => {
		setProducts(prevProducts => {
			return prevProducts.map(product => {
				return product.Sku === Sku ? {...product, checkbox : !product.checkbox} : product
			})
		})
	}


	return(
		<div className='container'>
			{/* Header */}
			<header>
				<h1>Products List</h1>
				<div>
					<Link to="/add"><button >ADD</button></Link>
					<button id="delete-product-btn" onClick={handleDelete}>MASS DELETE</button>
				</div>
			</header>

			{/* Product List */}
			<div className='list'>
				
				{/* Loop the array of data to list the products */}
				{
					products.map(product => 
					<ProductCard 
					key={product.Sku} 
					{...product} 
					handleChecked={() => handleChecked(product.Sku)}
					/>)
				}
			</div>

			<footer>
				<p>
					Scandiweb Test assignment
				</p>
			</footer>
		</div>
		);
};

export default ProductsList