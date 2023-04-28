import React from "react";

const Modal = ({ id, title = "", description = "" }) => {
    return (
        <div className="modal" id={id}>
            <div className="modal-box relative text-center pb-14">
                <div className="text-right">
                    <a href="" className="btn btn-circle btn-error btn-sm">
                        <i className="far fa-times-circle text-white text-lg"></i>
                    </a>
                </div>
                <div className="bg-primary-surface w-28 h-28 rounded-2xl flex items-center justify-center mx-auto mt-11">
                    <i className="fas fa-check-circle text-primary text-3xl"></i>
                </div>
                <h3 className="font-semibold text-xl mt-6">{title}</h3>
                <p className="mt-1">{description}</p>
            </div>
        </div>
    );
};

export default Modal;
