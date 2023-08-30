"use client";
import Card from "../shared/Card";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("react-multi-carousel"), { ssr: false });
import "react-multi-carousel/lib/styles.css";
import IProduct  from "@/interface";

export const responsive = {
   desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
   },
   tablet: {
      breakpoint: { max: 1024, min: 480 },
      items: 2,
   },
   mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
   },
};

const Slider = ({ products }: { products: IProduct[] }) => {
   return (
      <>
         <Carousel
            autoPlay={true}
            autoPlaySpeed={2500}
            rewind={true}
            rewindWithAnimation={true}
            removeArrowOnDeviceType={["mobile", "tablet"]}
            draggable={true}
            swipeable={true}
            responsive={responsive}
            containerClass="carousel"
         >
            {products.map((v) => {
               return (
                  <Card key={v._id} img={v.img} name={v.name} price={v.price} url={v.slug.current} />
               );
            })}
         </Carousel>
      </>
   );
};

export default Slider;
