
export default function Feature(props) {
    return(
        <main  className={props.className}>
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-row justify-between gap-y-10 sm:gap-y-0 ">  
                <div id='feature' className='w-full flex flex-col md:flex-row space-y-10 justify-center text-center uppercase'>
                    <div className='w-full flex flex-col items-center group animate'>
                        <span className='w-25 h-25 bg-pink-300 rounded-full flex justify-center items-center relative group-hover:bg-primary transition-all'>
                            <span className='w-20 h-20 rounded-full border-2 border-secondary absolute'/>
                            <i className="bi bi-truck text-secondary text-5xl"/>
                        </span>
                        <h5 className='mt-3'>Free Shipping</h5>
                        <small className='mt-1 text-gray-400 font-semibold'>On order over $100</small>
                    </div>

                    <div className='w-full flex flex-col items-center group animate'>
                        <span className='w-25 h-25 bg-[#dcc698] rounded-full flex justify-center items-center relative group-hover:bg-primary transition-all'>
                            <span className='w-20 h-20 rounded-full border-2 border-secondary absolute'/>
                            <i className="bi bi-bluesky text-secondary text-5xl"/>
                        </span>
                        <h5 className='mt-3'>Always Fresh</h5>
                        <small className='mt-1 text-gray-400 font-semibold'>Product well package</small>
                    </div>

                    <div className='w-full flex flex-col items-center group animate'>
                        <span className='w-25 h-25 bg-[#a2d1e1] rounded-full flex justify-center items-center relative group-hover:bg-primary transition-all'>
                            <span className='w-20 h-20 rounded-full border-2 border-secondary absolute'/>
                            <i className="bi bi-award text-secondary text-5xl"/>
                        </span>
                        <h5 className='mt-3'>Superior Quality</h5>
                        <small className='mt-1 text-gray-400 font-semibold'>Quality Products</small>
                    </div>

                    <div className='w-full flex flex-col items-center group animate'>
                        <span className='w-25 h-25 bg-[#dcd691] rounded-full flex justify-center items-center relative group-hover:bg-primary transition-all'>
                            <span className='w-20 h-20 rounded-full border-2 border-secondary absolute'/>
                            <i className="bi bi-phone-flip text-secondary text-5xl"/>
                        </span>
                        <h5 className='mt-3'>Support</h5>
                        <small className='mt-1 text-gray-400 font-semibold'>24/7 Support</small>
                    </div>

                </div>
            </div>
            </main>
    )
}