import React from "react";
import './Home.css'
import Product from "./Product";


function Home() {
    return(
        <div>
            <div className="home">
                <div className="home__container">
                    <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />

                    <div className="home__row">
                        <Product
                            id="12321341" 
                            title="Voova Laptop Bag 15.6 15 14 Inch Briefcase, Expandable Computer Shoulder Messenger Bag, Business Travel College School-Gray"
                            price={30}
                            rating={3}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/910fKjb8awL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        />
                        <Product 
                            id="12321342" 
                            title="Apple AirPods Pro (2nd Generation) Wireless Earbuds, Up to 2X More Active Noise Cancelling"
                            price={199}
                            rating={4}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61SUj2aKoEL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="12321343" 
                            title="Voova Laptop Bag 15.6 15 14 Inch Briefcase, Expandable Computer Shoulder Messenger Bag, Business Travel College School-Gray"
                            price={30}
                            rating={3}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/910fKjb8awL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        />
                        <Product 
                            id="12321344" 
                            title="Voova Laptop Bag 15.6 15 14 Inch Briefcase, Expandable Computer Shoulder Messenger Bag, Business Travel College School-Gray"
                            price={30}
                            rating={3}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/910fKjb8awL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        />
                        <Product 
                            id="12321345" 
                            title="Voova Laptop Bag 15.6 15 14 Inch Briefcase, Expandable Computer Shoulder Messenger Bag, Business Travel College School-Gray"
                            price={30}
                            rating={3}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/910fKjb8awL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="12321346" 
                            title="Voova Laptop Bag 15.6 15 14 Inch Briefcase, Expandable Computer Shoulder Messenger Bag, Business Travel College School-Gray"
                            price={30}
                            rating={3}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/910fKjb8awL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home