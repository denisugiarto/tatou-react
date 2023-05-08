import Image from "next/image";

const MyActivityCard = ({ title, type = "live" }) => {
    const cardType = {
        live: "bg-primary text-white",
        draft: "bg-warning-surface text-warning",
        archive: "bg-success-surface text-success",
        succeeded: "bg-neutral-100 text-black",
    };
    console.log(cardType.live)
    return (
        <div className="py-2 px-4 border-b">
            <div className="flex gap-2 items-center mt-2">
                <h6 className="grow font-medium text-sm">{title}</h6>
                <button className="btn bg-primary-surface !btn-sm border-primary-surface text-primary">
                    Edit<i className="fas fa-edit ml-2"></i>
                </button>
                <button className="btn !btn-sm bg-error-surface text-error">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
            <div className="mt-2 flex items-center gap-2">
                {
                    <div
                        className={`rounded-full ${cardType.type} font-medium text-xs py-1 w-24 text-center capitalize`}
                    >
                        {type}
                    </div>
                }
                <Image
                    src="/assets/images/disaster-4.webp"
                    className="h-10 rounded"
                    alt=""
                />
                <div>
                    <p className="text-xs">Hapu Name</p>
                    <div className="flex mt-1 gap-2 overflow-x-auto">
                        <div className="flex-none px-2 py-1 bg-primary-surface text-xs rounded">
                            <i className="fas fa-hand-holding-usd mr-1 text-primary"></i>
                            Funding 23%
                        </div>
                        <div className="flex-none px-2 py-1 bg-primary-surface text-xs rounded">
                            <i className="fas fa-hard-hat mr-1 text-primary"></i>
                            <span className="text-error">15</span>/20
                            Worker/Mahi
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyActivityCard;
