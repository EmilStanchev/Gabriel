/* eslint-disable react/prop-types */
import { Link } from "react-scroll";

const HomeLink = ({ path, text, className }) => {
  const link = {
    cursor: "pointer",
  };

  return (
    <Link
      to={path}
      smooth={true}
      duration={500}
      style={{ ...link }}
      className={className}
    >
      {text}
    </Link>
  );
};

export default HomeLink;
