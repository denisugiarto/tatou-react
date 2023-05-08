import Image from "next/image";
import Modal from "./Modal.astro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModalImagePreview = () => {
    return (
        <Modal id="imagePreviewModal" isCustom={true}>
            <div className="relative">
                <Image
                    src="/assets/images/img-test.png"
                    className="rounded-lg w-full h-96 object-cover"
                    alt=""
                />
                <button className="absolute top-2 right-2 btn btn-error !btn-xs">
                    <FontAwesomeIcon icon={"trash-alt"} className="mr-1" />
                    Delete
                </button>
            </div>
        </Modal>
    );
};

export default ModalImagePreview;
