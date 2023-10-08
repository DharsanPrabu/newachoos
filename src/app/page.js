"use client";
import { React } from "react";

import { SlArrowRight } from "react-icons/sl";
import {
  AiOutlineArrowRight,
  AiTwotoneVideoCamera,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { MdFormatListBulleted } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript

// import slide_image_1 from "/achoos.png";
// import slide_image_2 from "/achoos.png";
//  import slide_image_3 from "./public/achoos.png";

// const images = [
//   'achoos.png',
//   'bg1.avif',
//   'achoos.png',
//   // Add more image URLs as needed
// ];
// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import { EffectCoverflow, Pagination, Navigation } from "swiper";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", color: "red" }}
    //   onClick={onClick}
    // />
    <FaArrowAltCircleRight className={className}onClick={onClick}style={{ ...style, display: "block", color: "black" }}/>

  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", color: "red" }}
    //   onClick={onClick}
    // />
    <FaArrowAltCircleLeft className={className}onClick={onClick}style={{ ...style, display: "block", color: "black" }}/>
  );
}

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const [currentSlide, setCurrentSlide] = useState(0);

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  // };

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [displayImages, setDisplayImages] = useState(images.slice(0, 3));

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  // const showNextThreeImages = () => {
  //   const nextIndex = currentIndex + 1;
  //   const nextImages = [images[nextIndex], images[nextIndex + 1], images[nextIndex + 2]].filter(Boolean);
  //   setDisplayImages(nextImages);
  // };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // speed: 2000,
    autoplaySpeed: 2000,
    autoplay: false,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var settings1 = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // speed: 2000,
    autoplaySpeed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <div>
      <nav>
        <div className="flex justify-between">
          <div className="flex sm:pl-16 pl-4 flex justify-between rounded-lg cursor:pointer">
            <p href="/">
              {" "}
              <img
                src="/achoos.png"
                alt=""
                width="100px"
                className="mr-10 mt-4"
              />
            </p>

            <div className="pl-40 pt-4 mt-1 hidden md:flex space-x-10  text-black  font-bold  ">
              <Link href=" ">Who We Are </Link>
              <Link href="">What we have</Link>
              <Link href="">Save a date</Link>
              <Link href="">Secrets of Acchoos</Link>
              <Link href="">Words of Acchoos</Link>
              <Link href="">Login</Link>
            </div>
          </div>

          <div className="md:pl-0 md:hidden flex sm:mr-16 mr-4 pt-8">
            <div
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <HiX className="text-2xl text-black" />
              ) : (
                <HiMenu className="text-2xl text-black" />
              )}
            </div>
          </div>

          {/* Desktop  */}
          <div className="hidden md:flex justify-end">
            {/* <div className='hidden md:flex mr-6 pl-8 py-4 relative rounded-full transition duration-200 font-bold text-sm text-white hireBtn cursor-pointer flex w-56' onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>
                              <p>Hire Top Engineers </p>
                              {btnHover6 ?
                                <p className='px-3 py-3 rounded-full hireIcon absolute right-2 mt-0' style={{ bottom: "4px" }}><AiOutlineArrowRight style={{ width: "20px", height: "20px" }} /></p>
                                :
                                <p className='p-4 rounded-full hireIcon absolute right-1.5 mt-0' style={{ bottom: "5px" }}><SlArrowRight style={{ width: "11px", height: "10px" }} /></p>
                              }
                            </div> */}
          </div>
        </div>

        {/* mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 absolute z-40 w-full bg-white">
            <ul className="text-black p-4 py-8  ">
              <li>
                <Link href="/vetting">Who We Are </Link>
              </li>
              <li className="pt-8">
                <Link href="/vetting">What we have</Link>
              </li>
              <li className="pt-8">
                <Link href="/blog">Save a date</Link>
              </li>
              <li className="pt-8">
                <Link href="/blog">Secrets of Acchoos</Link>
              </li>
              <li className="pt-8">
                <Link href="/blog">Words of Acchoos</Link>
              </li>
              <li className="pt-8">
                <Link href="/blog">Login</Link>
              </li>
            </ul>
            <div className="  flex w-60 ml-4  pb-8">
              {/* <div className=' justify-between sm:pl-4 pl-4 py-2 rounded-full sm:font-bold font-medium sm:text-base text-sm text-white hireBtn cursor-pointer flex justify-between w-48 sm:w-80' onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                              <p className="sm:mt-1">Hire Top Engineers</p>
                                {btnHover3 ?
                                  <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><AiOutlineArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                                :
                                  <p className='sm:p-2 p-2 rounded-full mr-2  hireIcon right-5 mt-0' style={{ bottom: "7px" }}><SlArrowRight className="sm:w-3 w-2 sm:h-3 h-2"/></p>
                                }
                              </div> */}
            </div>
          </div>
        )}
      </nav>

      <Slider {...settings1} className="   ">
        <div className="px-6 ">
          <p className="  rounded overflow-hidden shadow-lg cursor-pointer ">
            <img
              src="bg1.png"
              alt="Image Alt Text"
              // style={{ width: "auto", height: "auto" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className=" rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              src="bg2.png"
              alt="Image Alt Text"
              // style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className="  rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              src="bg3.png"
              alt="Image Alt Text"
              // style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className="  rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              src="bg2.png"
              alt="Image Alt Text"
              // style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
      </Slider>

      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      ></div>

      <div className=" text-4xl  sm:mt-20 mt-10 bg-purple-400 py-20 py-10">
        <h3 className="sm:text-4xl text-sm text-center">Customise your own design</h3>

        <div className="sm:flex justify-center   pt-4   ">
        <div className="  sm:pl-4 pl-12 w-60 ">
         <label  className="pl-4 pr-4   border rounded-full sm:py-4 py-2 text-sm cursor-pointer bg-white text-sm flex" for="resume"><AiOutlineCloudUpload className="w-5 h-5 mr-3"/>Upload resume</label>
         <input
         id="resume"
         type="file"
           className=" w-0 h-0  "style={{visibility:"hidden",pb:"0"}}
           
         />
       </div>
         
          <p className="sm:text-xl text-sm sm:pt-3 pt-0 text-center sm:pl-4 pl-0">or</p>

          <div className="  sm:pl-4 pl-12 w-60">
         
            <input
              type="text"
              className=" pl-2 pr-4   border rounded-full sm:py-4 py-2 text-sm "
              placeholder="Customise your favourite"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="sm:text-4xl text-sm text-center sm:pt-20 pt-10 "> Collections Avaiable</h3>
      </div>


      <Slider {...settings} className="w-[88vw] m-auto">
        <div className="px-6 ">
          <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              src="achoos.png"
              alt="Image Alt Text"
              style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              src="achoos.png"
              alt="Image Alt Text"
              style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              src="achoos.png"
              alt="Image Alt Text"
              style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
        <div className="px-6 ">
          <p className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
            <img
              src="achoos.png"
              alt="Image Alt Text"
              style={{ width: "300px", height: "400px" }}
            />
          </p>
        </div>
      
        
      </Slider>

     <div className=" relative mt-20">
     <div className="  sm:h-[800px] h-400px    ">
        <div
          className="  h-[100px] bg-purple-400    "
           
        >
          <h2 className="sm:text-6xl text-sm flex justify-center pt-4">
            Get in touch with us
          </h2>

          <div className="sm:flex justify-between ">
                  <div className="sm:ml-40 ml-20   ">
                    <h3 className="sm:text-2xl text-sm sm:ml-0 ml-8">Join Our Team</h3>

                    <div className=" sm:mt-0 mt-1  w-48 ">
         <label  className="pl-4 pr-4   border rounded-full sm:py-4 py-1 text-sm cursor-pointer bg-white text-sm flex" for="resume"><AiOutlineCloudUpload className="w-5 h-5 mr-3"/>Upload resume</label>
         <input
         id="resume"
         type="file"
           className=" w-0 h-0  "style={{visibility:"hidden",pb:"0"}}
           
         />
       </div>
         
                    <div className="sm:ml-0 ml-4 ">
                    <button className="border rounded-full w-32 h-7 bg-white  mt-3">
                      <p className="text-center  text-gray-800">Submit </p>
                    </button>
                    </div>
                  </div>

                  <div className=" mr-20  sm:w-auto w-80   text-center sm:mt-0 mt-4">
                    <h4 className="font-bold sm:text-xl text-sm">Visit The Shop</h4> 
                    <p className="sm:text-xl text-sm">No 14/16, Gurunathan Street,</p>
                    <p className="sm:text-xl text-sm">Pattabiraman Saalai Road,</p>
                    <p className="sm:text-xl text-sm">Opp to srinivasa Perumal Koil, Tennur</p>
                    <p className="sm:text-xl text-sm">Trichy – 620017.</p>
                  </div>
          </div>
         

        </div>
        <p
          className="sm:h-[300px] h-[200px] w-full bg-purple-400 rounded-b-full"
          style={{
            borderBottomLeftRadius: "100%",
            borderBottomRightRadius: "100%",
          }}
        ></p>

       
      </div>
     

      <div className=" absolute sm:top-80 top-80 sm:left-[20vw] left-[0vw]">
             <div className=":flex justify-center ">
              <div className="flex justify-center     overflow-hidden shadow-lg sm:w-[800px] w-[300px] h-60   bg-white"
              >
                <div className=" mt-8 ">
                
                  <h2 className="text-center">Track Your Order</h2>
                  <div className="  mt-4 text-blue-400">
                    <input
                      type="text"
                      className="pl-6 pr-4  border rounded-full py-2 text-sm bg-purple-400 text-black focus:outline-none  sm:w-auto w-40"
                      placeholder="Order Number"
                    />
                  </div>
                  <div className="  mt-4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3  "></div>
                    <input
                      type="text"
                      className="pl-6 pr-4  border rounded-full py-2 text-sm text-black bg-purple-400  focus:outline-none sm:w-auto w-40"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
          </div>
          <div className="flex justify-center mt-8 ">
            <p>
             
              <AiOutlineYoutube className=" text-white w-14 h-14 border rounded-full bg-black px-2 py-2" />
            </p>
            <p>
              <AiOutlineInstagram className=" text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2" />

            </p>
            <p>
              <IoLogoWhatsapp className="text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2" />
            </p>
          </div>
          <div className="  flex justify-center  mt-4  ">
            
          <div className="overflow-hidden shadow-lg   ">
              <input
                type="text"
                className="pl-6 pr-4 py-2 border rounded-lg py-3 text-sm  focus:outline-none sm:w-96 w-20 "
                
                placeholder="Email"
              />
            </div>

            <div className=" mt-2 ml-32 sm:w-40 w-24 sm:h-10  h-6 border rounded-lg bg-purple-400 cursor-pointer ">
              <p className="pl-4  text-center sm:text-lg text-sm">Subscribe</p>
            </div>

          </div>
       
        </div>
        
        </div>
        <hr className="  border-2 border-black"/>
      <div className=" ">
        <h4 className="sm:text-4xl text-lg sm:text-right text-center">*Terms And Conditions</h4>
      </div>
    </div>
  );
}

export default Home
