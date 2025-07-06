import Slider from "@ant-design/react-slick";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banner from "../Components/Banner";
import { SampleNextArrow, SamplePrevArrow } from "../utils/Arrows";

function Dotari() {
  function CustomSlide(props) {
    const { txt, img, ...otherProps } = props;

    return (
      <div className="custom-slide" {...otherProps}>
        <div className="sli">
          <img src={img} />
          <p>{txt}</p>
        </div>
      </div>
    );
  }
  const settings = {
    infinite: true,
    speed: 300,
    // autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    // nextArrow: <SampleNextArrow className="arrow next" />,
    // prevArrow: <SamplePrevArrow className="arrow prev" />,
  };
  return (
    <>
      <Banner path={"Cercetare / Centru CCMA / dotari"} title={"Dotari"} />
      <section className="dotari">
        <div className="dotare">
          <h1>Masini pentru incercari mecanice</h1>
          <div className="slider-container">
            <Slider {...settings}>
              <CustomSlide
                index={1}
                img={require("../assets/images/1.jpg")}
                txt="Maşina universală de încercat INSTRON 8800 de 100 kN, cu bacuri hidrulice, pentru teste de tracţiune (de la temperatura ambiantă pâna la temperatura maximă de 1000C), încovoiere în trei puncte, compresiune şi teste de oboseală."
              />
              <CustomSlide
                index={2}
                img={require("../assets/images/1.jpg")}
                txt="Maşina de încercat LLOYD INSTRUMENTS LRX PLUS de 5 kN cu software specializat NEXYGEN, dotată cu extensometru EPSILON 3542-050M-025-ST şi bacuri speciale pentru încercarea la tracţiune a firelor."
              />
              <CustomSlide
                index={3}
                img={require("../assets/images/1.jpg")}
                txt="Maşina de încercat WALTER-BAI LVF de 50 kN dinamic şi 63 kN static cu bacuri hidraulice, dotată cu extensometru dinamic SANDNER EX A 25-5X, extensometru axial EPSILON 3542-010M-100-ST şi extensometru COD 3541-010M-100-ST pentru încercări de mecanica ruperii;"
              />
              <CustomSlide
                index={1}
                img={require("../assets/images/1.jpg")}
                txt="Maşina universală de încercat INSTRON 8800 de 100 kN, cu bacuri hidrulice, pentru teste de tracţiune (de la temperatura ambiantă pâna la temperatura maximă de 1000C), încovoiere în trei puncte, compresiune şi teste de oboseală."
              />
              <CustomSlide
                index={2}
                img={require("../assets/images/1.jpg")}
                txt="Maşina de încercat LLOYD INSTRUMENTS LRX PLUS de 5 kN cu software specializat NEXYGEN, dotată cu extensometru EPSILON 3542-050M-025-ST şi bacuri speciale pentru încercarea la tracţiune a firelor."
              />
              <CustomSlide
                index={3}
                img={require("../assets/images/1.jpg")}
                txt="Maşina de încercat WALTER-BAI LVF de 50 kN dinamic şi 63 kN static cu bacuri hidraulice, dotată cu extensometru dinamic SANDNER EX A 25-5X, extensometru axial EPSILON 3542-010M-100-ST şi extensometru COD 3541-010M-100-ST pentru încercări de mecanica ruperii;"
              />
            </Slider>
          </div>
          <p className="p">
            Echipament de măsurare cu achiziţie de date cu amplificator MGC cu 6
            canale, placă de achiziţie NI USB 6008 cu 8 canale de mǎsurare şi
            software LABWIEV Student Edition for Windows; Adaptoare de semnal
            (punţi tensometrice): KWS/T-5 cu un canal, MK cu cutie de comutare
            pentru 74 canale pentru mǎsurări statice, IEMI cu un canal;
            Echipament pentru teste de impact pe asamblări lipite, dotat cu
            ciocan de impact, captor de forţă HBM, traductor de deplasare
            rezistiv si sistem de măsurare cu achiziţie de date; Traductoare HBM
            de forţă (rezistive şi inductive), de deplasare (inductive), de
            deformaţie (rezistive simple şi rozete tensometrice) şi de presiune;
          </p>
        </div>
        <div className="dotare">
          <h1>Sisteme pentru analiza vibraţiilor</h1>
          <div className="slider-container">
            <Slider {...settings}>
              <CustomSlide
                index={1}
                img={require("../assets/images/1.jpg")}
                txt="Sistem de multianaliză PULSE – Bruel & Kjaer"
              />
              <CustomSlide
                index={2}
                img={require("../assets/images/1.jpg")}
                txt="Sisteme de analiză modală cu patru vibratoare electromagnetice şi 20 captoare de viteză tip PRODERA"
              />
              <CustomSlide
                index={3}
                img={require("../assets/images/1.jpg")}
                txt="Stand rotoric BENTLEY NEVADA"
              />
              <CustomSlide
                index={1}
                img={require("../assets/images/1.jpg")}
                txt="Aparatură pentru măsurarea vibraţiilor: lanţ de măsură Bruel & Kjaer cu captoare piezoelectrice, amplificator de măsură şi filtre trece-bandă şi lanţ de măsură Hottinger-Baldwin Messtechnik cu captoare inductive, punte cu frecvenţă purtătoare şi inscriptoare"
              />
              <CustomSlide
                index={2}
                img={require("../assets/images/1.jpg")}
                txt="Vibratoare cu mase excentrice în rotaţie cu forţe până la 230 kN şi frecvenţe între 5-50Hz"
              />
              <CustomSlide
                index={3}
                img={require("../assets/images/1.jpg")}
                txt="Vibratoare electrodinamice cu forţe de 200N, cu amplificator de putere şi generator de semnal"
              />
            </Slider>
          </div>
        </div>{" "}
        <div className="dotare">
          <h1>Calculatoare şi software</h1>
          <div className="slider-container">
            <Slider {...settings}>
              <CustomSlide
                index={1}
                img={require("../assets/images/1.jpg")}
                txt="Reţele de calculatoare, imprimante, copiatoare"
              />
              <CustomSlide
                index={2}
                img={require("../assets/images/1.jpg")}
                txt="Softuri pentru proiectare şi analiză cu elemente finite: SOLIDWORKS, COSMOS WORKS, ALGOR si altele"
              />
              <CustomSlide
                index={3}
                img={require("../assets/images/1.jpg")}
                txt="Stand rotoric BENTLEY NEVADA"
              />
              <CustomSlide
                index={1}
                img={require("../assets/images/1.jpg")}
                txt="Tablă interactivă smart board, proiectoare multimedia"
              />
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dotari;
