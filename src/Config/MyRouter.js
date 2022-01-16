import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import MyNavbar from '../components/MyNavbar';
import AddBook from '../pages/AddBook';
import Book from '../pages/Book';
import Home from '../pages/Home';


function MyRouter() {
    return (
        <div>
            <Router>
           <MyNavbar/>
            <div>
                <Routes>
                    <Route path="/addbook" element={<AddBook/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/book" element={<Book/>} />
                </Routes>
            </div>
        </Router>
        </div>
    )
}

export default MyRouter
