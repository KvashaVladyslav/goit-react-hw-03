import ContactForm from "../ContactForm/ContactForm"
import SearchBox from "../SearchBox/SearchBox"
import ContactList from "../ContactList/ContactList"
import contacts from "/src/contacts.json"
import { useState } from "react"

export default function App() {
    const [contactsData, setContactsData] = useState(contacts)
    const [filter, setFilter] = useState('')

    const addContact = (newContact) => {
        setContactsData((contactsData) => {
            return [...contactsData, newContact]
        })
    }

    const deleteContact = (contactId) => {
        setContactsData((contactsData) => {
            return contactsData.filter((contact) => contact.id !== contactId)
        })
    }

    const visibleContacts = contactsData.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

    
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm onAdd={addContact} />
            <SearchBox value={filter} onFilter={setFilter} />
            <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        </div>
    )
}