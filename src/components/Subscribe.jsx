import { useState } from "react"
// import {useObserver} from "../assets/hooks/Observer"
export default function Subscribe() {
    const [email, setEmail] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if(email) {
            alert(`News letters subscribed for ${email}`) // testing purpose only
            setEmail("")
        }
    }
    // useObserver();

    return (
        <div className="bg-light py-25">
            <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-10 gap-y-10 sm:gap-y-0 ">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full mb-10 animate">
                        <h2 className="mb-2">Subcribe to our Newsletter</h2>
                        <p>Get e-mail updates about our latest shops and special offers</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-row w-full animate">
                        <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter email address" className="w-full border-0 py-3"/>
                        <button 
                            type="submit" 
                            className="bg-primary text-secondary px-5 py-2
                            hover:bg-secondary hover:text-primary border-2
                            transition-all duration-500 border-primary"
                            >Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}