const Stepper = ({ activeStep = 0, stepperLength = 5 }) => {
    const stepperItems = () => {
        let content = ``;
        for (let i = 0; i < stepperLength; i++) {
            if (i === activeStep) {
                content += `<div className="border border-primary rounded-full h-4 bg-primary"></div>`;
            } else {
                content += `<div className="border border-primary rounded-full h-4 bg-white"></div>`;
            }
        }
        return content;
    };
    return (
        <div
            className={`stepper grid grid-cols-${stepperLength} gap-2 md:gap-4 mt-4`}
        >
            {stepperItems()}
        </div>
    );
};

export default Stepper;

// <!-- <script>
//   console.log("tes");
//   const container = document.querySelector(".stepper");
//   console.log(container);
//   let stepperItem = document.createElement("div");
//   let item =
//     '<div className="btn btn-outline btn-primary bg-white rounded-full h-4"></div>';
//   let stepperItems = "";
//   for (let i = 1; i < stepperLength; i++) {
//     stepperItems += item;
//   }
//   console.log(length);
//   console.log(stepperItem);
//   console.log(stepperItems);
//   stepperItem.innerHTML = stepperItems;
//   container.appendChild(stepperItem);
// </script> -->
