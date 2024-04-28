"use client";

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Styles/service.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyringe, faKey, faKitMedical} from "@fortawesome/free-solid-svg-icons";

const ProductImages = () => {
  //slideshow

  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0",
  };

  return (
    <div className="images-body">
      <div className="inside-images">
        <div className="headings in-images">
          <p className="text-3xl font-bold text-center sm:text-2xl"> 
              Our Key Services</p>
          <p className="text-2xl mt-2 text-yellow-300 text-center font-light sm:text-1xl ">
            Explore our comprehensive range of medical services designed to meet
            your healthcare needs.
          </p>
        </div>

        <Slider {...settings}>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "25rem",
                backgroundColor: "green",
                borderRadius: "5px",
              }}
            >
       <img  src='https://i.pinimg.com/564x/d0/cc/d8/d0ccd88ec86e45e0c3d634298478ddd3.jpg'/>
              <p className=" text-center mt-2 text-2xl  sm:text-2xl">Pharmacy Services</p>
              <p className="text-center  mt-1 text-1xl sm:text-sm text-yellow-300 font-light">
                Pharmacy is responsible for storing medicine, selling medicine,
                Provide pharmaceutical support to clients. it is managed by well
                trained pharmacists
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="Buy"
                  className=" mt-3 inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Pharmacy
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "25rem",
                backgroundColor: "green",
                borderRadius: "5px",
              }}
            >
              <img src='https://i.pinimg.com/564x/9d/d5/f3/9dd5f373cf11ab7a6ac2dd2f1e67e0e5.jpg' />
              <p className=" text-center mt-2   sm:text-2xl" >Reception Services</p>
              <p className="text-center mt-1 text-1xl text-yellow-300 sm:text-sm font-light ">
                Reception is the entry point of all the services
                The reception links clients to doctor, pharmacist and
                any other staff
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="Entry"
                  className="mt-5 inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Reception
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "25rem",
                backgroundColor: "green",
                borderRadius: "5px",
              }}
            > 
            <img src='https://i.pinimg.com/564x/32/52/96/325296847530608231e442899b8f8eda.jpg'/>

               <p className=" text-center mt-2 text-2xl sm:text-2xl" >OPD Services</p>
              <p className="text-center mt-1  text-1xl text-yellow-300 sm:text-sm font-light">
                This is the doctors office each and ever client is warmly Welcome
                to this office and every client is helped accordingly. get any
                medical help from this office
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="Office"
                  className=" inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore OPD
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "25rem",
                backgroundColor: "green",
                borderRadius: "5px",
             
              }}
            >
              <img src="https://i.pinimg.com/564x/0a/9b/05/0a9b055d7582f2104d245e5e21a7d920.jpg"/>
              <p className="text-center mt-2 text-2xl  sm:text-2xl">Maternity Services</p>
              <p className="text-center text-1xl text-yellow-300">
                This is the doctors office each and ever client is warmly Welcome
                to this office and every client is helped accordingly. get any
                medical help from this office
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="Mom"
                  className=" inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Maternity
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "25rem",
                backgroundColor: "green",
                borderRadius: "5px",
              }}
            >
              <img src="https://i.pinimg.com/564x/e5/a3/89/e5a38970f2e1dbbe635950f0bb5663e8.jpg"/>
               <p className="ttext-center mt-2 text-2xl sm:text-2xl">Lab Services</p>
              <p className="text-center   text-1xl text-yellow-300 sm:text-sm font-light">
                This is the doctors office each and ever client is warmly Welcome
                to this office and every client is helped accordingly. get any
                medical help from this office
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="Laboratory"
                  className=" inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Lab
                </a>
              </div>
            </div>
          </div>
          <div className="slides">
            <div
              style={{
                width: "18rem",
                height: "25rem",
                backgroundColor: "green",
                borderRadius: "5px",
              }}
            >
              <img src="https://i.pinimg.com/564x/a1/77/8f/a1778f837c56f5f460817f541ba28a0c.jpg"/>
               <p className="text-center mt-2 text-2xl sm:text-2xl">Dental Services</p>
              <p className="text-center   text-1xl text-yellow-300 sm:text-sm font-light">
                This is the doctors office each and ever client is warmly Welcome
                to this office and every client is helped accordingly. get any
                medical help from this office
              </p>
              <div className="">
                <a
                  style={{
                    marginLeft: "50px",
                  }}
                  href="Dentist"
                  className=" inline-block rounded-md border border-transparent bg-green-600 px-8 py-3 text-center font-medium text-white hover:bg-yellow-700"
                >
                  Explore Dental
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default ProductImages;
