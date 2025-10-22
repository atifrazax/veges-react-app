import { useState } from "react";
import Banner from "../components/Banner";
import Button from "../components/Button";
import RelatedProducts from "../components/RelatedProducts";
import {useObserver} from "../assets/hooks/Observer";

export default function Single() {
    const [count, setCount] = useState(0);

    const handlePlusCount = () => {
        setCount(count + 1);
    };
    const handleMinusCount = () => {
        if (count <= 1) return;
        setCount(count - 1);
    };
    useObserver();
    return (
        <>
        <Banner src="./vegetables-basket.jpg" page="Single Product"/>

        <section  className="bg-secondary py-25">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="animate">
                        <img src="./product-1.jpg" alt="image" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h2>Bell Pepper</h2>
                        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 animate">
                            <span className="text-primary me-2">5.0</span>
                            <span className="text-primary me-8"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></span>
                            <span className="me-2">100</span><span className="text-gray-400 me-8"> Rating</span>
                            <span className="me-2">500</span><span className="text-gray-400 me-8"> Sold</span>
                        </div>
                        <span className="text-4xl mt-2 animate">$4.90</span>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda corrupti, sed fuga praesentium ex omnis aliquid error blanditiis excepturi, sequi dignissimos quaerat suscipit vero molestias deserunt, quis maiores molestiae eos quas minima. Nihil, mollitia ullam debitis laborum illo error facilis!</p>
                        <div>
                            <select id="vege" name="vege" className="border-gray-300 px-16 animate">
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="XL">XL</option>
                            </select>
                        </div>
                        <div>
                            <button type="submit" onClick={handleMinusCount} className="border-gray-100 border-2 py-2 px-4 me-2">-</button>
                            <input type="number" value={count || 1} min={1} readOnly className="border-gray-300 text-center px-1 sm:px-0"/>
                            <button type="submit" onClick={handlePlusCount} className="border-gray-100 border-2 py-2 px-4 ms-2">+</button>
                        </div>
                        <small>In Stock</small>
                        <Button name="Add to Cart" className="mt-4 w-1/2 animate"/>
                    </div>
                </div>
            </div>
        </section>
        < RelatedProducts />
        </>
    )
}