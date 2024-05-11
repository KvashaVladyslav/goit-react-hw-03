export default function Contact({ contact: { name, number, id }, onDelete }) {
    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    )
}