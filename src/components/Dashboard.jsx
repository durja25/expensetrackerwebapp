import NavigationBar from "./NavigationBar.jsx";
import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext.jsx";
import {useNavigate} from "react-router-dom";
import SideBar from "./SideBar.jsx";

const Dashboard = () => {
    const {user} = useContext(AppContext)
    // const navigate = useNavigate();


    return (
        <div>
            <NavigationBar/>
            {user && (
                <div className="flex">
                    <div className="max-[1080px]:hidden">
                        {/*Side Bar Context*/}
                        <SideBar/>


                    </div>
                    <div>Right Side Content</div>
                </div>
            )}

        </div>
    )
}
export default Dashboard;