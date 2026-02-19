import Dashboard from "../components/Dashboard.jsx";
import {useUser} from "../hooks/useUser.jsx";

const Category = () => {
    useUser();

    return (
        <Dashboard activeMenu="Category">
            This is Category Page
        </Dashboard>
    )
};

export default Category;