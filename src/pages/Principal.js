import React, {Fragment, useState, useEffect} from 'react';
import Navbar from '../componentes/principal/navbar/Navbar';
import ContactList from '../componentes/principal/contactList/ContactList';
import Form from '../componentes/principal/form/Form';
import Estilos from './Principal.module.css'

function Principal() {

  const [contact, setContact] = useState({
    names: '',
    secondNames: '',
    email: '',
    cel: '',
    direction: '',
    favorite: 1
  })

  const [contacts, setContacts] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getContacts = () => {
      fetch('http://localhost:2020/contacts')
      .then(res => res.json())
      .then(res => setContacts(res))
    }
    getContacts()
    setListUpdated(false)
  }, [listUpdated])

  return (
    <Fragment>
      <Navbar brand='Libreta de contactos'/>
      <div className={Estilos.container}>
        <div className={Estilos.contenido}>
          <div className={Estilos.lista}>
            <h2>Lista de contactos</h2>
            <ContactList contact={contact} setContact={setContact} contacts={contacts} setListUpdated={setListUpdated}/>
          </div>
          <div className={Estilos.formulario}>
            <h2>Crear/modificar contacto</h2>
            <Form contact={contact} setContact={setContact}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Principal;