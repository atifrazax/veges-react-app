import Button from "./Button";
import { useObserver } from "../assets/hooks/Observer";

export default function Vegetables() {
    useObserver();
    return(
        <section className="bg-secondary pb-25">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 gap-y-10 sm:gap-y-0 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
        
        <div className=" relative order-3 md:order-2 animate">
            <img src="./fruits.jpg" alt="Fruits" loading="lazy" className=""/>
            <span className="absolute bottom-0 left-0 bg-primary text-secondary py-1 px-3">Fruits</span>
        </div>
        <div className="relative bg-pink-400 order-5 md:order-3 animate">
            <img src="./juices.jpg" alt="Juices" loading="lazy" className=""/>
            <span className="absolute bottom-0 left-0 bg-primary text-secondary py-1 px-3">Juices</span>
        </div>

        
        <div className="text-center space-y-3 order-1 md:order-2 flex flex-col justify-center items-center animate">
            <h2 className="text-primary">Vegetables</h2>
            <p className="pb-3">Protect the health of every home</p>
             <Button name="Shop Now" link="/shop" className="w-1/2 mt-4 border-primary"/>
        </div>
        <div className="relative order-4 md:order-5 animate">
            <img src="./dries.jpg" alt="Dry Fruits" loading="lazy" className=""/>
            <span className="absolute bottom-0 left-0 bg-primary text-secondary py-1 px-3">Dries</span>
        </div>

        
        <div className=" relative order-5 md:order-4 animate">
            <img src="./veges-1.jpg" alt="Vegetables" loading="lazy" className=""/>
            <span className="absolute bottom-0 left-0 bg-primary text-secondary py-1 px-3">Vegetables</span>
        </div>
        <div className=" relative order-2 md:order-4 animate">
            <img src="./fruits-1.png" alt="juices" loading="lazy" className="flex"/>
        </div>
        </div>
        </div>
        </section>
    )
}