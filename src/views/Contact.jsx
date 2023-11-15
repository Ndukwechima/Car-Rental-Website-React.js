import { PrimaryButton } from "../components";

const Contact = () => {
  return (
    <div className="mt-36 py-28 bg-lightest-gray relative">
      <div
        className="wrapper flex flex-col lg:flex-row justify-start lg:justify-between
    gap-6 lg:gap-12"
      >
        <h1 className="head_text flex-1 text-center lg:text-start">
          Let's begin with <br />
          <span className="green_text">EasyCar rental</span>
        </h1>
        <div className=" flex flex-col gap-[26px] flex-1">
          <p className="text-light-gray text-center lg:text-start">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In enim
            sequi amet fugit quas nobis, porro dicta! Tempora, nulla autem!
          </p>
          <PrimaryButton className="mx-auto lg:max-0 w-full sm:w-fit">
            Contact us
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
