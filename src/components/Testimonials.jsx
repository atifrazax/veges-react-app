
import { Carousel } from "flowbite-react";
export default function Testimonials() {
    const data = [
    { id: 1, src: "./person-3.jpg", author: "Atif Raza", rank: "Web Developer", comment: "Far far mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in" },
    { id: 2, src: "./person-2.webp", author: "John Doe", rank: "System Analyst", comment: "Way, behind the countries Vokalia and Consonantia, there live the blind texts. Separated they live in" },
    { id: 3, src: "./person-1.webp", author: "layla Smith", rank: "marketing manager", comment: "Mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in" },
    { id: 4, src: "./person-2.webp", author: "George Doe", rank: "Interface Designer", comment: "Word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in" },
  ];
    return(
        <section className="bg-secondary pt-20">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 gap-y-10 sm:gap-y-0 ">
            <div className="flex flex-col items-center justify-center text-center">
                <span className='text-primary mb-3'>Testimony</span>
                <h2 className='mb-6 text-4xl font-semibold'>Our satisfied customer says</h2>
                <p className='mb-1 md:w-1/2'>Far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live.
                </p>
                <div className="h-[80vh] w-full overflow-hidden">
                <Carousel theme={{
                                    indicators: {
                                    active: {
                                        on: "bg-primary",
                                        off: "bg-gray-400 hover:bg-primary/50",
                                    },
                                    },
                                }} leftControl={<></>} rightControl={<></>}>

                    {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center justify-center bg-white text-center p-4"
                        >
                        <div className="w-25 h-25 rounded-full overflow-hidden mb-20 relative">
                            <img
                            src={item.src}
                            alt={item.author}
                            loading="lazy"
                            className="object-cover w-full h-full"
                            />
                            {/* <span className="absolute bottom-0 right-0 text-4xl text-dark">""</span> */}
                        </div>
                            <div className="flex flex-col items-center">
                                <p className="italic mb-10">"{item.comment}"</p>
                                <h5 className="font-semibold uppercase mb-3">{item.author}</h5>
                                <p className="text-sm uppercase">{item.rank}</p>
                            </div>
                        </div>
                    ))}

                </Carousel>
                </div>
            </div>
            </div>
        </section>
    )
}