import Slider from "@ant-design/react-slick";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SampleNextArrow, SamplePrevArrow } from "../utils/Arrows";

function Home() {
  function CustomSlide(props) {
    const { index, ...otherProps } = props;
    return (
      <div className={`custom custom-${index}`} {...otherProps}>
        <h1>Italy 111Transfers</h1>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe vitae
          repudiandae corporis nobis totam assumenda tempora distinctio, magni,
          nemo odit ex facilis sint sed beatae temporibus commodi voluptatem
          vero quaerat.
        </p>
        <div className="button second">
          <Link to="/">
            Home <FaArrowAltCircleRight />
          </Link>
        </div>
      </div>
    );
  }
  //   const [bg, setBg] = useState();

  function CustomSlide1(props) {
    const { index, img, ...otherProps } = props;
    console.log(process.env.PUBLIC_URL);

    return (
      <div className="full" {...otherProps}>
        <img src={img} alt="" />
        <h1>De ce Inginerie Mecanică la FIIR?</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At
          perspiciatis inventore aspernatur numquam, similique dicta accusantium
          nam placeat impedit deleniti dolorum necessitatibus? Rerum quisquam
          eaque voluptatibus ex impedit quod sunt?
        </p>
        <div className="buttons">
          <div className="button main">
            <Link to="/">
              <FaArrowAltCircleLeft />
            </Link>
          </div>
          <div className="button rd">
            <Link to="/">
              <FaArrowAltCircleRight />
            </Link>
          </div>
        </div>
      </div>
    );
  }
   
  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
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
  const settings1 = {
    infinite: true,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="arrow next" />,
    prevArrow: <SamplePrevArrow className="arrow prev" />,
  };
  return (
    <>
      <section className="header">
        <div className="row">
          <div className="right">
            <h2>Departamentul</h2>
            <h1>Rezistenta Materialelor</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              maxime id ullam dignissimos sint commodi excepturi. Aut, sapiente!
              Id consequatur ratione quod praesentium, dolor modi sequi
              cupiditate a vero fugit?
            </p>
            <div className="button main">
              <Link to="#">
                Citeste mai multe <FaArrowRight />
              </Link>
            </div>
          </div>{" "}
          <div className="left">
            <img src={require("../assets/images/bg.png")} alt="" />
          </div>
        </div>
      </section>
      <section className="events">
        <h2>EVENIMENTE</h2>
        <div className="row">
          <h1>Anunturi de evenimente sau ceva titlu</h1>
          <div className="txt">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium sit rerum repudiandae reprehenderit eveniet quo,
              repellat nulla praesentium. Est repudiandae earum doloribus nulla
              consectetur iste accusamus, odit labore doloremque itaque?
            </p>
            <div className="button main">
              <Link to="#">
                See more <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="slider-container">
            <Slider {...settings}>
              <CustomSlide index={1} />
              <CustomSlide index={2} />
              <CustomSlide index={3} />
              <CustomSlide index={4} />
              <CustomSlide index={5} />
              <CustomSlide index={6} />
            </Slider>
          </div>
        </div>
      </section>
      <section className="carousel">
        <div className="slider-container">
          <Slider {...settings1}>
            <CustomSlide1
              index={0}
              //   img={`${process.env.PUBLIC_URL}/assets/images/39-of-045-768x512.jpg`}
              img="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
            />
            <CustomSlide1
              index={1}
              //   img={`${process.env.PUBLIC_URL}/assets/images/27-of-045-768x512.jpg`}
              img="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
            />
            <CustomSlide1
              index={2}
              //   img={`${process.env.PUBLIC_URL}/assets/images/45-of-045-768x512.jpg`}
              img="https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg"
            />
          </Slider>
        </div>
      </section>
      <section className="logos">
        <div className="logo-track">
          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>

          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>

          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>

          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>

          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>

          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>

          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>

          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>

          <div className="logo">
            <img src={require("../assets/images/fiirlogo.png")} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
