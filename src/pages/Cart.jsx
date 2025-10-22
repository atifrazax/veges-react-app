import { useState } from "react";
import Banner from "../components/Banner";
import Subscriber from "../components/Subscribe";
import Button from "../components/Button";
import { useObserver } from "../assets/hooks/Observer";


export default function Cart() {
    const initialProducts = [
        { id: 1, name: "Bell Pepper", image: "./product-1.jpg", price: 4.90, quantity: 2, description: "Far far away, the countries Vokalia and Consonantia" },
        { id: 2, name: "Strawberry", image: "./product-2.jpg", price: 2.90, quantity: 1, description: "Countries Vokalia and Consonantia" },
        { id: 3, name: "Green Beans", image: "./product-3.jpg", price: 1.90, quantity: 4, description: "Word mountains, far from the countries" },
    ]
    const [products, setProducts] = useState(initialProducts);

    const handleChanges = (id, value) => {
        const updatedProducts = products.map((p) => {
            if (p.id === id) {
                return {...p, quantity: value}
            }else{
                return p;
            }
        })
    setProducts(updatedProducts);
    }
    const handleDel = (id) => {
        const updatedList = products.filter((p)=>{
            return p.id !== id
        })
        setProducts(updatedList);
    }
    useObserver();
    return (
        <>
        <Banner src="./vegetables-basket.jpg" page="My Cart"/>
        
        <section  className="bg-secondary py-35">
            <div className=" overflow-x-auto container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                <ul className="min-w-[800px] flex flex-row justify-between items-center px-4 py-6 gap-0 sm:gap-0 bg-primary text-secondary overflow-auto">
                    <li className="w-1/7"></li>
                    <li className="w-1/5"></li>
                    <li className="w-1/4">Product Name</li>
                    <li className="w-1/6">Price</li>
                    <li className="w-1/6">Quantity</li>
                    <li className="w-1/6">Total</li>
                </ul>
            {products.map((product, index)=>{
                return(
                    <ul key={index} className="min-w-[800px] flex flex-row justify-between items-center text-center py-2 
                        bg-secondary text-dark  border-1 border-gray-300">
                        <li className="w-1/7 hover:scale-150 hover:transition-all"  onClick={()=>handleDel(product.id)}><i className="bi bi-x-circle"/></li>
                        <li className="w-1/5">
                            <img src={product.image} alt="" />
                        </li>
                        <li className="w-1/4 flex flex-col space-y-2">
                            <span>{product.name}</span>
                            <p>{product.description}</p>
                        </li>
                        <li className="w-1/6">${product.price}</li>
                        <li className="w-1/6"><input type="number" value={product.quantity} min={1} max={10} onChange={e=>handleChanges(product.id, e.target.value)} className="text-center"/></li>
                        <li className="w-1/6">${(product.price * product.quantity).toFixed(2)}</li>
                    </ul>
                )
            })}
            
            </div>
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="flex flex-col space-y-4 p-8 animate">
                        <h4>Coupon</h4>
                        <p>Enter your coupon code if you have one</p>
                        <input type="text" className="border-gray-300 p-3"/>
                        <Button name="Apply Coupon" type="submit" className="w-full"/>
                    </div>
                    <div className="flex flex-col space-y-4 p-8 animate">
                        <h4>Estimate shipping and tax</h4>
                        <p>Enter your destination to get a shipping estimate</p>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" className="border-gray-300 p-3"/>
                        <label htmlFor="state">State/Province</label>
                        <input type="text" name="state" className="border-gray-300 p-3"/>
                        <label htmlFor="zip">Zip/Postal Code</label>
                        <input type="text" name="zip" className="border-gray-300 p-3"/>
                        <Button name="Estimate" type="submit" className="w-full"/>
                    </div>
                    <div className="flex flex-col space-y-4 p-8 animate">
                        <h4>Cart Total</h4>
                        <div className="flex justify-between">
                            <span>Subtotal</span><span>${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span><span>$0.00</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tax</span><span>$0.00</span>
                        </div>
                        <div className="flex justify-between border-t border-gray-300 pt-4 font-semibold uppercase">
                            <span>Total</span>
                            <span>${products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}</span>
                        </div>
                        
                        <Button name="Checkout" type="submit" />
                    </div>
                </div>
            </div>
        </section>
        <Subscriber />
        </>
    )
}