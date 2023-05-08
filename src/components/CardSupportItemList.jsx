import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const CardSupportItemList = ({ isDetail = false, times, donations }) => {
    return (
        <div className="flex gap-4 p-2 bg-primary-surface rounded-lg">
            <Image
                src="/assets/profile.png"
                alt=""
                className="flex-none h-11 w-11 rounded-full"
            />
            <div className="grow">
                <h5 className="font-medium">
                    John Doe
                    <span className="text-xs font-normal">
                        has been supporting
                    </span>
                </h5>
                <div className="font-medium text-xs mt-1 flex items-center">
                    {donations.map(function (item, index) {
                        if (index !== 0) {
                            return (
                                <>
                                    <FontAwesomeIcon
                                        icon={"circle"}
                                        className="text-primary mx-1 h-2 w-2"
                                    />
                                    {item}
                                </>
                            );
                        }
                        return <>{item}</>;
                    })}
                </div>
                {isDetail && (
                    <p className="text-xs text-neutral-600 mt-1">{times} ago</p>
                )}
            </div>
        </div>
    );
};

export default CardSupportItemList;
