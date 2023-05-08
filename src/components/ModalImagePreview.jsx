import Image from "next/image";
import Modal from "./Modal.astro";

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
                    <i className="fas fa-trash-alt mr-1"></i>Delete
                </button>
            </div>
        </Modal>
    );
};

export default ModalImagePreview;
