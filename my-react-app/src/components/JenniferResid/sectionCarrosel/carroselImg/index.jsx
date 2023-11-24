import Slider from "react-slick";
import styles from "./style.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../assets/Ap201/Imagem1.png";
import img2 from "../../../../assets/Ap201/Imagem2.png";
import img3 from "../../../../assets/Ap201/Imagem3.png";
import img5 from "../../../../assets/Ap201/Imagem5.png";
import img6 from "../../../../assets/Ap201/Imagem6.png";
import img7 from "../../../../assets/Ap201/Imagem7.png";
import img8 from "../../../../assets/Ap201/Imagem8.png";
import img9 from "../../../../assets/Ap201/Imagem9.png";
import img10 from "../../../../assets/Ap201/Imagem10.png";
import img11 from "../../../../assets/Ap201/Imagem11.png";
import img12 from "../../../../assets/Ap201/Imagem12.png";
import img13 from "../../../../assets/Ap201/Imagem13.png";
import img14 from "../../../../assets/Ap201/Imagem14.png";
import img15 from "../../../../assets/Ap201/Imagem15.png";
import img16 from "../../../../assets/Ap201/Imagem16.png";
import img17 from "../../../../assets/Ap201/Imagem17.png";
import img18 from "../../../../assets/Ap201/Imagem18.png";
import img19 from "../../../../assets/Ap201/Imagem19.png";
import img20 from "../../../../assets/Ap201/Imagem20.png";
import img21 from "../../../../assets/Ap201/Imagem21.png";

export const Carousel = () => {
  const images = [img1, img2, img3, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21,]; // Adicione aqui as URLs das suas imagens

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000,
  };

  return (
    <div className={styles.carroselContainer}>
      <div className={styles.carroselBackground}></div>
      <Slider {...settings} className={styles.carroselImg}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className={styles.imageContainer}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};