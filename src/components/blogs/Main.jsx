import Button from "../Button";
import Aside from "./Aside";

export default function Main(props) {

    const blogs = [
        {img:"product-3.jpg", date: "May 25, 2025", author: "Admin", comments: 3, title: "Far far away, behind the word mountains", desc: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"},
        {img:"product-4.jpg", date: "May 27, 2021", author: "Admin", comments: 2, title: "Far far away, behind the word mountains", desc: "Countries Vokalia and Consonantia, there live the blind texts. Separated they live in"},
        {img:"product-2.jpg", date: "May 27, 2023", author: "Admin", comments: 2, title: "Far far away, behind the word mountains", desc: "Vokalia and Consonantia, there live the blind texts. Separated they live in"},
        {img:"product-1.jpg", date: "Jun 27, 2022", author: "Admin", comments: 2, title: "Far far away, behind the word mountains", desc: "Away, behind the word mountains, Vokalia and Consonantia, there live the blind texts. Separated they live in"},
        {img:"product-7.jpg", date: "Aug 27, 2025", author: "Admin", comments: 2, title: "Far far away, behind the word mountains", desc: "Mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in"},
    ];

    props.useObserver();

    return (
        <>
        <section className="bg-secondary py-20">
            <div className="container mx-auto max-w-7xl px-4">
                {/* Outer flex */}
                <div className="flex flex-wrap ">
                    
                    {/* BLOGS SECTION */}
                    <div className="w-full sm:basis-3/4 space-y-5">
                        {blogs.map((blog, index) => (
                            <div key={index} className="flex flex-col sm:flex-row bg-secondary p-4 animate">
                                <img src={`./${blog.img}`} alt="" className="sm:w-1/3 rounded-lg" />
                                <div className="flex flex-col sm:ml-4 mt-4 sm:mt-0">
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                                        <small><i className="bi bi-calendar me-1" />{blog.date}</small>
                                        <small><i className="bi bi-person me-1" />{blog.author}</small>
                                        <small><i className="bi bi-chat me-1" />{blog.comments}</small>
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                                    <p className="text-gray-700 mb-4">{blog.desc}</p>
                                    <Button link="/blogs" name="Read More" className="w-1/2 sm:w-1/4" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ASIDE SECTION */}
                    <Aside />
                </div>
            </div>
        </section>
        </>
    )
}