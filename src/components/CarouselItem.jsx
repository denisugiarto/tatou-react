import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CarouselItem = ({ id, imgUrl, previousId, nextId }) => {
    return (
        <div id={id} className="carousel-item relative w-full">
            <Link href="#imagePreviewModal" className="w-full">
                <Image src={imgUrl} className="w-full" alt="" />
            </Link>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <Link
                    href={`#${previousId}`}
                    className="btn btn-circle !btn-sm btn-primary font-"
                >
                    <FontAwesomeIcon icon={"chevron-left"} />
                </Link>
                <Link
                    href={`#${nextId}`}
                    className="btn btn-circle !btn-sm btn-primary"
                >
                    <FontAwesomeIcon icon={"chevron-left"} />
                </Link>
            </div>
        </div>
    );
};

export default CarouselItem;
