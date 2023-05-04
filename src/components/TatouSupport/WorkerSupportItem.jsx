import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputNumberActions from "../InputNumberActions";

const WorkerSupportItem = ({ id, target }) => {
    return (
        <div className="flex items-center gap-4 mt-4">
            <div className="flex-none text-primary">
                <FontAwesomeIcon icon={"hands-helping"} />
            </div>
            <div className="grow">
                <h6 className="font-medium">Plumbers</h6>
                <p className="text-error text-xs">
                    Still need <span className="font-medium">1 person</span>
                </p>
            </div>
            <button
                className={`flex-none block ${target} text-primary text-sm`}
                data-target={`.${target}`}
                onclick="showContent(this)"
            >
                <FontAwesomeIcon icon={"plus"} className="mr-2" />
                Support
            </button>
            <div className={`${target} hidden`}>
                <div className="flex gap-4">
                    <button
                        onclick="showContent(this)"
                        data-target={`.${target}`}
                        className="text-error"
                    >
                        <FontAwesomeIcon icon={"trash-alt"} />
                    </button>
                    <InputNumberActions id={id} />
                </div>
            </div>
        </div>
    );
};

export default WorkerSupportItem;
