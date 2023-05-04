import Image from "next/image";
import React from "react";

const CardFundingSupport = ({ imgUrl, imgDescription, isLoading = false }) => {
    return (
        <div className="card bg-base-100 shadow-xl border border-primary-border rounded-xl">
            <figure>
                <Image
                    src={imgUrl}
                    className="w-full h-32 object-cover"
                    alt={imgDescription}
                />
            </figure>
            <div className="card-body gap-1 !px-2 !pt-2 pb-4">
                <h2 className="font-medium text-sm !mb-0">
                    We need you to support Marae!
                </h2>
                <p className="text-xs">Marae/Hapu name</p>
                <div className="flex items-center bg-primary-surface py-1 px-2 rounded gap-1 text-xs w-full">
                    <p>Funding</p>
                    <progress
                        className="progress progress-primary bg-white border border-primary-border"
                        value="23"
                        max="100"
                    ></progress>
                    23%
                </div>
            </div>
        </div>
    );
};

export default CardFundingSupport;
