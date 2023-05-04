import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SupportDetailCardItem = ({
    icon,
    isFunding = false,
    classes,
    totalGetSupport,
    totalNeeded,
    name,
}) => {
    return (
        <div className="bg-primary-surface rounded px-4 py-2 text-sm flex items-center">
            {isFunding ? (
                <>
                    <div className="flex-none">
                        <FontAwesomeIcon
                            icon={"dollar-sign"}
                            className=" text-primary mr-2 text-lg"
                        />
                    </div>
                    <p className="grow text-center text-2xs">
                        <span className="flex items-center gap-2 font-medium text-xs">
                            <progress
                                className="progress progress-primary bg-white border border-primary-border"
                                value={totalGetSupport}
                                max="100"
                            />
                            <span className="text-primary-pressed">
                                {totalGetSupport}%
                            </span>
                        </span>
                        Funding
                    </p>
                </>
            ) : (
                <>
                    <div className="flex-none">
                        <FontAwesomeIcon
                            icon={icon}
                            className="text-primary mr-2 text-lg"
                        />
                    </div>
                    <p className="grow text-center text-2xs">
                        <span className="block text-error font-medium text-xs">
                            {totalGetSupport}
                            <span className="text-primary-pressed">
                                /{totalNeeded}
                            </span>
                        </span>
                        {name}
                    </p>
                </>
            )}
        </div>
    );
};

export default SupportDetailCardItem;
