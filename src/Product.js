import React from "react";
import './Product.css'

function Product(props){
    return(
        <div>
            <div className="product">
                <div className="product__info">
                    <p>{props.title}</p>
                    <p className="product__price">
                        <small>$</small>
                        <strong>{props.price}</strong>
                    </p>
                    <div className="product__rating">⭐⭐</div>
                </div>

                <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/910fKjb8awL.__AC_SX300_SY300_QL70_FMwebp_.jpg" alt="product-image" />

                <button>Add to Basket</button>
            </div>
        </div>
    )
}

export default Product;