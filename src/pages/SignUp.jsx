import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {assets} from "../assets/assets.js";
import Input from "../components/Input.jsx";
import {validateEmail, delay} from "../util/validation.js";
// import axiosConfig from "../util/axiosConfig.jsx";
// import API_ENDPOINTS from "../util/ApiEndpoints.js";
import {LoaderCircle} from "lucide-react";
import toast from "react-hot-toast";


const SignUp = () => {
    // state vars
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // to navigate to login page
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        // stop loading the entire webpage
        e.preventDefault();
        setIsLoading(true);

        // basic validation
        if (!name.trim() ) {
            setError("Name is required");
            setIsLoading(false);
            return;
        }
        if (!validateEmail(email) ) {
            setError("Please enter a valid email");
            setIsLoading(false);
            return;
        }
        if (!password.trim() ) {
            setError("Password is required");
            setIsLoading(false);
            return;
        }
        setError("");

        try {
            // const axiosResponse = await axiosConfig.post(API_ENDPOINTS.REGISTER, {
            //     email: email,
            //     password: password,
            //     name: name,
            // });
            // if(axiosResponse.status === 201) {
            //     toast.success("Sign up successfully");
            // }
            await delay(1000);
            if(true) {
                toast.success("Sign up successfully");
                navigate("/Login");
            }

        }catch(err) {

            console.error("SomeThing Went Wrong", err);
            setError(err);
        }finally {
            setIsLoading(false);
        }

    };
    return (
        <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {
                //     bg image blured

            }
            <img src={assets.login_bg} alt="Background"
                 className="absolute inset-0 w-full h-full object-cover filter blur-sm"/>

            <div className="relative z-10 w-full max-w-lg px-6">
                <div
                    className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg shadow-2xl p-8 max-h-[90vh] overflow-y-auto">
                    <h3 className="text-2xl font-semibold text-black text-center mb-2">
                        Create An Account
                    </h3>
                    <p className="text-sm text-slate-700 text-center mb-8">
                        Start Tracking Your Spending's.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="flex justify-center mb-6">
                            {/*profile image*/}
                        </div>
                        <div className="grid grid-col-2 md:grid-col-2 gap-2">
                            <Input value={name}
                                   onChange={(e) => setName(e.target.value)}
                                   label="FullName"
                                   placeHolder="Enter Full Name"
                                   type="text"/>
                            <Input value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   label="Email Address"
                                   placeHolder="asd@gmail.com"
                                   type="email"/>
                            <Input value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   label="Password"
                                   placeHolder="********"
                                   type="password"/>
                        </div>
                        {error && (
                            <p className="text-red-800 text-sm text-center bg-red-50 p2 rounded-2xl">
                                {error}
                            </p>
                        )}

                        <button disabled={isLoading}
                            className={`btn-primary bg-blue-300 rounded-2xl  w-full py-3 text-lg font-medium flex items-center justify-center gap-2 hover:cursor-pointer ${isLoading? 'opacity-60 cursor-not-allowed':''}`}
                            type={"submit"}>
                            {isLoading ? (
                                <>
                                    <LoaderCircle className="animate-spin w-5 h-5" />
                                        Signing up ...
                                </>
                            ) : "Sign Up" }
                        </button>
                        <p className="text-sm text-slate-800 text-center mt-6">
                            Already Have An Account?
                            <Link to="/login"
                                  className={"font-medium text-primary hover:text-primary-dark transition-colors underline"}>Login</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>


    );
}
export default SignUp;