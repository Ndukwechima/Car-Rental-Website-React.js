const ServiceCard = ({ iconSrc, title }) => {
  return (
    <div
      className="bg-white py-10 px-6 rounded-[10px] flex flex-col
  item-center shawdow-lg max-w-[312px]"
    >
      <div className="flex justify-center items-center">
        <img src={iconSrc} style={{ width: "30px" }} alt="image" />
      </div>

      <p className="uppercase text-dark-gray font-bold mb-2.5 mt-[18px] text-center">
        {title}
      </p>

      <p className="text-subtitle-gray text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae,
        doloribus?
      </p>
    </div>
  );
};

export default ServiceCard;
