import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./Products.css";



const Products = () => {

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);


    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products",
            {
                method: 'GET',
                headers: {
                    'x-rapidapi-host': 'carbonfootprint1.p.rapidapi.com',
                    'x-rapidapi-key': 'your_api_key'
                }
            });
            setData(await response.clone().json());
            setFilter(await response.json());
        }
        getProducts();
    }, []);


    const filterProduct = (cat) => {
        const updatedList = data.filter(x => x.category === cat);
        setFilter(updatedList);
    }


    return (
        <>
            <div className="conatiner my-3 py-5">
                <div className="row">
                    <div className="mb-3 py-5">
                        <h1 className='text-center fw-bolder display-6'>OUR &nbsp; PRODUCTS</h1>
                        <hr />
                    </div>
                </div>
                <div className=" container-fluid row justify-content-center">
                    <div className="grid-products">
                        <div className='category-list'>
                            <p onClick={() => setFilter(data)}>All </p>
                            <p onClick={() => filterProduct("men's clothing")} >Men Clothing </p>
                            <p onClick={() => filterProduct("women's clothing")} >Women Clothing </p>
                            <p onClick={() => filterProduct("jewelery")}>Jewelery </p>
                            <p onClick={() => filterProduct("electronics")} >Electronics </p>
                        </div>
                        <div className="products">
                            {filter.map((product) => {
                                return (
                                    <div className="card" key={product.id}>
                                        <span className='img-container'>
                                            <img src={product.image} alt={product.title} height='200px' width='200px' />
                                        </span>
                                        <h5 className='text-center mb-0'>{product.title.substring(0, 12)}...</h5>
                                        <p className='text-center'>${product.price}</p>
                                        <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark mb-2">
                                            View Details
                                        </NavLink>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Products;