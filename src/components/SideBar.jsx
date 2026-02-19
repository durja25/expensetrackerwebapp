import {useContext} from "react";
import {AppContext} from "../context/AppContext.jsx";

const Sidebar = () => {

    const {user} = useContext(AppContext);

    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-gray-200 p-5 sticky top-[61px] z-20">
            <div className="flex flex-col items-center justify-center gap-3 mt-3 mb-7">
                {user?.profileImageUrl ? (
                    <img src={user?.profileImageUrl || ""} alt="profile image"
                         className="w-20 h-20 bg-slate-200 rounded-full "/>
                ) : (
                    <User className="w-20 h-20 text-xl bg-slate-200 rounded-full "/>
                )}
            </div>
        </div>
    )
}

export default Sidebar;