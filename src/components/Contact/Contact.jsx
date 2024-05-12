import { FaSquarePhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";

export default function Contact({ contact: { name, number, id }, onDelete }) {
    return (
        <div>
            <div>
                <p><FaUser />{name}</p>
                <p><FaSquarePhone />{number}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}