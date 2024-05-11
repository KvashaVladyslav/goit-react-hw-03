import {Formik, Form, Field} from "formik"
import { nanoid } from "nanoid"
import { useId } from "react"

export default function ContactForm({ onAdd }) {

    const handleSubmit = (values, actions) => {
        onAdd({...values, id: nanoid()})
        actions.resetForm()
    }

    const nameFieldId = useId();
    const numberFieldId = useId();

    return (
    <div>
        <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label htmlFor={nameFieldId}>Name</label>
                        <Field type="text" name="name" id={nameFieldId} />
                    </div>
                    <div>
                        <label htmlFor={numberFieldId}>Number</label>
                        <Field type="text" name="number" id={numberFieldId} />
                    </div>
                    <button type="submit">Add contact</button>
                </Form>
        </Formik>
    </div>
    )
}