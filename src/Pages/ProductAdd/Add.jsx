import React from 'react';


const Add = () => {
	return (
		<div className='container'>
			<header>
			<h1>Products Add</h1>
			<div>
				<button >Save</button>
				<button id="delete-product-btn">Cancel</button>
			</div>
			</header>
			<form id='product_form'>

				<label htmlFor ='sku'>SKU</label>
				<input type='text' id='sku' 
					name='Sku'
				/>

				<label htmlFor ='name'>Name</label>
				<input type='text'
					id='name'
				/>

				<label htmlFor ='price'>Price</label>
				<input type='text'
					id='price'
				/>

				<label htmlFor='productType'>Type Switcher</label>
				<select>
					<option>Choose option</option>
				</select>


			</form>
		</div>
		)
}

export default Add;