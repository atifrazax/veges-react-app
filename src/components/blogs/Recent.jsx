
export default function Main() {

    const blogs = [
        {img:"product-3.jpg", date: "May 25, 2025", author: "Admin", comments: 3, title: "Far far away, behind the word mountains", },
        {img:"product-4.jpg", date: "May 27, 2021", author: "Admin", comments: 2, title: "Far far away, behind the word mountains", },
        {img:"product-2.jpg", date: "May 27, 2023", author: "Admin", comments: 2, title: "Far far away, behind the word mountains", },
        {img:"product-1.jpg", date: "Jun 27, 2022", author: "Admin", comments: 2, title: "Far far away, behind the word mountains", },
        {img:"product-7.jpg", date: "Aug 27, 2025", author: "Admin", comments: 2, title: "Far far away, behind the word mountains", },
    ];

    return (
        <>
        <h4 className="mb-14">Recent Blogs</h4>
        {/* RECENT BLOGS SECTION */}
        <div className="basis-3/4 space-y-6">
            {blogs.filter((_, index) => index < 3).map((blog, index) => (
                <div key={index} className="flex flex-row bg-secondary ">
                    <img src={`./${blog.img}`} alt="" className="w-1/3 h-1/3 rounded-lg" />
                    <div className="flex flex-col">
                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
                            <small><i className="bi bi-calendar me-1" />{blog.date}</small>
                            <small><i className="bi bi-person me-1" />{blog.author}</small>
                            <small><i className="bi bi-chat me-1" />{blog.comments}</small>
                        </div>
                        <h4 className="text-sm mb-2">{blog.title}</h4>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}