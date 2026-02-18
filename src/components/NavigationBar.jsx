import {useContext, useRef, useState} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";
import {LogOut, Menu, User, X} from "lucide-react";
import {assets} from "../assets/assets.js";

const NavigationBar = (e) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [showDropDown, setShowDropDown] = useState(false);
    const dropDownRef = useRef(null);
    const {user, clearUser} = useContext(AppContext);
    const navigate = useNavigate();

    const handleLogout = (e) => {
        navigate("/login");
        localStorage.clear();
        setOpenSidebar(false);
        clearUser();

    };
    return (
        <div
            className="flex items-center justify-between gap-5 bg-white border border-b border-grey-200/50 backdrop-blur-2xl py-4 px-4 sm:px-7 sticky top-0 z-30">
            {/*left sidebar - menu and title*/}
            <div className="flex items-center gap-5 ">
                <button
                    onClick={() => setOpenSidebar(!openSidebar)}
                    className="block lg:hidden text-black hover:bg-gray-100 p-1 rounded transition-colors ">
                    {openSidebar ? (
                        <X className="text-2xl "/>
                    ) : (
                        <Menu className="text-2xl"/>
                    )}
                </button>
                <div className="flex items-center gap-2">
                    <img src={assets.logo} alt="logo" className="h-10 w-10"/>
                    <span className="text-lg font-medium text-black truncate"> Expense Tracker </span>
                </div>
            </div>
            {/*right side profile picture*/}
            <div className="relative" ref={dropDownRef}>
                <button
                    onClick={() => setShowDropDown(!showDropDown)}
                    className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ">

                    <User className="text-amber-500"/>
                </button>
                {/*DropDown Menu for profile*/}
                {/*&& means if true*/}
                {showDropDown && (
                    <div
                        className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-grey-100 py-1 z-50">
                        {/*User information*/}
                        <div className="px-4 py-3 border-b border-grey-100  ">
                            <div className="flex items-center gap-3">
                                <div
                                    className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                                    <User className="w-4 h-4 text-amber-500 "></User>
                                </div>
                                <div className="flex-1 min-w-0 ">
                                    <p className="text-sm font-medium text-gray-700 truncate">
                                        {user?.name}
                                    </p>
                                    <p className="text-xs text-gray-700 truncate">
                                        {user?.email}
                                    </p>

                                </div>
                            </div>
                        </div>
                        {/*DropDown items*/}
                        <div className="py-1">
                            <button
                                onClick={(e) => handleLogout(e)}
                                className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                                <LogOut className="w-4 h-4 text-gray-500 "/>
                                    <span>Logout</span>
                            </button>

                        </div>
                    </div>
                )
                }
            </div>

            {/*Mobile view*/}
        </div>
    );
}

export default NavigationBar;