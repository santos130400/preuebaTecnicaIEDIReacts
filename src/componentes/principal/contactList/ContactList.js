import React from 'react';
import Estilos from './ContactList.module.css'

const ContactList = ({contact, setContact, contacts, setListUpdated}) => {


    const handleDelete = id => {
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:2020/contacts/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        setListUpdated(true)
    }

    let{names, secondNames, email, cel, direction} = contact
    const handleUpdate = id => {
        //validación de los datos
        if (names === '' || secondNames === '' || email === '' || cel === '' || direction === '') {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contact)
        }
        fetch('http://localhost:2020/contacts/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de contacto
        setContact({
            names: '',
            secondNames: '',
            email: '',
            cel: '',
            direction: ''
        })
        setListUpdated(true)
    }


    return ( 
        <table className={Estilos.tabla}>
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Email</th>
                    <th>Telefono</th>
                    <th>Dirección</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map(contact => (
                    <tr key={contact.idContacts}>
                        <td>{contact.names}</td>
                        <td>{contact.secondNames}</td>
                        <td>{contact.email}</td>
                        <td>{contact.cel}</td>
                        <td>{contact.direction}</td>
                        <td>
                            <div className={Estilos.acciones}>
                                <button onClick={() => handleDelete(contact.idContacts)}>Delete</button>
                                <button onClick={() => handleUpdate(contact.idContacts)}>Update</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default ContactList;