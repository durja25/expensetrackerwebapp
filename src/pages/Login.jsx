import {assets} from "../assets/assets.js";
import Input from "../components/Input.jsx";
import {useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {validateEmail, delay} from "../util/validation.js";
import toast from "react-hot-toast";
import axiosConfig from "../util/axiosConfig.jsx";
import {AppContext, AppContextProvider} from "../context/AppContext.jsx";
import {API_ENDPOINTS} from "../util/ApiEndpoints.js";

const Login = ()=> {

    // state vars
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(false);

    const {setUser} = useContext(AppContext)


    // to navigate to login page
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email");
            setIsLoading(false);
            return;
        }
        if (!password.trim()) {
            setError("Password is required");
            setIsLoading(false);
            return;
        }
        setError("");


        // API call
        try {
            const axiosResponse = await axiosConfig.post(API_ENDPOINTS.LOGIN, {
                email: email,
                password: password,

            });
            const { token, user } = await axiosResponse.data;
            if(axiosResponse.status === 200) {
                toast.success("Login successfully");
                if (token) {
                    localStorage.setItem("token", token);
                    setUser(user);
                    navigate("/dashboard");
                }
            }
            // await delay(1000);
            // if (true) {
            //     toast.success("Login successfully");
            //     navigate("/dashboard");
            // }

        } catch (error) {

            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {

                console.error("SomeThing Went Wrong", err);
                toast("SomeThing Went Wrong", err.message)
            }
        } finally {
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
                        Welcome Back!
                    </h3>
                    <p className="text-sm text-slate-700 text-center mb-8">
                        Please enter your details to login.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-col-2 md:grid-col-2 gap-2">
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

                        <button disabled={isloading}
                                className={`btn-primary bg-blue-300 rounded-2xl  w-full py-3 text-lg font-medium hover:cursor-pointer flex items-center justify-center gap-2 ${ isloading ? "opacity-60 cursor-not-allowed" : ""}`}
                                type={"submit"}>
                            {isloading ? (<>
                                    <LoaderCircle className="animate-pulse w-5 h-5 "/>
                                    Logging in ...
                                </>
                            ) : ("Login")}
                        </button>
                        <p className="text-sm text-slate-800 text-center mt-6">
                            Don't Have An Account?
                            <Link to="/Signup"

                                  className={"font-medium text-primary hover:text-primary-dark transition-colors underline"}>SignUp</Link>
                        </p>
                    </form>

                </div>
            </div>
        </div>

    );
}
export default Login;