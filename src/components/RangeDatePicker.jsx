import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RangeDatePicker = () => {
    return (
        <>
            <label className="dateRangePicker btn border hover:bg-primary-surface hover:border-primary-border hover:text-primary border-neutral-400 rounded-full px-3 h-7 text-xs">
                <span className="text">Choose Date</span>
                <FontAwesomeIcon icon={"chevron-down"} className="ml-2" />
            </label>
            <input
                id="chooseDate"
                type="text"
                className="hidden"
                name="chooseDate"
            />
        </>
    );
};

export default RangeDatePicker;
