
import { Link } from "react-router-dom"
import Recent from "./Recent"
import Button from "../Button"
export default function Aside() {

    return (
        <aside className="w-full sm:basis-1/4 bg-secondary p-4">
            <div className="relative w-full flex flex-col mb-26">
                <input type="search" placeholder="Search..." className="border-light"/>
                <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <i className="bi bi-search"/>
                </span>
            </div>
            <div className="flex flex-col space-y-6 mb-26">
                <h4>Categories</h4>
                <ul className="flex flex-col">
                    <li className="flex justify-between py-3 border-b border-light">
                        <Link to="/blogs">Vegetables</Link><span className="text-gray-400">(15)</span>
                    </li>
                    <li className="flex justify-between py-3 border-b border-light">
                        <Link to="/blogs">Fruits</Link><span className="text-gray-400">(09)</span>
                    </li>
                    <li className="flex justify-between py-3 border-b border-light">
                        <Link to="/blogs">Meat</Link><span className="text-gray-400">(17)</span>
                    </li>
                    <li className="flex justify-between py-3 border-b border-light">
                        <Link to="/blogs">Dairy</Link><span className="text-gray-400">(05)</span>
                    </li>
                </ul>
            </div>
            <Recent />
            {/* ----Tags Cloud----- */}
            <div className="flex flex-col space-y-8 my-26">
                <h4>Tags Cloud</h4>
                <div className="flex flex-wrap space-y-2">
                    <Link to="/blogs" ><Button name="Fruits" /></Link>
                    <Link to="/blogs" ><Button name="Vegetables" /></Link>
                    <Link to="/blogs" ><Button name="Meat" /></Link>
                    <Link to="/blogs" ><Button name="Dairy" /></Link>
                    <Link to="/blogs" ><Button name="Beverages" /></Link>
                    <Link to="/blogs" ><Button name="Breads" /></Link>
                </div>
                
            </div>
            {/* -----Paragrap------ */}
            <div className="flex flex-col space-y-6 my-26">
                <h4>Paragraph</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui est cum quos veniam rem iure exercitationem, vel distinctio iusto illo.</p>
                
            </div>
        </aside>
    )

}