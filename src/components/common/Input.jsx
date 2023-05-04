import { useMounted } from "@/hooks/useMounted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputPassword from "./InputPassword";

const Input = ({
    label,
    type = "text",
    placeholder,
    icon,
    errorMessage,
    value,
    isDisabled = false,
    isRequired = false,
}) => {
    return type === "password" ? (
        <InputPassword
            label={label}
            placeholder={placeholder}
            errorMessage={errorMessage}
            value={value}
            isDisabled={isDisabled}
            isRequired={isRequired}
        />
    ) : (
        <div className="form-control">
            <label className="label !pt-0">{label}</label>
            <div className="relative">
                {/* input-error use for give red border in input element */}
                <input
                    type={type}
                    placeholder={`${type === "email" ? "example@example.com" : placeholder}`}
                    className={`input input-bordered w-full disabled:bg-white disabled:text-neutral-400 peer ${
                        icon ? "pl-11" : ""
                    } ${isRequired ? "input-error" : ""}`}
                    value={value}
                    disabled={isDisabled}
                    required={isRequired}
                />
                <div className="absolute top-3 left-4">
                    <FontAwesomeIcon icon={icon} className="text-secondary" />
                </div>
                <span className="hidden peer-invalid:flex text-error text-xs mt-1">
                    {errorMessage}
                </span>
            </div>
        </div>
    );
};

export default Input;
