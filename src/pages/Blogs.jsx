import Banner from "../components/Banner";
import Main from "../components/blogs/Main";
import { useObserver } from "../assets/hooks/Observer";


export default function Blogs() {

    return (
        <>
        <Banner src="./vegetables-basket.jpg" page="Blogs"/>
        <Main useObserver={useObserver}/>
        </>
    )
}