import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products=useSelector((state)=>state.allProducts.products);
    
    const renderList=products.map((products)=>{
        const {id,title,image,price ,category}=products;
        return (
            <div className='four wide column' key={id}>
            <Link to={ `/product/${id}`}>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image'><img src={image}/></div>
                            <div className='content'>
                                <div className='header'>{title} </div>
                                <div className="meta price">${price}</div>
                                <div className="meta">{category}</div>
    
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            
        );

    })
    //const {title}=products[0];
    console.log("From Product Components",products);

    return(
        <>
            {renderList}
        </>
    )    
    
};

export default ProductComponent;