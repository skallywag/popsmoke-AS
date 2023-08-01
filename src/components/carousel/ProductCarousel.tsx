import { Carousel } from "react-responsive-carousel";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductCarousel.scss";
import test from "../../assets/test.jpeg";

interface CarouselProps {}

const ProductCarousel: React.FC<CarouselProps> = () => {
  return (
    <Carousel
      className="productCarousel"
      showThumbs={false}
      showStatus={false}
      dynamicHeight={true}
      infiniteLoop
      renderArrowPrev={(clickHandler) => {
        return (
          <BsArrowLeftSquareFill
            className="leftArrow"
            size={60}
            onClick={clickHandler}
          />
        );
      }}
      renderArrowNext={(clickHandler) => {
        return (
          <BsArrowRightSquareFill
            className="rightArrow"
            size={60}
            onClick={clickHandler}
          />
        );
      }}
    >
      <img src={test} />
      <img src={test} />
      <img src={test} />
    </Carousel>
  );
};

export default ProductCarousel;
