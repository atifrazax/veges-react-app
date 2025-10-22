
export default function Banner(props) {

    return (
        <>
        <div className="relative w-full h-[50vh] flex justify-center text-center overflow- uppercase">
            <img src={props.src} alt="banner" className=" absolute w-full h-full object-cover"/>
            <div className="relative flex flex-col justify-center items-center space-y-2 text-light">
                <span>Home / {props.page}</span>
                <h1 className="text-secondary">{props.page}</h1>
                
            </div>
        </div>
        </>
    )
}