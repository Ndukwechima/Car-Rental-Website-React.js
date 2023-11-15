import busIcon from "../assets/bus-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import calendarIcon from "../assets/calendar-icon.svg";
import "../styles/Hero.css";

import { LabelInput, PrimaryButton } from "../components";

const Hero = () => {
  return (
    <div className="bg-white mt-[10rem]">
      <div className="bg-lightest-gray relative">
        <div className="wrapper hero min-h-[444px]">
          <h1 className="head_text pt-28 text-center">
            Find your <span className="green_text">rental car</span>
          </h1>
          <h4 className="text-subtitle-gray text-center font-raleway text-xl pb-11">
            You choose. We deliver
          </h4>
        </div>
      </div>
      <div className="wrapper">
        <div className="relative bg-white px-10 sm:px-[76px] py-9 sm:py-[70px] mt-5 sm:mt-[166px] min-h-[330px] shadow-lg rounded-xl flex flex-col gap-8">
          <div className="flex flex-col xl:flex-row gap-5">
            <LabelInput
              label="Vehicle Type"
              placeholder="Select Car Group"
              icon={busIcon}
            />
            <LabelInput
              label="Picking Up Location"
              placeholder="Aitport Or Anywhere"
              icon={locationIcon}
            />
            <LabelInput
              label="Picking Up Date"
              placeholder="10/22/2023"
              icon={calendarIcon}
            />
            <LabelInput
              label="Returning Date"
              placeholder="Select Car Group"
              icon={busIcon}
            />
          </div>

          <PrimaryButton
            className="w-full lg:w-2/3 mx-0 lg:mx-auto"
            small={false}
          >
            Find your car
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
