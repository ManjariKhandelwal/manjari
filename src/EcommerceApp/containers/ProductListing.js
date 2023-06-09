import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { SET_PRODUCTS } from '../redux/actions/productActions';

const ProductListing = () => {
    const products=useSelector((state)=>state.allProducts.products);
    const dispatch =useDispatch();
    console.log("From Product Listing",products);
    const fetchProducts=async()=>{
        const response=await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log(err);
        });
        dispatch(SET_PRODUCTS(response.data));

    }
    useEffect(()=>{fetchProducts()},[]);
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    );
};

export default ProductListing;