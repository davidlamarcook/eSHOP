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
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61SUj2aKoEL._AC_SL1500_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="12321343"
                            title="Jordan Womens WMNS Air Jordan 1 MID SE DO6699 200"
                            price={212.99}
                            rating={4}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71CCjVEhkTL._AC_UL1500_.jpg"
                        />
                        <Product 
                            id="12321344"
                            title="Amazon Essentials Men's Full-Zip Polar Fleece Jacket (Available in Big & Tall)"
                            price={15}
                            rating={3}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/816R2GcSWUS._AC_UL1500_.jpg"
                        />
                        <Product 
                            id="12321345"
                            title="Foldable Metal Platform Bed Frame with Tool Free Setup, 14 Inches High, Twin XL, Black"
                            price={27.43}
                            rating={5}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71zpDaTJ1RL._AC_SL1500_.jpg"
                        />
                    </div>

                    <div className="home__row">
                        <Product 
                            id="12321346"
                            title="TV 50 inch 4-Series 4K UHD smart TV"
                            price={289}
                            rating={5}
                            image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61IZcaEIt4L._AC_SL1000_.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home