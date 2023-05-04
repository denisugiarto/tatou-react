import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputNumberActions = ({ id }) => {
    return (
        <div className="border rounded-lg px-4 py-3 flex items-center gap-1">
            <button
                className="btn-decrease btn btn-circle !btn-xs !text-base btn-disabled"
                onclick="decreaseValue(event)"
            >
                <FontAwesomeIcon icon={"minus-circle"} />
            </button>
            <input
                id={id}
                name="workerAmount"
                className="input flex-auto border-0 !h-full text-center px-1"
                type="number"
                max="100"
                min="1"
                value={1}
            />
            <button
                className="btn-increase btn btn-circle !btn-xs !text-base"
                onclick="increaseValue(event)"
            >
                <FontAwesomeIcon icon={"plus-circle"} />
            </button>
        </div>
    );
};

export default InputNumberActions;
