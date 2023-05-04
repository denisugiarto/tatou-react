import CardSupportItemList from "./CardSupportItemList";

const CardSupportList = () => {
    return (
        <div className="flex flex-col gap-2 mt-2">
            <CardSupportItemList donations={["2 Plumber", "2 Cleaner"]} />
            <CardSupportItemList donations={["2 Plumber", "2 Cleaner"]} />
            <CardSupportItemList donations={["2 Plumber", "2 Cleaner"]} />
        </div>
    );
};

export default CardSupportList;
