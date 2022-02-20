import { Routes, Route } from 'react-router-dom';
import { NavBar } from "../ui/NavBar"
import { FibonacciApp } from '../01-fibonacci/FibonacciApp';
import { MultiApp } from '../02-multiplos/MultiApp';
import { MovieApp } from '../03-movie-app/MovieApp';

export const DashboradRoutes = () => {
    return (
        <>
            <NavBar />

            <div>
                <Routes>
                    <Route path="/fibonacci" element={<FibonacciApp />} />
                    <Route path="/multi" element={<MultiApp />} />
                    <Route path="/movie" element={<MovieApp />} />
                </Routes>
            </div>
        </>
    )
}
