import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {SIDEBAR_DATA} from "../assets/assets.js";
import {useNavigate} from "react-router-dom";

const Sidebar = ({activeMenu}) => {

    const {user} = useContext(AppContext);
    let navigate = useNavigate();

    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-gray-200 p-5 sticky top-[61px] z-20">
            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
                {user?.profileImageUrl ? (
                    <img src={user?.profileImageUrl || ""} alt="profile image"
                         className="w-20 h-20 bg-slate-200 rounded-full "/>
                ) : (
                    <User className="w-20 h-20 text-xl bg-slate-200 rounded-full "/>
                )}
                <h5 className="text-gray-950 font-medium leading-6 ">
                    {user?.name || ""}
                </h5>


            </div>
            {/*map used to loop through the data*/}
            {/*`` these are called literals*/}
            {SIDEBAR_DATA.map((item, index) => (
                <button
                    onClick={() => {
                        navigate(item.link)
                    }}
                    key={`menu-${index}`}
                    className={`cursor-pointer w-full flex items-center gap-4 text[15px] py-3 px6 rounded-lg mb-3 ${activeMenu == item.label ? "text-white bg-blue-600" : ""}`}>

                    <item.icon className="text-xl "></item.icon>
                    {item.label}

                </button>
            ))}
        </div>
    );
}

export default Sidebar;