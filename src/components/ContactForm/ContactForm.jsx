import {Formik, Form, Field} from "formik"

export default function ContactForm({}) {


    return (
    <div>
        <Formik initialValues={{ name: "", number: "" }}>
                <Form>
                    <div>
                        <label htmlFor="">Name</label>
                        <Field type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="">Number</label>
                        <Field type="text" name="number" />
                    </div>
                    <button type="submit">Add contact</button>
                </Form>
        </Formik>
    </div>
    )
}