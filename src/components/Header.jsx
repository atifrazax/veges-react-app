

import MyNavbar from './Navbar'
export default function Header() {

    return (
        <>
        <header className="bg-primary text-secondary text-xs py-1.5">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-row justify-between">
                <a href="tel:+92123456789" className="whitespace-nowrap mb-2 sm:mb-0"><i className="bi bi-telephone-fill me-2"/>+1 234 567-89</a>
                <a href="mail:youremail@domain.com" className="uppercase whitespace-nowrap mb-2 sm:mb-0"><i className="bi bi-send-fill me-2"/>youremail@domain.com</a>
                <p className="uppercase whitespace-nowrap text-secondary"><i className="bi bi-box-fill me-2"/>3-5 business days delivery & free return</p>
            </div>
        </header>
        {/* <MyNavbar /> */}
        
        </>
    )
}