import "./Product.css";
import {addToCart} from '../store/cartSlice'
import { useDispatch } from "react-redux";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch()
  const addHandler = () => {
    dispatch(
      addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className='card'>
      <div className='img'>
        <img src={imgURL} alt={name} />
      </div>
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button className="button" onClick={addHandler}>Add to cart</button>
    </div>
  );
};

export default Product;
