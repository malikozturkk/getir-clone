import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
import slider from "../styles/homepage/Slider.module.scss"
import Slider1 from "./assets/jpeg/slider/slider1.jpeg"
import Slider2 from "./assets/jpeg/slider/slider2.jpeg"
import Slider3 from "./assets/jpeg/slider/slider3.jpeg"
import Slider4 from "./assets/jpeg/slider/slider4.jpeg"
import Slider5 from "./assets/jpeg/slider/slider5.jpeg"
import Slider6 from "./assets/jpeg/slider/slider6.jpeg"
import Slider7 from "./assets/jpeg/slider/slider7.jpeg"
import Slider8 from "./assets/jpeg/slider/slider8.jpeg"
import Slider9 from "./assets/jpeg/slider/slider9.jpeg"
import Slider10 from "./assets/jpeg/slider/slider10.jpeg"
import Slider11 from "./assets/jpeg/slider/slider11.png"
import Slider12 from "./assets/jpeg/slider/slider12.jpeg"
import Slider13 from "./assets/jpeg/slider/slider13.jpeg"
import Slider14 from "./assets/jpeg/slider/slider14.jpeg"
import { useSelector } from "react-redux"

function Sliders() {
  const { selectLang } = useSelector(state => state.language)
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  }
  let images = [
    Slider1,
    Slider2,
    Slider3,
    Slider4,
    Slider5,
    Slider6,
    Slider7,
    Slider8,
    Slider9,
    Slider10,
    Slider11,
    Slider12,
    Slider13,
    Slider14,
  ]
  return (
    <section className={slider.section}>
      <div className={slider.container}>
        <Slider {...settings} className={slider.slider}>
          {images.map((image, index) => (
            <div key={index} className={slider.div}>
              <Image src={image} className={slider.image} alt="Slider Images" width={400} height={200} key={index} />
          </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Sliders