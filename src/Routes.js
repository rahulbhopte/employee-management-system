import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Dashboard/Login";
import Taskboard from "./page/Dashboard/Taskboard";
const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Login />} />
                <Route index path="/login" element={<Login />} />
                <Route path="/taskBorad" element={< Taskboard />} />
            </Routes>
        </BrowserRouter>)
};
export default Routers;