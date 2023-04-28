import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const InputPassword = ({
    label,
    placeholder,
    isRequired,
    isDisabled,
    value,
    errorMessage,
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = showPassword ? "text" : "password";
    function showHidePasswordHandler() {
        setShowPassword(!showPassword);
        console.log(showPassword);
    }
    return (
        <div className="form-control">
            <label className="label !pt-0 font-normal">{label}</label>
            <div className="relative">
                {/* input-error use for give red border in input element */}
                <input
                    type={inputType}
                    placeholder={placeholder}
                    className={`input input-bordered w-full pl-11 peer ${
                        isRequired ? "input-error" : ""
                    }`}
                    minLength={8}
                    value={value}
                    disabled={isDisabled}
                    required={isRequired}
                />
                <div className="absolute top-3 left-4">
                    <FontAwesomeIcon icon="key" className="text-secondary" />
                </div>
                <button
                    className="absolute top-3 right-4 text-secondary"
                    onClick={showHidePasswordHandler}
                >
                    <FontAwesomeIcon
                        icon={`${showPassword ? "eye-slash" : "eye"}`}
                        className="text-secondary"
                    />
                </button>
                <div className="hidden peer-invalid:flex text-error text-xs mt-1">
                    {errorMessage}
                </div>
            </div>
        </div>
    );
};

export default InputPassword;
