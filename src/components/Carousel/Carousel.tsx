import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

type CarouselProps = {
  images: string[];
  autoplay: boolean;
  showDots: boolean;
};

export default function Carousel({
  images,
  autoplay = false,
  showDots = false,
}: CarouselProps) {
  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    centerPadding: "60px",
  };

  return (
    <div className="slider-container">
      <div style={{ visibility: "hidden" }}>.</div>
      <Slider autoplay={autoplay} {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} style={{ height: "100%", width: "100%" }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
