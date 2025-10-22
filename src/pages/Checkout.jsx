import Banner from "../components/Banner"
import Button from "../components/Button"
import Subscribe from "../components/Subscribe"
import {useObserver} from "../assets/hooks/Observer"
export default function Checkout() {
    useObserver();
    return (
        <>
        <Banner src="./vegetables-basket.jpg" page="Checkout"/>
        
        <section  className="bg-secondary py-35">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 flex flex-col sm:flex-col justify-between space-y-2 sm:gap-y-0 ">
                        <h3>Billing Details</h3>
                <div className="grid grid-cols-[1fr] sm:grid-cols-[7fr_5fr] gap-20 mt-4">
                    <div className=" flex flex-col">
                        <label htmlFor="f-name">First Name</label>
                        <input type="text" name="f-name" className="p-4 border-gray-300 my-2 animate"/>
                        
                        <label htmlFor="f-name">Last Name</label>
                        <input type="text" name="f-name" className="p-4 border-gray-300 my-2 animate"/>

                        <label htmlFor="state">State / Country</label>
                        <select name="state" className="p-4 border-gray-300 my-2 animate">
                            <option value="france">France</option>
                            <option value="germany">Germany</option>
                            <option value="italy">Italy</option>
                            <option value="uk">UK</option>
                            </select>
                        
                        <label htmlFor="street">Street Address</label>
                        <input type="text" name="street" className="p-4 border-gray-300 my-2 animate"/>
                        
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" className="p-4 border-gray-300 my-2 animate"/>
                        
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email" className="p-4 border-gray-300 my-2 animate"/>

                        <div className="space-x-4 mt-4">
                            <input type="radio" name="new" id="new" className="text-primary animate"/> <span>Create an account?</span>
                            <input type="radio" name="new" id="new" className="text-primary animate"/> <span>Ship to different address</span>
                        </div>
                        
                    </div>
                    <div className="">
                        <div className="flex flex-col space-y-4 p-8 border border-gray-100">
                            <h4>Cart Total</h4>
                            <div className="flex justify-between animate">
                                <span>Subtotal</span><span>$20.50</span>
                            </div>
                            <div className="flex justify-between animate">
                                <span>Shipping</span><span>$0.00</span>
                            </div>
                            <div className="flex justify-between animate">
                                <span>Tax</span><span>$0.00</span>
                            </div>
                            <div className="flex justify-between border-t border-gray-300 pt-4 font-semibold uppercase animate">
                                <span>Total</span>
                                <span>$20.50</span>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4 p-8 border border-gray-100 mt-16">
                            <div className="space-x-4 mt-4 animate">
                                <input type="radio" name="new" className="text-primary"/> <span>Direct Bank Tranfer</span>
                            </div>
                            <div className="space-x-4 mt-4 animate">
                                <input type="radio" name="new"className="text-primary"/> <span>Check Payment</span>
                            </div>
                            <div className="space-x-4 mt-4 animate">
                                <input type="radio" name="new" className="text-primary"/> <span>Paypal</span>
                            </div>
                            <div className="space-x-4 mt-4 animate">
                                <input type="checkbox" name="new" className="text-primary"/> <span> I have read and accept the terms and conditions</span>
                            </div>
                            <Button name="Place Order" className="mt-4 animate"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Subscribe />
        </>
    )
}