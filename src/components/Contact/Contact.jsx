export default function Contact({ contact: { name, number } }) {
    return (
        <div>
            <div>
                <p>{name}</p>
                <p>{number}</p>
            </div>
            <button>Delete</button>
        </div>
    )
}