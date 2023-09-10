import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from './reducers/cartSlice';

const Products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 20 },
  { id: 3, name: "Product C", price: 30 },
  { id: 4, name: "Product D", price: 40 },
];

const ProductLists = () => {
  const dispatch = useDispatch()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div>
      <h2>Product List</h2>
      <div>
        {Products.map(item => (
          <div key={item.id}>
            <span>Name: {item.name}, Price: {item.price}</span>{" "}
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductLists
