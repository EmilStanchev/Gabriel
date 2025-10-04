/* eslint-disable react/no-unescaped-entities */
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="text-sm leading-relaxed">
              Hello, my name is Gabriel, a 22-year-old visionary photographer
              hailing from Latvia. With an unyielding passion for capturing
              life's wonders through my lens, I immerse myself in the art of
              photography, transforming moments into timeless treasures with
              finesse and flair.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <ul className="text-sm">
              <li className="mb-2">Email: sgasangsterproduction@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex items-center justify-between">
          <p className="text-sm">&copy; 2025 Gabriel. All rights reserved.</p>
          <div className="flex justify-center items-center gap-5">
            <a
              href="https://www.youtube.com/@aangle8757"
              target="_blank"
              className="text-5xl hover:text-red-500 hover:-translate-y-2 transition-transform"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a
              href="https://www.instagram.com/sgasp_"
              target="_blank"
              className="  text-5xl hover:text-red-400 hover:-translate-y-2 transition-transform"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a
              href="mailto:sgasangsterproduction@gmail.com"
              target="_blank"
              className="  text-5xl hover:text-blue-400 hover:-translate-y-2 transition-transform"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
