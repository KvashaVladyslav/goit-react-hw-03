import Contact from "../Contact/Contact";

export default function ContactList({ contacts, onDelete}) {
    return (
        <ul>
            {contacts.map((contact) => <li key={contact.id}><Contact onDelete={onDelete} contact={contact} /></li>)}
        </ul>
    )
    
}