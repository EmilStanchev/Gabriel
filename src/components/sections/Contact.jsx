/* eslint-disable react/no-unescaped-entities */
import ctaImage from "../../assets/cta-section-image.jpg";

const Contact = () => {
  return (
    <section id="contact" className="relative p-5">
      <div
        style={{ backgroundImage: `url(${ctaImage})` }}
        className="absolute top-0 left-0 right-0 bg-center bg-cover h-full w-full -z-[2] "
      ></div>
      <div className="section-container max-w-2xl text-center py-[50px] md:py-[100px] text-white z-[3]">
        <h2>Capture Moments, Create timeless Memories</h2>
        <p className="my-8">
          Don't miss out on the opportunity to turn your memories into timeless
          art. Let's work together to create stunning visuals that tell your
          unique story.
        </p>
        <a href="mailto:sgasangsterproduction@gmail.com" className="btn">
          Get Started
        </a>
      </div>
      <div className="bg-black/50 absolute top-0 left-0 right-0 bottom-0 -z-[1]"></div>
    </section>
  );
};

export default Contact;
