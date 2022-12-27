import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";

export default (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/checkout" element={<Checkout />} />
    </Routes>
)