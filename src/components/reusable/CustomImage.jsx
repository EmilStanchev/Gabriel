/* eslint-disable react/prop-types */

const CustomImage = ({ src }) => {
  return (
    <img
      loading="lazy"
      src={src}
      className="w-full rounded-lg shadow-md transition duration-500 ease-in-out transform hover:scale-110"
    />
  );
};

export default CustomImage;
