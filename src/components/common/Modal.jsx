import ReactDOM from "react-dom";
import { useMounted } from "@/hooks/use-mounted";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Modal = ({ id, title = "", description = "" }) => {
    const { hasMounted } = useMounted();
    if (hasMounted) {
        return ReactDOM.createPortal(
            <div className="modal" id={id}>
                <div className="modal-box relative text-center pb-14">
                    <div className="text-right">
                        <a href="" className="btn btn-circle btn-error btn-sm">
                            <FontAwesomeIcon
                                icon={"times-circle"}
                                className="text-white text-lg"
                            />
                        </a>
                    </div>
                    <div className="bg-primary-surface w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mt-11">
                        <FontAwesomeIcon
                            icon={"check-circle"}
                            className="text-primary text-3xl"
                        />
                    </div>
                    <h3 className="font-semibold text-xl mt-6">{title}</h3>
                    <p className="mt-1">{description}</p>
                </div>
            </div>,
            document.getElementById("modal-root")
        );
    }
};

export default Modal;
