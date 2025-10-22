import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Products from '../components/Products'
import Vegetables from '../components/Vegetables'
import Deals from '../components/Deals'
import Partners from '../components/Partners'
import Subscribe from '../components/Subscribe'
import Testimonials from '../components/Testimonials'
export default function Home() {

    return (
        <>
            <Hero />
            <Feature className="bg-secondary py-35"/>
            <Vegetables />
            <Products />
            <Deals />
            <Testimonials />
            <Partners />
            <Subscribe />
        </>
    )
}