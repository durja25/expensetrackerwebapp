import NavigationBar from "./NavigationBar.jsx";
import {useContext, useEffect} from "react";
import {AppContext} from "../context/AppContext.jsx";
import SideBar from "./SideBar.jsx";

const Dashboard = ({children, activeMenu}) => {
    const {user} = useContext(AppContext)
    // const navigate = useNavigate();


    return (
        <div>
            <NavigationBar activeMenu={activeMenu}/>
            {user && (
                <div className="flex">
                    <div className="max-[1080px]:hidden">
                        {/*Side Bar Context*/}
                        <SideBar activeMenu={activeMenu}/>


                    </div>
                    <div className="grow mx-5">{children}</div>
                </div>
            )}

        </div>
    )
}
export default Dashboard;