import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Dishesh from "../pages/Dishes/Dishesh";
import Booking from "../pages/Booking/Booking";
import NotFound from "../pages/notFound/NotFound";

function LayoutRoutes() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dishes" element={<Dishesh />} />
                <Route path="/services" element={<Booking />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default LayoutRoutes;
