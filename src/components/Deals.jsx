import DealTimer from "./Timer"

export default function Deals() {
    return(
        <section className="relative w-full h-[90vh] flex justify-center text-center overflow-hidden">
            <img src="./vegetables.webp" alt="banner" loading="lazy" className="absolute w-full h-full object-cover" />
            
            <div className="relative z-10 text-white max-w-3xl px-4 top-10">
                <span className='text-primary mb-5'>Best Price For You</span>
                <h2 className='mb-6 text-5xl font-semibold'>Deal of the day</h2>
                <p className='mb-5'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
                </p>
                <h3 className='text-primary mb-1 text-2xl'>Bell Pepper</h3>
                <span className='text-primary mb-3'><del>$10</del> now $5 only</span>
                <DealTimer endDate="2025-10-25T00:00:00"/>
            </div>
        </section>
    )
}