import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FibonacciApp } from "../01-fibonacci/FibonacciApp"
import { DashboradRoutes } from "./DashboradRoutes"

export const AppRouter = () => (
    
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={ <DashboradRoutes />}/>
        </Routes>
    </BrowserRouter>
)
