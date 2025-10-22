import {useObserver} from "../assets/hooks/Observer";
export default function Footer () {
    const scrollSmooth = (e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'});}

        useObserver();
    return (
        <footer className="relative bg-secondary py-30">
            <span onClick={scrollSmooth} className="absolute top-0 left-1/2 rounded-full w-12 h-12 bg-primary flex justify-center items-center cursor-pointer">
                <i className="bi bi-arrow-up text-light  animate-bounce"/>
            </span>
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-row justify-between gap-y-10 sm:gap-y-0 ">
                <div className="w-full px-1 md:px-10">
                    <h5 className="uppercase font-semibold mb-4 animate">vegesFood</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vero quaerat natus molestiae corrupti velit?</p>
                    <ul className="pt-10 flex flex-row space-x-4">
                        <li className="bg-gray-200 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center animate"><i className="bi bi-twitter-x text-2xl"/></li>
                        <li className="bg-gray-200 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center animate"><i className="bi bi-instagram text-2xl"/></li>
                        <li className="bg-gray-200 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center animate"><i className="bi bi-facebook text-2xl"/></li>

                    </ul>
                </div>
                <div className="w-full px-1 md:px-10">
                    <h5 className="uppercase font-semibold mb-4 animate">Menu</h5>
                    <ul className="space-y-3 animate">
                        <li><a href="/home">Shop</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/about">Journal</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="w-full ppx-1 md:px-10">
                    <h5 className="uppercase font-semibold mb-4 animate">Help</h5>
                    <ul className="space-y-3 animate">
                        <li><a href="/home">Shipping Information</a></li>
                        <li><a href="/home">Return & Exchange</a></li>
                        <li><a href="/home">Terms & Conditions</a></li>
                        <li><a href="/home">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="w-full flex flex-col px-1 md:px-10">
                    <h5 className="uppercase font-semibold mb-4 animate">Have a Question?</h5>
                    <span className="flex flex-row animate">
                        <i className="bi bi-geo-alt-fill me-2"/><address className="mb-2 ">203 Fake St. Mountain View, San Francisco, California, USA</address>
                    </span>
                    <span className="flex flex-row animate">
                        <i className="bi bi-telephone-fill me-2"/><a href="tel:+92123456789" className="whitespace-nowrap mb-2 ">+1 234 567-89</a>
                    </span>
                    <span className="flex flex-row animate">
                        <i className="bi bi-envelope-fill me-2"/><a href="mail:youremail@domain.com" className="whitespace-nowrap mb-2 sm:mb-0">youremail@domain.com</a>
                    </span>
                </div>
            </div>
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 justify-center text-center pt-20">
                <span>Copyright ©2025 All rights reserved | This template is made with ❤️ by <a href="https:atifraza.is-great.net/" className="font-bold uppercase">Atif</a></span>
            </div>
        </footer>
    )
}