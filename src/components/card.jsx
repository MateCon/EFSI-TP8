import { Link } from "react-router-dom";

export default function Card(props) {
    return (
        <Link to={props.href} className="text-center p-2 border-2 border-[#71a7ab] hover:bg-[#71a7ab] hover:cursor-pointer rounded-sm transition" style={{ position: 'relative' }}>
            <img className="w-full" src={props.thumbnail} alt="lavatorio" />
            <h3 className="text-lg font-bold pt-1 leading-tight">{props.title}</h3>
            <p className=" leading-tight">{props.description}</p>
            {props.enCarrito && <p style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 60,
                height: 60,
                fontSize: 10
            }} className="bg-green-500 rounded-full grid place-content-center">EN CARRITO</p>}
        </Link>
    )
}