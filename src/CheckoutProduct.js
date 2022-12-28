import React from "react";
import './CheckoutProduct.css'

function CheckoutProduct() {
    return (
        <div className="checkoutProduct">
                <img src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/910fKjb8awL.__AC_SX300_SY300_QL70_FMwebp_.jpg" 
                alt="" className="checkoutProduct__image" />

                <div className="checkoutProduct__info">
                    <p className="checkoutProduct__title">Voova Laptop Bag 15.6 15 14 Inch Briefcase, Expandable Computer Shoulder Messenger Bag, Business Travel College School-Gray</p>
                    <p className="checkoutProduct__price">
                        <small>$</small>
                        <strong>20</strong>
                    </p>
                    <div className="checkoutProduct__rating">
                        ⭐⭐
                    </div>
                    <button>Remove from Basket</button>
                </div>
        </div>
    )
}

export default CheckoutProduct;