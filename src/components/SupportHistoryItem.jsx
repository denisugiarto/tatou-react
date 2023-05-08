const SupportHistoryItem = ({ title, name }) => {
    return (
        <div className="px-4 py-2 border-b">
            <h3 className="font-medium text-sm">{title}</h3>
            <div className="flex mt-2 gap-2">
                <img
                    src="/assets/images/disaster-6.webp"
                    className="rounded h-10"
                    alt=""
                />
                <div>
                    <h6 className="text-xs">{name}</h6>
                    <div className="flex mt-1 gap-2 overflow-x-auto">
                        <div className="flex-none px-2 py-1 bg-primary-surface text-xs rounded text-primary-pressed font-medium">
                            <i className="fas fa-dollar-sign mr-1 text-primary"></i>{" "}
                            NZ$ 100
                        </div>
                        <div className="flex-none px-2 py-1 bg-primary-surface text-xs rounded text-primary-pressed font-medium">
                            <i className="fas fa-hard-hat mr-1 text-primary"></i>
                            2 Worker
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportHistoryItem;
