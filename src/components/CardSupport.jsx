import Image from "next/image";
import React from "react";
import CardItem from "./tatou-support/CardItem";

const CardSupport = ({
    imgUrl,
    imgDescription,
    isLoading = false,
    isShowItems = false,
    isLandscape = false,
}) => {
    return (
        <div
            className={`${
                isLandscape ? "grid grid-cols-2" : "flex-none w-64"
            }  card bg-base-100 shadow-xl border border-primary-border rounded-xl min-h-[128px] overflow-hidden`}
        >
            <figure>
                <Image
                    src={imgUrl}
                    className="w-full h-full object-cover aspect-video"
                    alt={imgDescription}
                    height={150}
                    width={254}
                />
            </figure>
            <div className="card-body gap-1 !px-2 !pt-2 pb-4">
                <h2 className="font-medium text-sm !mb-0">
                    We need you to support Marae!
                </h2>
                <p className="text-xs flex items-center">
                    Marae
                    <i className="fas fa-circle w-2 h-2 ml-2 mr-1 text-primary"></i>
                    Hapu name
                </p>
                <div className="flex items-center bg-primary-surface py-1 px-2 rounded gap-1 text-xs w-full">
                    <p>Funding</p>
                    <progress
                        className="progress progress-primary bg-white border border-primary-border"
                        value="23"
                        max="100"
                    ></progress>
                    23%
                </div>
                {isShowItems && (
                    <div className="flex gap-1 overflow-x-auto flex-wrap items-center">
                        <CardItem cardType="worker" />
                        <CardItem cardType="item" />
                        <CardItem cardType="more" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardSupport;
