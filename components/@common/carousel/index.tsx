import { useRef } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  const autoplay = useRef(Autoplay({ delay: 3000 }));
  const [emblaRef] = useEmblaCarousel(options, [autoplay.current]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>

      <style>
        {`.flex {
        display: flex
      }
      .overflow-hidden {
        overflow: hidden
      }`}
      </style>
    </div>
  );
};
export default Carousel;
