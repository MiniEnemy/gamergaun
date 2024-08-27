import Carousel from "react-bootstrap/Carousel";
import { items } from "./BannerData";

const BannerPage = () => {
  return (
    <Carousel indicators={false}>
      {items.map((value, index) => (
        <Carousel.Item key={value.id}>
          <img src={value.image} alt={value.title} className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


export default BannerPage;
