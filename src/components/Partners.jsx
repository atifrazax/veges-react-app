

export default function Partners() {
    const partners = [
        {src:"./partner-1.png", alt:"partner-1"},
        {src:"./partner-2.png", alt:"partner-2"},
        {src:"./partner-3.png", alt:"partner-3"},
        {src:"./partner-4.png", alt:"partner-4"},
        // {src:"./partner-5.png", alt:"partner-5"},
    ]
    return (
        <div className="bg-secondary py-25"><hr className="mb-15 border-1 border-gray-200"/>
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 gap-y-10 sm:gap-y-0 ">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {partners.map((partner, index) => (
                        <img key={index} src={partner.src} alt={partner.alt} />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}