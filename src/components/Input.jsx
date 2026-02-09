import {Eye, EyeOff} from "lucide-react";
import React from "react";

const Input = ({label, value, onChange, placeHolder, type}) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const togglePassword = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div className="mb-4">
            <label className="text text-slate-800 block mb-1">
                {label}
            </label>

            <div className="relative">
                <input type={type === "password" ? (showPassword ? "text" : "password") : "text"}
                       placeholder={placeHolder}
                       value={value}
                       onChange={(e) => onChange(e)}
                       className="w-full bg-transparent outline-none border border-gray-300 rounded-md py-2 px-3 pr-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"/>
                {type === "password" && (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
                        {showPassword ? (
                            <Eye size={20} className="text-blue-800"
                                 onClick={togglePassword}/>
                        ) : (

                            <EyeOff
                                size={20}
                                className="text-slate-500"
                                onClick={togglePassword}/>
                        )}
                    </span>
                )}
            </div>
        </div>

    );

}
export default Input;