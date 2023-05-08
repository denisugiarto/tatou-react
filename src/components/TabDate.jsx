import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const TabDate = () => {
    return (
        <Link
            className="tab tab-bordered hover:bg-primary-surface active:bg-primary"
            onclick="tabDateClickHandler(event)"
        >
            Date
            <FontAwesomeIcon icon={"sort"} className="ml-2" />
        </Link>
    );
};

export default TabDate;

{
    /* <script is:inline>
    function tabDateClickHandler(event) {
        let allTabActive = document.querySelectorAll(".tab-active");
        let selfElement = event.target;
        let childElement = event.target.children[0];
        if (allTabActive.length > 0) {
            allTabActive.forEach((tab) => tab.classList.remove("tab-active"));
        }
        if (!selfElement.classList.contains("tab-active")) {
            selfElement.classList.add("tab-active");
        }
        if (childElement.classList.contains("fa-sort")) {
            return childElement.classList.replace("fa-sort", "fa-sort-up");
        } else if (childElement.classList.contains("fa-sort-up")) {
            return childElement.classList.replace("fa-sort-up", "fa-sort-down");
        }
        event.target.children[0].classList.replace(
            "fa-sort-down",
            "fa-sort-up"
        );
    }
</script> */
}
