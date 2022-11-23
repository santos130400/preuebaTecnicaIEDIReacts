import React from 'react';
import Estilos from './Form.module.css'

const Form = ({contact, setContact}) => {

    const handleChange = e => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    let{names, secondNames, email, cel, direction, user} = contact

    const handleSubmit = () => {
        //validación de los datos
        user = parseInt(user,10)
        if (names === '' || secondNames === '' || email === '' || cel === '' || direction === '' || user ==0 ) {
            alert('Todos los campos son obligatorios')
            return
        }

        //adicionar
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(contact)
        }
        fetch('http://localhost:2020/contacts', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))

        //reiniciando state de contacto
        setContact({
            names: '',
            secondNames: '',
            email: '',
            cel: '',
            direction: '',
            user: 0
        })



    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className={Estilos.contenedor}>
                <label htmlFor="names">Nombres:</label>
                <input value={names} name="names" onChange={handleChange} type="text" id="names" maxLength={45} required/>
            </div>
            <div className={Estilos.contenedor}>
                <label htmlFor="secondNames">Apellidos:</label>
                <input value={secondNames} name="secondNames" onChange={handleChange} type="secondNames" id="secondNames" maxLength={45} required/>
            </div>
            <div className={Estilos.contenedor}>
                <label htmlFor="email">Correo:</label>
                <input value={email} name="email" onChange={handleChange} type="text" id="email" maxLength={45} required/>
            </div>
            <div className={Estilos.contenedor}>
                <label htmlFor="cel">Telefono:</label>
                <input value={cel} name="cel" onChange={handleChange} type="number" id="cel" min={3000000000} max={39999999999} required/>
            </div>
            <div className={Estilos.contenedor}>
                <label htmlFor="direction">Dirección:</label>
                <input value={direction} name="direction" onChange={handleChange} type="text" id="direction" maxLength={45} required/>
            </div>
            <button type="submit" className={Estilos.boton}>Guardar</button>
        </form>
    );
}
 
export default Form;