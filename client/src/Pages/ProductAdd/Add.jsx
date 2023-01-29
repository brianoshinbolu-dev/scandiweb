import React, { useState } from 'react';
import './Add.css'
import { useNavigate, Link } from "react-router-dom";
import axios from "axios"


const Add = () => {
	const history = useNavigate();

	//State to keep record of the product type (book, disc or furnitur)
	const [productType, setProductType] = useState("")

	//State to temporaly store the info of product before sending to database
	const [product, setProduct] = useState({
		Sku : "",
		Name : "",
		Price : "",
		Size : "",
		Weight : "",
		Length: "",
		Width : "",
		Height : "",
		checkbox : false
	})

	//Destruturing of the product state
	const {
			Sku ,
			Name,
			Price,
			Size,
			Weight,
			Length,
			Width,
			Height,
			checkbox
		} = product
	
	//handle all product input
	const handleInput = (e) => {
		const {name, value} = e.target
		setProduct(prevProduct => ({
			...prevProduct,
			[name] : value
		}))
		// console.log(product)
	}
	

	//Handle type Change
	const handleType = (e) => {
		setProductType(e.target.value);
		// console.log(productType)
	}

	//Handling the submit of the data
	
	const handlesubmit = (e) => {
		e.preventDefault();
		if(!Sku || !Name || !Price){
			alert("Please, submit all required data");
		}else{
			axios.post("http://localhost:5000/api/post", {
				Sku ,
				Name,
				Price,
				Size,
				Weight,
				Length,
				Width,
				Height,
			}).then(() => {
				setProduct({
					Sku : "",
					Name : "",
					Price : "",
					Size : "",
					Weight : "",
					Length: "",
					Width : "",
					Height : ""
				});
			}).catch((err) => console.log(err.response.data));
			setTimeout(() => {
				history("/")
			}, 500);
		}
		setProduct([])
	}
	
	//Display for the product type selection
	let display	
	if(productType === 'dvd') {
		display = <div className='productdiscription'>
					<label htmlFor="size">Size</label>
					<input type='number' 
						id="size" 
						placeholder='SIZE' 
						name="Size"
						value={product.Size}
						onChange={handleInput}
					/>
					<p><b>Please, provide disc space in MB</b></p>
					</div>
	}else if (productType === 'book') {
		display = display = <div className='productdiscription'>
								<label htmlFor="size">Size</label>
								<input type='number' 
									id="weight" 
									placeholder='Weight' 
									name="Weight"
									value={product.Weight}
									onChange={handleInput}
								/>
								<p><b>Please, provide weight</b></p>
								</div>
	}else if (productType === 'furniture') {
		display = <div className='productdiscription'>
		<label htmlFor="height">Height</label>
		<input type='number' 
			id="height" 
			placeholder='Height' 
			name="Height"
			value={product.Height}
			onChange={handleInput}
		/>
		

		<label htmlFor="width">Width</label>
		<input type='number' 
			id="width" 
			placeholder='Width' 
			name="Width"
			value={product.Width}
			onChange={handleInput}
		/>
		

		<label htmlFor="length">Length</label>
		<input type='number' 
			id="length" 
			placeholder='length' 
			name="Length"
			value={product.Length}
			onChange={handleInput}
		/>
		<p><b>Please, provide dimensions</b></p>
		</div>
	}
	


	return (
		<div className='container'>
			{/* Header */}
			<header>
			<h1>Products Add</h1>
			<div>
				<button className='save' onClick={handlesubmit}>Save</button>
				<Link to='/'><button id="delete-product-btn">Cancel</button></Link>
			</div>
			</header>

			{/* Form */}
			<form id='product_form'>
				{/* Sku input */}
				<div className='input'>
					<label htmlFor ='sku'>SKU</label>
					<input 
						type='text'
						id='sku' 
						name='Sku'
						placeholder='SKU'
						value={product.Sku}
						onChange={handleInput}
					/>
				</div>

				{/* Name input */}
				<div className='input'>
				<label htmlFor ='name'>Name</label>
				<input required
					type='text'
					id='name'
					name='Name'
					placeholder='NAME'
					value={product.Name}
					onChange={handleInput}
				/>
					
				</div>

				{/* Price input */}
				<div className='input'>
				<label htmlFor ='price'>Price ($)</label>
				<input required
					type='number'
					id='price'
					name='Price'
					placeholder='PRICE'
					value={product.Price}
					onChange={handleInput}
				/>
					
				</div>

				{/* TypeSwitcher to switch product type */}
				<div className='input'>
				<label htmlFor='productType'>Type Switcher</label>
				<select value={productType} onChange={handleType}>
					<option>Choose option</option>
					<option value='dvd'>DVD</option>
					<option value='book'>Book</option>
					<option value='furniture'>Furniture</option>
				</select>
				</div>

				{/* Display of the product type */}
				<div >
					{display}
				</div>

				
				<footer>
					<p>
						Scandiweb Test assignment
					</p>
				</footer>
			</form>
		</div>
		)
}

export default Add;