import GalleryButton from "./GalleryButton";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import useEmblaCarousel from "embla-carousel-react";

export default function Gallery({ imageUrls }) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  function scrollPrev() {
    embla?.scrollPrev();
  }

  function scrollNext() {
    embla?.scrollNext();
  }

  return (
    <div className="embla relative">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {imageUrls.map(url => (
            <div className="embla__slide flex-[0_0_100%]" key={url}>
              <img
                className="block h-[13rem] w-full rounded-t-2xl object-cover"
                src={url}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      <GalleryButton
        className="embla__prev left-4"
        label="Previous image"
        onClick={scrollPrev}
      >
        <BsArrowLeftShort />
      </GalleryButton>

      <GalleryButton
        className="embla__next right-4"
        label="Next image"
        onClick={scrollNext}
      >
        <BsArrowRightShort />
      </GalleryButton>
    </div>
  );
}