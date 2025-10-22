import Button from "../components/Button";
import Banner from "../components/Banner";
import { useObserver } from "../assets/hooks/Observer";


export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form submitted")
    }
    useObserver();

    return (
        <>
        <Banner src="./vegetables-basket.jpg" page="Contact Us"/>
        <section  className="bg-light py-35">

            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-20 sm:gap-y-0 ">
                {/* ----Contact Info---- */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 sm:gap-0 ">
                    <span className="w-full flex flex-row p-10 bg-secondary animate">
                        <i className="bi bi-geo-alt-fill me-2"/><address className="mb-2 ">203 Fake St. California, USA</address>
                    </span>
                    <span className=" w-full flex flex-row p-10 bg-secondary animate">
                        <i className="bi bi-telephone-fill me-2"/><a href="tel:+92123456789" className="whitespace-nowrap mb-2 ">+1 234 567-89</a>
                    </span>
                    <span className="w-full flex flex-row p-10 bg-secondary animate">
                        <i className="bi bi-envelope-fill me-2"/><a href="mail:youremail@domain.com" className="whitespace-nowrap mb-2">youremail@domain.com</a>
                    </span>
                </div>
                {/* -----Contact Form----- */}
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    
                    <div className="w-full order-2 sm:order-1">
                        <h4>Map</h4>
                        <div className="w-full h-[400px] rounded-xl overflow-hidden sm:pr-6">
                            <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19843.162682978165!2d-0.12574!3d51.50853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3330c3fcb1%3A0x6b4d7a2ecf9dcae!2sLondon!5e0!3m2!1sen!2suk!4v1696840000000!5m2!1sen!2suk"
                            width="100%"
                            height="100%"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="w-full space-y-6 order-1 sm:order-2 mb-20 sm:mb-0">
                        <h4>Contact Form</h4>
                        {/* <div className="flex flex-row justify-center items-center gap-2 sm:gap-0"> */}
                            <input type="text" placeholder="Your Name" className="w-full border-0 py-3 px-5 animate"/>
                            <input type="email" placeholder="Your Email" className="w-full border-0 py-3 px-5 animate"/>
                            <input type="text" placeholder="Subject" className="w-full border-0 py-3 px-5 animate"/>
                            <textarea rows={5} placeholder="Message" className="w-full border-0 py-3 px-5 animate"/>
                            <Button type="submit" name="Send Message"/>
                    </form>
                </div>
            </div>
        </section>
        </>
    )
}