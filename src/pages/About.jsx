import Button from "../components/Button"
import Banner from "../components/Banner"
import Subscribe from "../components/Subscribe"
import Testimonials from "../components/Testimonials"
import Feature from "../components/Feature"
import CountUp from "react-countup"
import { useObserver } from "../assets/hooks/Observer"
export default function About() {
    const countData = [
        { start: 0, end: 10000, title: "Happy Customer" },
        { start: 0, end: 100, title: "Product" },
        { start: 0, end: 999, title: "Branches" },
        { start: 0, end: 99, title: "Awards" },
    ]
    useObserver();

    return (
        <>
        <Banner src="./vegetables-basket.jpg" page="About Us"/>
        <section  className="bg-light py-15">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-20 sm:gap-y-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="flex mb-20 sm:mb-0">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MEglOulvgSY?si=gYcKFzGnuxcNhbaC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                    <div className="flex flex-col space-y-10 animate">
                        <h1>Welcome to Vegefoods an eCommerce website</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ducimus libero, aspernatur debitis iusto, error possimus, quas non vero aliquam repudiandae. <br />Magni dolores vel, quis repellat, non et natus accusamus nihil quaerat quam, porro provident voluptates. Natus repudiandae exercitationem repellendus?</p>
                        <Button name="Shop Now" link="/" className="w-1/2 sm:w-1/4"/>
                    </div>
                </div>
                <Subscribe />
            </div>
        </section>
            <div>
                <div className="relative w-full h-[80vh] flex justify-center text-center overflow- uppercase">
                    <img src="./vegetables.webp" alt="banner" className=" absolute w-full h-full object-cover"/>
                    <div className="top-1/2 space-x-2 absolute flex flex-row sm:space-x-30 uppercase">
                    {countData.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center space-y-2 text-light">
                            <span className="text-3xl text-dark flex flex-col justify-center items-center">
                                <CountUp end={item.end} enableScrollSpy={true} scrollSpyOnce={true} duration="7" />
                                <span className="font-extralight text-sm mt-2">{item.title}</span>
                            </span>                   
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        <Testimonials />
        <Feature className="bg-light py-35" />
            
        </>
    )
}