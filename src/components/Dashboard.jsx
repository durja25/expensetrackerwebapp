
import NavigationBar from "./NavigationBar.jsx";
import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";
import SideBar from "./SideBar.jsx";

const Dashboard = () => {
    const {userData} = useContext(AppContext)
    const navigate = useNavigate();



    return (
        <div>
            <NavigationBar />
            {userData ? (
                <div className="flex">
                    <div className="max-[1080px]:hidden">
                        {/*Side Bar Context*/}
                        <SideBar />


                    </div>
                    <div>Right Side Content</div>
                </div>
            ): navigate("/login")}

        </div>
    );
}
export default Dashboard;