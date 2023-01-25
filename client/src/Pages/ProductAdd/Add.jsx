import React, {useState} from 'react';
import './Add.css'
import {Link} from "react-router-dom";


const Add = () => {

	const [productType, setProductType] = useState("")

	const [product, setProduct] = useState({
		Sku : "",
		Name : "",
		Price : "",
		Size : "",
		Length: "",
		Width : "",
		Height : ""
	})

	const handleInput = (e) => {
		const {name, value} = e.target
		setProduct(prevProduct => ({
			...prevProduct,
			[name] : value
		}))

		console.log(product)
	}

	const handleType = (e) => {
		setProductType(e.target.value);
		console.log(productType)
	}
	 	
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
								<p><b>Please, provide Book weight</b></p>
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
		<p><b>Please, provide Furniture weight</b></p>
		</div>
	}



	return (
		<div className='container'>
			<header>
			<h1>Products Add</h1>
			<div>
				<button className='save'>Save</button>
				<Link to='/'><button id="delete-product-btn">Cancel</button></Link>
			</div>
			</header>
			<form id='product_form'>
				<div className='input'>
					<label htmlFor ='sku'>SKU</label>
					<input type='text'
						id='sku' 
						name='Sku'
						placeholder='SKU'
						value={product.Sku}
						onChange={handleInput}
					/>
				</div>

				<div className='input'>
				<label htmlFor ='name'>Name</label>
				<input type='text'
					id='name'
					name='Name'
					placeholder='NAME'
					value={product.Name}
					onChange={handleInput}
				/>
				</div>

				<div className='input'>
				<label htmlFor ='price'>Price</label>
				<input type='number'
					id='price'
					name='Price'
					placeholder='PRICE'
					value={product.Price}
					onChange={handleInput}
				/>
				</div>

				<div className='input'>
				<label htmlFor='productType'>Type Switcher</label>
				<select value={productType} onChange={handleType}>
					<option>Choose option</option>
					<option value='dvd'>DVD</option>
					<option value='book'>Book</option>
					<option value='furniture'>Furniture</option>
				</select>
				</div>

				<div >
					{display}
				</div>
			</form>
		</div>
		)
}

export default Add;