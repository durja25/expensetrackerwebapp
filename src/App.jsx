import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Income from "./pages/Income";
import Expense from "./pages/Expense";
import Filter from "./pages/Filter";
import Login from "./pages/login";
import Category from "./pages/Category";
import SignUp from "./pages/signup";
import {Toaster} from "react-hot-toast";

const App = () => {
    return (
        // <div className="text-3xl font-bold underline">Expense Tracker</div>
        <>

            <Toaster/>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root/>}/>
                    <Route path="/dashboard" element={<Home/>}></Route>
                    <Route path="/Income" element={<Income/>}></Route>
                    <Route path="/Expense" element={<Expense/>}></Route>
                    <Route path="/Filter" element={<Filter/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>
                    <Route path="/SignUp" element={<SignUp/>}></Route>
                    <Route path="/Category" element={<Category/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

const Root = () => {
    const isAuthenticated = !!localStorage.getItem("token")

    return isAuthenticated ? (
        <Navigate to='/Dashboard'></Navigate>
    ): (
        <Navigate to="/login"/>
    )
};

export default App;