import { Step } from "../components";
import contacticon from "../assets/process.svg";

const steps = [
  "Choose a vehicle",
  "Pick location & date",
  "Book your care",
  "Finish process",
];

const RentingProcess = () => {
  return (
    <div className="pt-36">
      <div className="wrapper">
        <h1 className="head_text mb-9 text-center">
          {/* < className="w-[90vw] border border-[#00c0cf]  border-dashed"> */}
          <img src={contacticon} alt="" />
          <p className="font-kalam">
            Our renting <span className="text-primary-green">process</span>
          </p>
        </h1>
        <div className="flex md:flex-col justify-center md:justify-start gap-8">
          <div className="flex flex-col md:flex-row gap-5">
            {steps.map((step, i) => (
              <Step key={i} title={step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentingProcess;
