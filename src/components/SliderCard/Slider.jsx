
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import supermarket from "../../../img/backrooms_supermarket.jpg";
import "./slidercard.css";

const SliderHome = () => {
  const settings = {
    nav: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <section className='homeSlide box'>
      {/* ! Insertar imagen de presentacion aqui */}
      <img src={supermarket}></img>
    </section>
  )
}

export default SliderHome
