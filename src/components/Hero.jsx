
import { Carousel } from "flowbite-react";
import Button from "./Button";

export default function Hero() {
  const data = [
    { id: 1, src: "./veges-1.jpg", title: "We deliver organic foods." },
    { id: 2, src: "./veges-2.jpg", title: "100% Fresh & organic foods." },
    { id: 3, src: "./veges-3.jpg", title: "Deliver quality fresh foods." }
  ];
  return (
      <div className="h-[calc(100vh-92px)]">
      <Carousel indicators={false} leftControl={<></>} rightControl={<></>}>

        {data.map((item, index) => (
          <div key={index} className="relative w-full h-full overflow-hidden">
            <img
              src={item.src}
              className="object-cover w-full h-full"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-center uppercase w-full sm:w-1/2">
              <h1 className="text-secondary text-8xl sm:text-9xl font-extralight amatic">{item.title}</h1>
              <small className="text-secondary mt-2 tracking-widest text-sm">We deliver organic vegitables & foods</small>
              <Button name="Shop Now" link="/shop" className="w-1/3 md:w-1/10 mt-4 border-primary"/>
            </div>
          </div>
        ))}

      </Carousel>
    </div>
  );
}
