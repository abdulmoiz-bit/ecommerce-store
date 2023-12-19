import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
//import { NavLink } from 'react-router-dom';
import { addCart } from './redux/action';
import { useDispatch } from 'react-redux';
//import { useSelector } from 'react-redux';

 //const [loading, setLoading] = useState(false);

  //const state = useSelector((state) => state.handleCart)

  /*
    const handleCart = () => {
      if (cartBtn === "Add to Cart") {
        dispatch(addCart(product))
        alert("Add Successfully")
        setCartBtn("Remove From Cart")
      } else{
        dispatch(delCart(product))
        alert("Removed Successfully")
        setCartBtn("Add to Cart")
      }
     
    }
    */

/*
 
*/
const Product = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);
 
  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    }
    getProducts();
  }, []);
 
  const addProduct = () => {
    dispatch(addCart(product))
  }

  return (
    <>
      <div className="product conatiner my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="container mb-4 ">
              <div className="row">
                <div className="col-md-12 col-lg-6 col-xl-6 text-center mb-5 ">
                  <img src={product.image} alt={product.tiltle} height="300px" width="300px" />
                </div>
                <div className="col-md-12 col-lg-6 col-xl-6 text-center">
                  <h4 className='text-uppercase text-black-50'>
                    {product.category}
                  </h4>
                  <h1 className='dispaly-5'> {product.title} </h1>
                  <p className='lead'>
                    Rating {product.rating && product.rating.rate}
                  </p>
                  <h3 className='display-6 fw-bold my-4 '>
                    ${product.price}
                  </h3>
                  <p className='lead'>{product.description}</p>
                  <button className="btn btn-dark" onClick={addProduct}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Product;
