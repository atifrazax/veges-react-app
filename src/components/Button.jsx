
import { Link } from 'react-router-dom'
export default function Button(props) {
    if(props.link) {
    return (
        <Link to={props.link} className={`${props.className} bg-primary text-secondary text-center rounded-3xl px-5 py-2
             hover:bg-secondary hover:text-primary border-2 hover:border-primary
             transition-all duration-500`}>{props.name}
        </Link>
    )
}
    return (
        <button type={props.type} className={`${props.className} bg-primary text-secondary text-center rounded-3xl px-5 py-2
             hover:bg-secondary hover:text-primary border-2 hover:border-primary
             transition-all duration-500`}>{props.name}</button>
    )
}