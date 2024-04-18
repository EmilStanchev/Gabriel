import {
  fifthHero,
  firstHero,
  fourthHero,
  secondHero,
  sixthHero,
  thirdHero,
  seventhHero,
  eightHero,
} from "../../data/photos";
import CustomImage from "../reusable/CustomImage";
const images = [
  firstHero,
  secondHero,
  thirdHero,
  fourthHero,
  fifthHero,
  sixthHero,
  seventhHero,
  eightHero,
];
const Gallery = () => {
  return (
    <div id="gallery" className="flex flex-col gap-5 bg-white">
      <div className="p-5 sm:p-8">
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {images?.map((image, index) => {
            return <CustomImage key={index} src={image} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Gallery;
