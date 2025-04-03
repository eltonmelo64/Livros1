import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./Pages/Main/Main";
import Doados from "./Pages/Doados/Doados";
import Doar from "./Pages/Doar/Doar";

function AppRoutes() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/doados" element={<Doados />} />
                <Route path="/doar" element={<Doar />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRoutes;